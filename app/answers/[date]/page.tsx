import type { Metadata } from "next";
import Link from "next/link";
import { getPuzzleByDate } from "@/lib/puzzles";
import { coreSlangPages, slangMeaningPages } from "@/lib/seoContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ date: string }>;
}): Promise<Metadata> {
  const { date } = await params;
  return {
    title: `${date} Answers`,
    description: `Answers and explanations for the ${date} Daily Slang Connections puzzle.`,
  };
}

export default async function DatedAnswersPage({ params }: { params: Promise<{ date: string }> }) {
  const { date } = await params;
  const puzzle = await getPuzzleByDate(date, "morning");
  const meaningEntries: [string, { slug: string; title: string; summary: string }][] = [
    ...slangMeaningPages.map((page): [string, { slug: string; title: string; summary: string }] => [
      page.phrase.toLowerCase(),
      { slug: page.slug, title: `What does ${page.phrase} mean?`, summary: page.shortMeaning },
    ]),
    ...coreSlangPages.map((page): [string, { slug: string; title: string; summary: string }] => [
      page.phrase.toLowerCase(),
      { slug: page.slug, title: page.title, summary: page.quickMeaning },
    ]),
  ];
  const meaningMap = new Map(meaningEntries);

  return (
    <main className="page narrow prose">
      <section className="card prose">
        <p className="eyebrow">{date}</p>
        <h1>Daily Slang Puzzle Answers</h1>
        <p>{puzzle.full_explanation}</p>
        <p>
          This page gives the answer groups, the reason each group belongs together, simple phrase
          meanings, example sentences, common traps, and links to related slang guides when a guide
          is available.
        </p>
      </section>

      <section className="card prose">
        <h2>Today's Categories</h2>
        <ul>
          {puzzle.categories.map((category) => (
            <li key={category.name}>
              <strong>{category.name}:</strong> {category.words.join(", ")}
            </li>
          ))}
        </ul>
      </section>

      {puzzle.categories.map((category) => (
        <section className="card prose" key={category.name}>
          <p className="eyebrow">{category.difficulty}</p>
          <h2>{category.name}</h2>
          <p>{category.explanation}</p>
          <p>
            Why these words belong together: each word in this set points to the same casual
            meaning, situation, or tone. If you missed this group, look for the shared scene rather
            than the exact dictionary definition.
          </p>
          <div className="definition-row">
            <strong>Examples:</strong>
            <span>
              A: "That sounds like {category.words[0]}." B: "Exactly, it fits the {category.name}
              group." / A: "Would {category.words[1] ?? category.words[0]} work here?" B: "Yes,
              same situation."
            </span>
          </div>
          <div className="definition-row">
            <strong>Close trap:</strong>
            <span>
              A close trap is any word that feels casual but does not share this group's main
              meaning, tone, or situation. Check whether the word answers the same social question:
              praise, suspicion, texting, money, plans, or mood.
            </span>
          </div>
          <div className="definition-row">
            <strong>Related guide:</strong>
            <span>
              Use the linked slang guides below when one of this group's words has a full meaning
              page. If no exact guide is available yet, compare this group with the main{" "}
              <Link href="/daily-slang-puzzle">daily slang puzzle guide</Link> to understand how
              meaning, tone, and situation connect.
            </span>
          </div>
          <div className="definition-table">
            {category.definitions.map((definition) => {
              const guide = meaningMap.get(definition.word.toLowerCase());
              return (
                <div className="definition-row" key={definition.word}>
                  <strong>{definition.word}</strong>
                  <span>{definition.meaning}</span>
                  <p>
                    Example: "{definition.word}" can work when the conversation fits the category
                    <strong> {category.name}</strong>.
                  </p>
                  {guide ? <Link href={`/${guide.slug}`}>Related guide: {guide.title}</Link> : null}
                </div>
              );
            })}
          </div>
        </section>
      ))}

      <section className="card prose">
        <h2>Common Traps</h2>
        <p>
          A trap word is a word that feels close to one group but actually belongs somewhere else.
          With slang, traps often happen because one phrase has more than one meaning. When the
          board is tricky, use the answer explanations to compare the near misses.
        </p>
      </section>

      <section className="card prose">
        <h2>Related Slang Guides</h2>
        <div className="article-list">
          {slangMeaningPages.slice(0, 6).map((guide) => (
            <Link href={`/${guide.slug}`} key={guide.slug}>
              <strong>What does {guide.phrase} mean?</strong>
              <span>{guide.shortMeaning}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
