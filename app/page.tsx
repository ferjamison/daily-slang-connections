import Link from "next/link";
import { getPuzzleByDate } from "@/lib/puzzles";
import { getPuzzleWordOrder } from "@/lib/wordOrder";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const puzzle = await getPuzzleByDate();
  const words = getPuzzleWordOrder(puzzle.words, puzzle.date);

  return (
    <main className="home-page">
      <section className="home-main">
        <div className="home-intro">
          <p className="eyebrow">{puzzle.date}</p>
          <h1>Daily Slang Connections</h1>
          <p>A daily word-grouping game for learning American slang.</p>
          <Link className="button-link primary" href="/today">
            Play Today&apos;s Puzzle
          </Link>
        </div>

        <div className="today-words">
          <div className="section-head">
            <h2>Today&apos;s Words</h2>
            <span>16 slang terms</span>
          </div>
          <div className="word-preview-grid" aria-label="Today slang words">
            {words.map((word) => (
              <span key={word}>{word}</span>
            ))}
          </div>
        </div>

        <div className="help-panel">
          <h2>Need help?</h2>
          <div className="hero-actions">
            <Link className="button-link" href="/hints">
              Get Hints
            </Link>
            <Link className="button-link" href="/answers">
              See Answers
            </Link>
          </div>
        </div>
      </section>

      <section className="home-cards" aria-label="Slang guide shortcuts">
        <Link className="card prose" href="/answers">
          <h2>Learn Today&apos;s Slang</h2>
          <p>See what today&apos;s puzzle words mean and how they are used.</p>
        </Link>
        <Link className="card prose" href="/slang-people-use-when-texting">
          <h2>Browse Slang Categories</h2>
          <p>Explore slang by texting, dating, TikTok, and Gen Z situations.</p>
        </Link>
        <Link className="card prose" href="/what-does-no-cap-mean">
          <h2>Popular Slang Meanings</h2>
          <p>Read clear meanings for no cap, rizz, low-key, sus, and more.</p>
        </Link>
      </section>
    </main>
  );
}
