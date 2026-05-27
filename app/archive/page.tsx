import type { Metadata } from "next";
import Link from "next/link";
import { getArchivePuzzles } from "@/lib/puzzles";

export const metadata: Metadata = {
  title: "Puzzle Archive",
  description: "Replay previous Daily Slang Connections puzzles by date and time slot.",
};

export default async function ArchivePage() {
  const puzzles = await getArchivePuzzles();

  return (
    <main className="page narrow prose">
      <section className="card prose">
        <h1>Puzzle Archive</h1>
        <p>
          Replay older Daily Slang Connections puzzles. Each archive page has its own date and
          time slot, so you can practice past slang groups instead of only playing today's puzzle.
        </p>
      </section>

      <section className="card prose">
        <h2>How to Use the Archive</h2>
        <p>
          Choose one older puzzle and play it without checking the answers first. If you want a
          longer study session, solve one morning puzzle and one evening puzzle, then compare the
          answer explanations.
        </p>
      </section>

      <section className="card prose">
        <h2>Past Puzzles</h2>
        <div className="article-list">
          {puzzles.map((puzzle) => (
            <Link href={`/archive/${puzzle.date}/${puzzle.slot}`} key={`${puzzle.date}-${puzzle.slot}`}>
              <strong>{puzzle.date} · {puzzle.slot}</strong>
              <span>{puzzle.categories.map((category) => category.name).join(" · ")}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
