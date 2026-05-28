import Link from "next/link";
import { getPuzzleByDate } from "@/lib/puzzles";
import { learnArticles } from "@/lib/learn";
import { pillarPages, slangMeaningPages } from "@/lib/seoContent";

export default async function HomePage() {
  const puzzle = await getPuzzleByDate();
  const previewWords = puzzle.words.slice(0, 8);

  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-hero-copy">
          <p className="eyebrow">A daily English slang puzzle</p>
          <h1>Daily Slang Connections</h1>
          <p>
            A quick word-grouping game you can play anytime. Sort 16 slang words or casual phrases
            into 4 hidden groups, then check the answers to see the shared meaning, situation, or
            tone behind each set.
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
          Daily Slang Connections is a short American English puzzle game. Each puzzle gives you
          everyday slang, texting phrases, casual reactions, and spoken expressions. Your job is to
          spot the hidden connections and group the words before you run out of tries.
        </p>
        <p>
          The fun comes from the little shift in thinking: some groups are about meaning, some are
          about social situations, and some are about tone. A phrase can sound relaxed, excited,
          suspicious, friendly, annoyed, or playful.
        </p>
      </section>

      <section className="home-grid">
        <article className="card prose">
          <h2>Fast Daily Play</h2>
          <p>
            Each round is small enough to play in a few minutes, but tricky enough to make you
            compare meanings and second-guess your first instinct.
          </p>
        </article>

        <article className="card prose">
          <h2>Twice Daily Puzzles</h2>
          <p>
            New puzzles are created every morning and evening. Older puzzles stay available in the
            archive, so there is always another board to try.
          </p>
        </article>

        <article className="card prose">
          <h2>Simple Explanations</h2>
          <p>
            After each puzzle, answer notes explain every group and each slang phrase in simple
            English. They are there when you want the meaning behind the game.
          </p>
        </article>
      </section>

      <section className="home-section prose">
        <h2>Start Playing</h2>
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
        <h2>Popular Slang Puzzle Pages</h2>
        <div className="article-list">
          {pillarPages.map((page) => (
            <Link href={`/${page.slug}`} key={page.slug}>
              <strong>{page.title}</strong>
              <span>{page.description}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-section prose">
        <h2>Slang Guides</h2>
        <div className="article-list">
          {slangMeaningPages.slice(0, 8).map((article) => (
            <Link href={`/${article.slug}`} key={article.slug}>
              <strong>What does {article.phrase} mean?</strong>
              <span>{article.shortMeaning}</span>
            </Link>
          ))}
          {learnArticles.slice(0, 2).map((article) => (
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
