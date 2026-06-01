import type { Metadata } from "next";
import Link from "next/link";
import { getLearnCategory } from "@/lib/learnCategories";

export const metadata: Metadata = {
  title: "Gen Z Slang",
  description:
    "Browse Gen Z slang articles with meanings, examples, usage notes, common mistakes, and related slang guides.",
};

export default function GenZSlangPage() {
  const category = getLearnCategory("gen-z-slang");

  return (
    <main className="page narrow prose">
      <section className="card prose">
        <p className="eyebrow">learn</p>
        <h1>Gen Z Slang</h1>
        <p>
          Browse Gen Z slang articles by topic. Start with a guide below, then open the full article
          for meanings, examples, usage notes, common mistakes, and related slang links.
        </p>
      </section>

      <section className="card prose">
        <h2>Articles</h2>
        <div className="article-list">
          {category?.articles.map((article) => (
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
