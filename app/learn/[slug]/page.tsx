import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLearnArticle, learnArticles } from "@/lib/learn";

export function generateStaticParams() {
  return learnArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getLearnArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
  };
}

export default async function LearnArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getLearnArticle(slug);
  if (!article) notFound();

  return (
    <main className="page narrow prose">
      <h1>{article.title}</h1>
      <p>{article.description}</p>
      {article.sections.map((section) => (
        <section className="card prose" key={section.heading}>
          <h2>{section.heading}</h2>
          {section.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {section.items ? (
            <ol>
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          ) : null}
          {section.entry ? (
            <div className="slang-entry">
              <div>
                <h3>Word and Pronunciation</h3>
                <p>{section.entry.pronunciation}</p>
              </div>
              <div>
                <h3>Meaning</h3>
                <p>{section.entry.meaning}</p>
              </div>
              <div>
                <h3>Examples</h3>
                <div className="example-list">
                  {section.entry.examples.map((example) => (
                    <p key={`${example.context}-${example.sentence}`}>
                      <strong>{example.context}:</strong> {example.sentence}
                    </p>
                  ))}
                </div>
              </div>
              <div>
                <h3>Usage</h3>
                <p><strong>Informal:</strong> {section.entry.usage.informal}</p>
                <p><strong>Formal:</strong> {section.entry.usage.formal}</p>
              </div>
              <div>
                <h3>Common Mistakes</h3>
                <ul>
                  {section.entry.commonMistakes.map((mistake) => (
                    <li key={mistake}>{mistake}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Similar Slang</h3>
                <div className="comparison-table compact">
                  <div className="comparison-row header">
                    <span>Term</span>
                    <span>Difference</span>
                  </div>
                  {section.entry.similar.map((item) => (
                    <div className="comparison-row" key={item.term}>
                      <span>{item.term}</span>
                      <span>{item.difference}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : null}
          {section.links ? (
            <div className="article-list">
              {section.links.map((link) => (
                <Link href={link.href} key={link.href}>
                  <strong>{link.label}</strong>
                  <span>{link.description}</span>
                </Link>
              ))}
            </div>
          ) : null}
        </section>
      ))}
    </main>
  );
}
