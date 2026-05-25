import type { Metadata } from "next";
import { getPuzzleByDate } from "@/lib/puzzles";

export const metadata: Metadata = {
  title: "Today’s Answers",
  description: "See today’s Daily Slang Connections answer groups and simple slang explanations.",
};

export default async function AnswersPage() {
  const puzzle = await getPuzzleByDate();

  return (
    <main className="page narrow prose">
      <h1>Today’s Answers</h1>
      <p>{puzzle.full_explanation}</p>
      {puzzle.categories.map((category) => (
        <section className="card prose" key={category.name}>
          <h2>{category.name}</h2>
          <p>
            <strong>Words:</strong> {category.words.join(", ")}
          </p>
          <p>
            <strong>Difficulty:</strong> {category.difficulty}
          </p>
          <p>{category.explanation}</p>
          <ul>
            {category.definitions.map((definition) => (
              <li key={definition.word}>
                <strong>{definition.word}:</strong> {definition.meaning}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
