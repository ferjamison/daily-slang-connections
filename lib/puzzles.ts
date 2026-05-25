import type { Puzzle } from "./types";
import { createPublicSupabaseClient } from "./supabase";
import { samplePuzzle } from "./seed";

export type PuzzleSlot = "morning" | "evening";

function todayIsoDate() {
  return new Date().toISOString().slice(0, 10);
}

function currentShanghaiSlot(): PuzzleSlot {
  const hour = Number(new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Shanghai",
    hour: "2-digit",
    hour12: false,
  }).format(new Date()));
  return hour >= 18 ? "evening" : "morning";
}

function normalizePuzzle(row: unknown): Puzzle {
  return row as Puzzle;
}

export async function getPuzzleByDate(date = todayIsoDate(), slot: PuzzleSlot = currentShanghaiSlot()): Promise<Puzzle> {
  const supabase = createPublicSupabaseClient();
  if (!supabase) return { ...samplePuzzle, date, slot };

  const { data, error } = await supabase
    .from("puzzles")
    .select("*")
    .eq("date", date)
    .eq("slot", slot)
    .maybeSingle();

  if (error || !data) return { ...samplePuzzle, date, slot };
  return normalizePuzzle(data);
}

export async function getArchivePuzzles(): Promise<Puzzle[]> {
  const supabase = createPublicSupabaseClient();
  if (!supabase) return [samplePuzzle];

  const { data, error } = await supabase
    .from("puzzles")
    .select("*")
    .order("date", { ascending: false })
    .limit(30);

  if (error || !data?.length) return [samplePuzzle];
  return data.map(normalizePuzzle);
}
