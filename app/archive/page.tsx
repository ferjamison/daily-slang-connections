import type { Metadata } from "next";
import Link from "next/link";
import { getArchivePuzzles } from "@/lib/puzzles";

export const metadata: Metadata = {
  title: "Puzzle Archive",
  description: "Browse previous Daily Slang Connections puzzles.",
};

export default async function ArchivePage() {
  const puzzles = await getArchivePuzzles();

  return (
    <main className="page narrow prose">
      <h1>Archive</h1>
      <p>Practice with previous American slang category puzzles.</p>
      <section className="card prose">
        {puzzles.map((puzzle) => (
          <p key={puzzle.id}>
            <Link href={`/today?date=${puzzle.date}&slot=${puzzle.slot}`}>
              {puzzle.date} - {puzzle.slot}
            </Link>
          </p>
        ))}
      </section>
    </main>
  );
}
