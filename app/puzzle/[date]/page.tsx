import type { Metadata } from "next";
import Link from "next/link";
import { Game } from "@/components/Game";
import { getPuzzleByDate } from "@/lib/puzzles";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ date: string }>;
}): Promise<Metadata> {
  const { date } = await params;
  return {
    title: `${date} Slang Puzzle`,
    description: `Play the ${date} Daily Slang Connections puzzle and review hints or answers after the board.`,
  };
}

export default async function DatedPuzzlePage({ params }: { params: Promise<{ date: string }> }) {
  const { date } = await params;
  const puzzle = await getPuzzleByDate(date, "morning");

  return (
    <>
      <Game puzzle={puzzle} />
      <section className="page narrow prose" aria-label="Dated puzzle links">
        <section className="card prose">
          <h2>{date} Puzzle Notes</h2>
          <p>
            This is the Daily Slang Connections board for {date}. Play the 16-word grid first, then
            use the hints page if you want a nudge or the answers page if you want the full category
            explanations.
          </p>
          <div className="inline-links">
            <Link href={`/hints/${date}`}>Hints for this date</Link>
            <Link href={`/answers/${date}`}>Answers for this date</Link>
            <Link href="/today">Play another puzzle</Link>
          </div>
        </section>
      </section>
    </>
  );
}
