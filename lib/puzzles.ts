import type { Puzzle } from "./types";
import { createPublicSupabaseClient } from "./supabase";
import { samplePuzzle } from "./seed";

export type PuzzleSlot = "morning" | "evening";

function todayShanghaiDate() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const map = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${map.year}-${map.month}-${map.day}`;
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

export async function getPuzzleByDate(date = todayShanghaiDate(), slot: PuzzleSlot = currentShanghaiSlot()): Promise<Puzzle> {
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
    .order("slot", { ascending: true })
    .limit(60);

  if (error || !data?.length) return [samplePuzzle];
  return data.map(normalizePuzzle);
}

export async function getPuzzleSequence(): Promise<Puzzle[]> {
  const puzzles = await getArchivePuzzles();
  return [...puzzles].sort((left, right) => {
    if (left.date !== right.date) return right.date.localeCompare(left.date);
    if (left.slot === right.slot) return 0;
    return left.slot === "evening" ? -1 : 1;
  });
}

export function getNextPuzzleHref(puzzles: Puzzle[], current: Puzzle) {
  const index = puzzles.findIndex((puzzle) => puzzle.date === current.date && puzzle.slot === current.slot);
  const nextPuzzle = puzzles[index >= 0 ? index + 1 : 0];
  if (!nextPuzzle) return undefined;
  return `/today?date=${nextPuzzle.date}&slot=${nextPuzzle.slot}`;
}
