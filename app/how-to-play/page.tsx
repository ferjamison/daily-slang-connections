import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Play",
  description: "Learn the rules for Daily Slang Connections.",
};

export default function HowToPlayPage() {
  return (
    <main className="page narrow prose">
      <h1>How to Play</h1>
      <section className="card prose">
        <h2>Goal</h2>
        <p>
          Find four groups of related American slang words or casual phrases. Each group has four
          words that share a meaning or common use.
        </p>
        <h2>Rules</h2>
        <ol>
          <li>Tap four words that you think belong together.</li>
          <li>Press Submit to check your guess.</li>
          <li>If your group is correct, it locks and the category name appears.</li>
          <li>If your group is wrong, you lose one attempt.</li>
          <li>Use Hint when you need a clue. Hints do not directly reveal the answer.</li>
        </ol>
        <h2>Learning</h2>
        <p>
          After the game ends, read the simple explanations. They are written for B1-B2 English
          learners and focus on natural American usage.
        </p>
      </section>
    </main>
  );
}
