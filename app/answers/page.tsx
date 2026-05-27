import type { Metadata } from "next";
import { getPuzzleByDate } from "@/lib/puzzles";

export const metadata: Metadata = {
  title: "Today's Answers",
  description: "Review today's Daily Slang Connections answers with simple English explanations.",
};

export default async function AnswersPage() {
  const puzzle = await getPuzzleByDate();

  return (
    <main className="page narrow prose">
      <section className="card prose">
        <p className="eyebrow">{puzzle.date}</p>
        <h1>Today's Answers</h1>
        <p>{puzzle.full_explanation}</p>
        <p>
          These notes explain the answer in plain English. Read the group explanation first, then
          review each slang word or phrase in the table below.
        </p>
      </section>

      <section className="card prose">
        <h2>How to Review the Answers</h2>
        <p>
          Do not only memorize the translation. Try to remember the situation. For example, a word
          about agreement may appear when friends make plans, while a word about suspicion may
          appear when something feels strange or not trustworthy.
        </p>
        <p>
          After reading each group, look back at the puzzle board and notice which words were close
          traps. That is usually where the puzzle becomes interesting.
        </p>
      </section>

      {puzzle.categories.map((category) => (
        <section className="card prose" key={category.name}>
          <p className="eyebrow">{category.difficulty}</p>
          <h2>{category.name}</h2>
          <p>
            <strong>Words:</strong> {category.words.join(", ")}
          </p>
          <p>{category.explanation}</p>
          <div className="definition-table">
            {category.definitions.map((definition) => (
              <div className="definition-row" key={definition.word}>
                <strong>{definition.word}</strong>
                <span>{definition.meaning}</span>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
