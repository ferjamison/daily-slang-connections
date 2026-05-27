import type { Metadata } from "next";
import Link from "next/link";
import { learnArticles } from "@/lib/learn";

export const metadata: Metadata = {
  title: "Learn American Slang",
  description: "Simple American slang guides for English learners.",
};

export default function LearnPage() {
  return (
    <main className="page narrow prose">
      <h1>Learn American Slang</h1>
      <p>
        Short guides for English learners who want to understand casual American phrases in real
        situations.
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
