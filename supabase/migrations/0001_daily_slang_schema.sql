create extension if not exists "pgcrypto";

create table if not exists public.puzzles (
  id uuid primary key default gen_random_uuid(),
  date date not null,
  slot text not null default 'morning',
  title text not null,
  words jsonb not null,
  categories jsonb not null,
  hints jsonb not null,
  full_explanation text not null,
  created_at timestamptz not null default now(),
  constraint puzzles_words_is_array check (jsonb_typeof(words) = 'array' and jsonb_array_length(words) = 16),
  constraint puzzles_categories_is_array check (jsonb_typeof(categories) = 'array' and jsonb_array_length(categories) = 4),
  constraint puzzles_hints_is_array check (jsonb_typeof(hints) = 'array' and jsonb_array_length(hints) = 4),
  constraint puzzles_slot_valid check (slot in ('morning', 'evening')),
  unique (date, slot)
);

create table if not exists public.userprogress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  puzzle_date date not null references public.puzzles(date) on delete cascade,
  selected_words jsonb not null default '[]'::jsonb,
  solved_at timestamptz,
  attempts integer not null default 0,
  status text not null default 'in_progress',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint userprogress_selected_words_is_array check (jsonb_typeof(selected_words) = 'array'),
  constraint userprogress_attempts_nonnegative check (attempts >= 0),
  constraint userprogress_status_valid check (status in ('in_progress', 'solved', 'failed')),
  unique (user_id, puzzle_date)
);

create index if not exists puzzles_date_idx on public.puzzles (date desc, slot);
create index if not exists userprogress_user_date_idx on public.userprogress (user_id, puzzle_date desc);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists userprogress_set_updated_at on public.userprogress;
create trigger userprogress_set_updated_at
before update on public.userprogress
for each row execute function public.set_updated_at();

alter table public.puzzles enable row level security;
alter table public.userprogress enable row level security;

drop policy if exists "Puzzles are readable by everyone" on public.puzzles;
create policy "Puzzles are readable by everyone"
on public.puzzles
for select
using (true);

-- No insert/update/delete policy is defined for anon/authenticated clients.
-- Only privileged server code using the service-role key can write puzzles,
-- because Supabase service-role requests bypass RLS.

drop policy if exists "Users can read their own progress" on public.userprogress;
create policy "Users can read their own progress"
on public.userprogress
for select
using (auth.uid() = user_id);

drop policy if exists "Users can insert their own progress" on public.userprogress;
create policy "Users can insert their own progress"
on public.userprogress
for insert
with check (auth.uid() = user_id);

drop policy if exists "Users can update their own progress" on public.userprogress;
create policy "Users can update their own progress"
on public.userprogress
for update
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

drop policy if exists "Users can delete their own progress" on public.userprogress;
create policy "Users can delete their own progress"
on public.userprogress
for delete
using (auth.uid() = user_id);
