import type { Metadata } from "next";
import { getPuzzleByDate } from "@/lib/puzzles";

export const metadata: Metadata = {
  title: "Today’s Hints",
  description: "Get spoiler-light hints for today’s Daily Slang Connections puzzle.",
};

export default async function HintsPage() {
  const puzzle = await getPuzzleByDate();

  return (
    <main className="page narrow prose">
      <h1>Today’s Hints</h1>
      <p>
        These hints point to the meaning or situation behind each group. They do not reveal the
        exact category names.
      </p>
      <section className="card prose">
        <h2>Daily Slang Connections</h2>
        <ol>
          {puzzle.hints.map((hint) => (
            <li key={hint}>{hint}</li>
          ))}
        </ol>
      </section>
    </main>
  );
}
