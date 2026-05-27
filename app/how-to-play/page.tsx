import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Play",
  description: "Learn the rules of Daily Slang Connections and how to use it for English study.",
};

export default function HowToPlayPage() {
  return (
    <main className="page narrow prose">
      <section className="card prose">
        <h1>How to Play Daily Slang Connections</h1>
        <p>
          Daily Slang Connections is a word-grouping game for English learners. Every puzzle has
          16 lowercase American slang words or casual phrases. Your goal is to find 4 groups, with
          4 words in each group. Each group shares one meaning, social situation, or speaking
          purpose.
        </p>
      </section>

      <section className="card prose">
        <h2>The Rules</h2>
        <ol>
          <li>Read all 16 words before choosing.</li>
          <li>Select exactly 4 words that you think belong together.</li>
          <li>Press Submit to check your group.</li>
          <li>If the group is correct, it locks and shows the category name.</li>
          <li>If the group is wrong, you lose one try.</li>
          <li>Use hints when you need a small clue without seeing the answer.</li>
        </ol>
        <p>
          The puzzle ends when you solve all 4 groups or use all your tries. After the game, review
          the full answer and the simple English explanations.
        </p>
      </section>

      <section className="card prose">
        <h2>Example Group</h2>
        <p>
          A group for "very good" might include <strong>lit</strong>, <strong>fire</strong>,{" "}
          <strong>dope</strong>, and <strong>sick</strong>. These words do not look the same, but
          in casual American English they can all praise something.
        </p>
        <p>
          A group for "not replying or canceling" might include <strong>ghosted</strong>,{" "}
          <strong>left on read</strong>, <strong>flaked</strong>, and <strong>bailed</strong>.
          These phrases connect through social behavior, not grammar.
        </p>
      </section>

      <section className="card prose">
        <h2>Study Method for English Learners</h2>
        <p>
          Start with words you already know. Then ask which other words could appear in the same
          short conversation. This is better than memorizing a random list because slang depends on
          context and tone.
        </p>
        <p>
          After you finish, write one simple sentence for each new phrase. Keep the sentence short:
          "That movie was fire" or "He bailed on the plan." This makes the slang easier to
          remember and easier to use naturally.
        </p>
      </section>

      <section className="card prose">
        <h2>Why Grouping Helps Memory</h2>
        <p>
          Your brain remembers vocabulary better when words are connected. A group gives you a
          small map: words for agreement, words for money, words for texting, words for suspicion,
          words for relaxing, and so on.
        </p>
        <p>
          This kind of practice also improves listening. When you hear an unfamiliar phrase in a
          video or conversation, you can use the situation to guess the meaning.
        </p>
      </section>
    </main>
  );
}
