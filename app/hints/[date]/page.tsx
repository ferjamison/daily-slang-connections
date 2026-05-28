import type { Metadata } from "next";
import Link from "next/link";
import { getPuzzleByDate } from "@/lib/puzzles";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ date: string }>;
}): Promise<Metadata> {
  const { date } = await params;
  return {
    title: `${date} Hints`,
    description: `Spoiler-light hints for the ${date} Daily Slang Connections puzzle.`,
  };
}

export default async function DatedHintsPage({ params }: { params: Promise<{ date: string }> }) {
  const { date } = await params;
  const puzzle = await getPuzzleByDate(date, "morning");

  return (
    <main className="page narrow prose">
      <section className="card prose">
        <p className="eyebrow">{date}</p>
        <h1>Daily Slang Puzzle Hints</h1>
        <p>
          These clues are for the {date} Daily Slang Connections puzzle. They point toward each
          hidden category without giving away the exact answer. Use them when you have a few words
          that seem connected but need one more nudge.
        </p>
      </section>

      <section className="card prose">
        <h2>Today's Category Hints</h2>
        <ol>
          {puzzle.hints.map((hint, index) => (
            <li key={hint}>
              <strong>Hint {index + 1}:</strong> {hint}
            </li>
          ))}
        </ol>
      </section>

      <section className="card prose">
        <h2>How to Use These Hints</h2>
        <p>
          First, remove any solved group from your mind and focus only on the remaining words.
          Then ask whether a hint describes meaning, tone, or a social situation. Slang categories
          often become clearer when you imagine the phrase inside a short text message.
        </p>
        <p>
          If a hint mentions money, plans, suspicion, praise, leaving, texting, or exaggeration,
          look for words that could naturally appear in that scene. The category name may be
          different, but the situation will usually match.
        </p>
      </section>

      <section className="card prose">
        <h2>Related Pages</h2>
        <div className="inline-links">
          <Link href={`/puzzle/${date}`}>Play this puzzle</Link>
          <Link href={`/answers/${date}`}>See answers</Link>
          <Link href="/archive">Archive</Link>
        </div>
      </section>
    </main>
  );
}
