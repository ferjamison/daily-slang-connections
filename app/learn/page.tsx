import type { Metadata } from "next";
import Link from "next/link";
import { learnCategories } from "@/lib/learnCategories";
import { learnArticles } from "@/lib/learn";
import { coreSlangPages, longTailGuidePages, pillarPages } from "@/lib/seoContent";

export const metadata: Metadata = {
  title: "Learn American Slang",
  description: "A navigation center for slang meanings, slang situations, comparisons, and daily puzzle answers.",
};

export default function LearnPage() {
  const comparisonGuides = longTailGuidePages.filter((page) => page.slug.includes("-vs-"));
  const situationGuides = longTailGuidePages.filter((page) => page.slug.startsWith("slang-people-use"));
  const replyGuides = longTailGuidePages.filter((page) => page.slug.startsWith("how-"));

  return (
    <main className="page narrow prose">
      <section className="card prose">
        <p className="eyebrow">slang resource center</p>
        <h1>Learn American Slang</h1>
        <p>
          Not just slang meanings. Learn how slang connects by tone, situation, and real use. Start
          with a daily puzzle, then use these guides to understand why words belong together.
        </p>
      </section>

      <section className="card prose">
        <h2>Start with the Puzzle</h2>
        <div className="article-list">
          {pillarPages.map((page) => (
            <Link href={`/${page.slug}`} key={page.slug}>
              <strong>{page.title}</strong>
              <span>{page.description}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="card prose">
        <h2>Slang Categories</h2>
        <div className="article-list">
          {learnCategories.map((category) => (
            <Link href={`/learn/${category.slug}`} key={category.slug}>
              <strong>{category.title}</strong>
              <span>{category.description}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="card prose">
        <h2>Slang Meanings</h2>
        <div className="article-list">
          {coreSlangPages.map((page) => (
            <Link href={`/${page.slug}`} key={page.slug}>
              <strong>{page.title}</strong>
              <span>{page.quickMeaning}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="card prose">
        <h2>Slang by Situation</h2>
        <div className="article-list">
          {situationGuides.map((page) => (
            <Link href={`/${page.slug}`} key={page.slug}>
              <strong>{page.title}</strong>
              <span>{page.description}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="card prose">
        <h2>Slang Differences</h2>
        <div className="article-list">
          {comparisonGuides.map((page) => (
            <Link href={`/${page.slug}`} key={page.slug}>
              <strong>{page.title}</strong>
              <span>{page.description}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="card prose">
        <h2>How to Reply</h2>
        <div className="article-list">
          {replyGuides.map((page) => (
            <Link href={`/${page.slug}`} key={page.slug}>
              <strong>{page.title}</strong>
              <span>{page.description}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="card prose">
        <h2>More Guides</h2>
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
