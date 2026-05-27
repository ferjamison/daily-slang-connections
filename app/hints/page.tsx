import type { Metadata } from "next";
import { getPuzzleByDate } from "@/lib/puzzles";

export const metadata: Metadata = {
  title: "Today's Hints",
  description: "Get spoiler-light hints for today's Daily Slang Connections puzzle.",
};

export default async function HintsPage() {
  const puzzle = await getPuzzleByDate();

  return (
    <main className="page narrow prose">
      <section className="card prose">
        <p className="eyebrow">{puzzle.date}</p>
        <h1>Today's Hints</h1>
        <p>
          Use these hints when you are close to an answer but do not want the category name yet.
          Each clue points to meaning, situation, or tone. The goal is to help you notice the
          pattern yourself, not to remove the puzzle.
        </p>
      </section>

      <section className="card prose">
        <h2>Daily Slang Connections</h2>
        <p>
          Look for four groups of four slang words or casual phrases. A group may share a
          feeling, a texting habit, a money meaning, a reaction, or a common social situation.
        </p>
        <ol>
          {puzzle.hints.map((hint, index) => (
            <li key={hint}>
              <strong>Hint {index + 1}:</strong> {hint}
            </li>
          ))}
        </ol>
      </section>

      <section className="card prose">
        <h2>How to Use Hints Well</h2>
        <p>
          First, read all 16 words out loud and mark the phrases you already know. Then compare
          one known phrase with one unknown phrase. If both could appear in the same conversation,
          they might belong together.
        </p>
        <p>
          Good slang practice is not only about the answer. It is about asking, "When would an
          American speaker say this?" Try to connect each phrase to a short scene: texting a
          friend, reacting to good news, canceling plans, talking about money, or describing a
          person.
        </p>
      </section>
    </main>
  );
}
