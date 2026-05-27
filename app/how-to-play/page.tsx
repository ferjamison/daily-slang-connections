import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Play",
  description: "Learn the rules of Daily Slang Connections and how the daily slang puzzle works.",
};

export default function HowToPlayPage() {
  return (
    <main className="page narrow prose">
      <section className="card prose">
        <h1>How to Play Daily Slang Connections</h1>
        <p>
          Daily Slang Connections is a word-grouping game built around American slang and casual
          English. Every puzzle has 16 lowercase words or phrases. Your goal is to find 4 groups,
          with 4 words in each group. Each group shares one meaning, social situation, or speaking
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
        <h2>How to Think Through a Board</h2>
        <p>
          Start with words you already know. Then ask which other words could appear in the same
          short conversation. Some categories are direct synonyms, but others are about a shared
          scene, like texting, canceling plans, reacting to gossip, or talking about money.
        </p>
        <p>
          After you finish, check the answer explanations. They give the plain meaning behind the
          group, so the board feels fair even when a phrase was new to you.
        </p>
      </section>

      <section className="card prose">
        <h2>Why Grouping Feels Good</h2>
        <p>
          A good puzzle makes you compare words that almost fit, then notice the cleaner pattern.
          A group gives you a small map: words for agreement, words for money, words for texting,
          words for suspicion, words for relaxing, and so on.
        </p>
        <p>
          That comparison is the core of the game. The answer should feel clear once you see it,
          even if the route there was a little tricky.
        </p>
      </section>
    </main>
  );
}
