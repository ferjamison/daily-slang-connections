import type { Metadata } from "next";
import Link from "next/link";
import { getArchivePuzzles } from "@/lib/puzzles";

export const metadata: Metadata = {
  title: "More Slang Puzzles",
  description: "Play more Daily Slang Connections puzzles by date and time slot.",
};

export const dynamic = "force-dynamic";

export default async function ArchivePage() {
  const puzzles = await getArchivePuzzles();

  return (
    <main className="page narrow prose">
      <section className="card prose">
        <h1>More Slang Puzzles</h1>
        <p>
          Want another round? Choose any previous Daily Slang Connections board, or finish today's
          puzzle and use the Next Puzzle button to keep playing.
        </p>
      </section>

      <section className="card prose">
        <h2>Puzzle List</h2>
        <div className="article-list">
          {puzzles.map((puzzle) => (
            <Link href={`/archive/${puzzle.date}/${puzzle.slot}`} key={`${puzzle.date}-${puzzle.slot}`}>
              <strong>{puzzle.date} - {puzzle.slot}</strong>
              <span>{puzzle.categories.map((category) => category.name).join(" - ")}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
