# Daily Slang Connections

A mobile-first American slang category puzzle for English learners. Each daily puzzle has 16 slang words or casual phrases that belong to 4 clear groups of 4.

## Local Setup

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

Open `http://localhost:3000`.

Without Supabase env vars, the app falls back to a built-in sample puzzle so the game is playable locally.

## Supabase

The database schema and RLS policies live in:

```bash
supabase/migrations/0001_daily_slang_schema.sql
```

Apply to a linked Supabase project:

```bash
supabase link --project-ref your-project-ref
supabase db push
```

## Daily Cron

`vercel.json` runs `/api/cron/generate-puzzle` twice per day:

- `0 22 * * *` = 06:00 Asia/Shanghai
- `0 10 * * *` = 18:00 Asia/Shanghai

Vercel Cron schedules are UTC.

The route requires `CRON_SECRET`, generates puzzles with OpenAI `gpt-5.4-mini`, and writes to Supabase with `SUPABASE_SERVICE_ROLE_KEY`.
