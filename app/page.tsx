import Link from "next/link";
import { getPuzzleByDate } from "@/lib/puzzles";
import { learnArticles } from "@/lib/learn";

export default async function HomePage() {
  const puzzle = await getPuzzleByDate();
  const previewWords = puzzle.words.slice(0, 8);

  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-hero-copy">
          <p className="eyebrow">American slang for English learners</p>
          <h1>Daily Slang Connections</h1>
          <p>
            A daily word-grouping game that helps you learn real American slang by meaning,
            situation, and tone. Sort 16 casual words or phrases into 4 clear groups, then review
            simple English explanations written for B1-B2 learners.
          </p>
          <div className="hero-actions">
            <Link className="button-link primary" href="/today">
              Play today's puzzle
            </Link>
            <Link className="button-link" href="/how-to-play">
              How to play
            </Link>
          </div>
        </div>

        <aside className="today-preview" aria-label="Today puzzle preview">
          <div className="preview-head">
            <span>{puzzle.date}</span>
            <strong>16 words · 4 groups</strong>
          </div>
          <div className="mini-grid">
            {previewWords.map((word) => (
              <span key={word}>{word}</span>
            ))}
          </div>
          <Link href="/today">Open the full puzzle</Link>
        </aside>
      </section>

      <section className="home-section prose">
        <h2>What Is Daily Slang Connections?</h2>
        <p>
          Daily Slang Connections is a short American English learning game. Each puzzle gives you
          everyday slang, texting phrases, casual reactions, and spoken expressions. Instead of
          memorizing one word at a time, you compare phrases and find the shared idea behind them.
        </p>
        <p>
          This is useful because slang is not only vocabulary. It also carries attitude. A phrase
          can sound relaxed, excited, suspicious, friendly, annoyed, or playful. Grouping phrases
          helps you notice those patterns faster.
        </p>
      </section>

      <section className="home-grid">
        <article className="card prose">
          <h2>For English Learners</h2>
          <p>
            The game is designed for learners who already know basic English but want to understand
            videos, podcasts, comments, and everyday American conversation more comfortably.
          </p>
        </article>

        <article className="card prose">
          <h2>Twice Daily Practice</h2>
          <p>
            New puzzles are created every morning and evening. Older puzzles stay available in the
            archive, so you can practice when you have more study time.
          </p>
        </article>

        <article className="card prose">
          <h2>Simple Explanations</h2>
          <p>
            After each puzzle, answer notes explain every group and each slang phrase in simple
            English. The goal is practical understanding, not complicated grammar labels.
          </p>
        </article>
      </section>

      <section className="home-section prose">
        <h2>Start Learning</h2>
        <div className="article-list">
          <Link href="/today">
            <strong>Play today's puzzle</strong>
            <span>Try the current 16-word slang grouping challenge.</span>
          </Link>
          <Link href="/archive">
            <strong>Browse the archive</strong>
            <span>Replay previous morning and evening puzzles by date.</span>
          </Link>
          <Link href="/answers">
            <strong>Read today's answers</strong>
            <span>Review categories and simple definitions after playing.</span>
          </Link>
        </div>
      </section>

      <section className="home-section prose">
        <h2>Learn American Slang</h2>
        <div className="article-list">
          {learnArticles.map((article) => (
            <Link href={`/learn/${article.slug}`} key={article.slug}>
              <strong>{article.title}</strong>
              <span>{article.description}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
