import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Game } from "@/components/Game";
import { getPuzzleByDate, type PuzzleSlot } from "@/lib/puzzles";

function isPuzzleSlot(slot: string): slot is PuzzleSlot {
  return slot === "morning" || slot === "evening";
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ date: string; slot: string }>;
}): Promise<Metadata> {
  const { date, slot } = await params;
  if (!isPuzzleSlot(slot)) {
    return {
      title: "Archive Puzzle",
    };
  }

  return {
    title: `${date} ${slot} Slang Puzzle`,
    description: `Play the ${date} ${slot} Daily Slang Connections archive puzzle with simple English explanations.`,
  };
}

export default async function ArchivePuzzlePage({
  params,
}: {
  params: Promise<{ date: string; slot: string }>;
}) {
  const { date, slot } = await params;
  if (!isPuzzleSlot(slot)) notFound();

  const puzzle = await getPuzzleByDate(date, slot);

  return (
    <>
      <Game puzzle={puzzle} />
      <section className="page narrow prose" aria-label="Archive puzzle study notes">
        <section className="card prose">
          <h2>About This Archive Puzzle</h2>
          <p>
            This archived Daily Slang Connections puzzle is from {date} in the {slot} slot. Use it
            as extra practice for American casual English. Try solving the 16-word grid first,
            then review the category explanations to learn how each phrase works in context.
          </p>
          <p>
            Archive puzzles are useful because slang memory improves through repeated comparison.
            When you revisit older groups, you start to notice common patterns: phrases for
            agreement, reactions, texting, plans, money, feelings, and social behavior.
          </p>
        </section>
      </section>
    </>
  );
}
