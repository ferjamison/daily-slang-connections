import type { Metadata } from "next";
import Link from "next/link";
import { learnArticles } from "@/lib/learn";

export const metadata: Metadata = {
  title: "Learn American Slang",
  description: "Simple American slang guides for daily word games and casual English.",
};

export default function LearnPage() {
  return (
    <main className="page narrow prose">
      <h1>Learn American Slang</h1>
      <p>
        Short guides to casual American phrases, common meanings, and the kinds of connections
        that appear in daily slang puzzles.
      </p>
      <section className="article-list">
        {learnArticles.map((article) => (
          <Link href={`/learn/${article.slug}`} key={article.slug}>
            <strong>{article.title}</strong>
            <span>{article.description}</span>
          </Link>
        ))}
      </section>
    </main>
  );
}
