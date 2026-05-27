import { NextResponse } from "next/server";
import { generatePuzzle } from "@/lib/generatePuzzle";
import { createServiceSupabaseClient } from "@/lib/supabase";

export const runtime = "nodejs";

function isAuthorized(request: Request) {
  const secret = process.env.CRON_SECRET;
  if (!secret) return false;
  const auth = request.headers.get("authorization");
  return auth === `Bearer ${secret}`;
}

export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = createServiceSupabaseClient();
  if (!supabase) {
    return NextResponse.json(
      { error: "Supabase service environment variables are required." },
      { status: 500 },
    );
  }

  const puzzle = await generatePuzzle();
  const { error } = await supabase.from("puzzles").upsert(
    {
      date: puzzle.date,
      slot: puzzle.slot,
      title: puzzle.title,
      words: puzzle.words,
      categories: puzzle.categories,
      hints: puzzle.hints,
      full_explanation: puzzle.full_explanation,
    },
    { onConflict: "date,slot" },
  );

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true, date: puzzle.date, title: puzzle.title });
}
