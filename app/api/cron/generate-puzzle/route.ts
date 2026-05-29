import { NextResponse } from "next/server";
import { generatePuzzle } from "@/lib/generatePuzzle";
import type { PuzzleSlot } from "@/lib/puzzles";
import { createServiceSupabaseClient } from "@/lib/supabase";

export const runtime = "nodejs";
export const maxDuration = 60;

const slots: PuzzleSlot[] = ["morning", "evening"];
const maxGenerationAttempts = 3;

function isAuthorized(request: Request) {
  const secret = process.env.CRON_SECRET;
  if (!secret) return false;
  const auth = request.headers.get("authorization");
  return auth === `Bearer ${secret}`;
}

async function generatePuzzleWithRetry(date: string | undefined, slot: PuzzleSlot, excludedWords: string[]) {
  let lastError: unknown;

  for (let attempt = 1; attempt <= maxGenerationAttempts; attempt += 1) {
    try {
      return await generatePuzzle(date, slot, excludedWords);
    } catch (error) {
      lastError = error;
      console.warn("Puzzle generation attempt failed", {
        slot,
        attempt,
        message: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }

  throw lastError;
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

  const { data: recentPuzzles } = await supabase
    .from("puzzles")
    .select("words")
    .order("date", { ascending: false })
    .limit(6);
  const excludedWords = new Set(recentPuzzles?.flatMap((row) => row.words as string[]) ?? []);
  const requestedSlot = new URL(request.url).searchParams.get("slot");
  const slotsToGenerate = slots.includes(requestedSlot as PuzzleSlot)
    ? [requestedSlot as PuzzleSlot]
    : slots;

  const generated = [];
  let date: string | undefined;

  for (const slot of slotsToGenerate) {
    const puzzle = await generatePuzzleWithRetry(date, slot, [...excludedWords]);
    date = puzzle.date;
    puzzle.words.forEach((word) => excludedWords.add(word));
    generated.push(puzzle);
  }

  const { error } = await supabase.from("puzzles").upsert(
    generated.map((puzzle) => ({
      date: puzzle.date,
      slot: puzzle.slot,
      title: puzzle.title,
      words: puzzle.words,
      categories: puzzle.categories,
      hints: puzzle.hints,
      full_explanation: puzzle.full_explanation,
    })),
    { onConflict: "date,slot" },
  );

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({
    ok: true,
    generated: generated.map((puzzle) => ({
      date: puzzle.date,
      slot: puzzle.slot,
      title: puzzle.title,
    })),
  });
}
