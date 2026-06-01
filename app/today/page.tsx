import type { Metadata } from "next";
import { Game } from "@/components/Game";
import { getNextPuzzleHref, getPuzzleByDate, getPuzzleSequence } from "@/lib/puzzles";

export const metadata: Metadata = {
  title: "Today's American Slang Puzzle",
  description: "Play today's Daily Slang Connections puzzle and learn casual American English phrases.",
};

export default async function TodayPage({
  searchParams,
}: {
  searchParams: Promise<{ date?: string; slot?: string }>;
}) {
  const { date, slot } = await searchParams;
  const puzzle = await getPuzzleByDate(date, slot === "evening" || slot === "morning" ? slot : undefined);
  const puzzles = await getPuzzleSequence();
  const nextHref = getNextPuzzleHref(puzzles, puzzle);
  return <Game key={`${puzzle.date}-${puzzle.slot}-${puzzle.id}`} puzzle={puzzle} nextHref={nextHref} />;
}
