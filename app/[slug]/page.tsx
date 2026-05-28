import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getPillarPage,
  getSeoSlugs,
  getSlangMeaningPage,
  pillarPages,
  slangMeaningPages,
} from "@/lib/seoContent";

export function generateStaticParams() {
  return getSeoSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pillar = getPillarPage(slug);
  if (pillar) {
    return {
      title: pillar.title,
      description: pillar.description,
    };
  }

  const meaning = getSlangMeaningPage(slug);
  if (meaning) {
    return {
      title: `What Does ${meaning.phrase} Mean?`,
      description: `Meaning of ${meaning.phrase}: ${meaning.shortMeaning}. See examples, tone, common mistakes, and related puzzle categories.`,
    };
  }

  return {};
}

export default async function SeoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pillar = getPillarPage(slug);
  if (pillar) return <PillarContent slug={slug} />;

  const meaning = getSlangMeaningPage(slug);
  if (meaning) return <MeaningContent slug={slug} />;

  notFound();
}

function PillarContent({ slug }: { slug: string }) {
  const page = getPillarPage(slug);
  if (!page) notFound();
  const relatedMeanings = slangMeaningPages.slice(0, 10);

  return (
    <main className="page narrow prose">
      <section className="card prose">
        <p className="eyebrow">{page.keyword}</p>
        <h1>{page.title}</h1>
        <p>{page.intro}</p>
        <p>
          The game is simple to start and hard enough to replay: scan the board, choose four words
          that seem connected, submit the group, and keep going until all four categories are
          solved. A good board does not depend on obscure trivia. It depends on clear connections
          that feel satisfying once they click.
        </p>
      </section>

      <section className="card prose">
        <h2>What It Is</h2>
        <p>
          {page.title} is a daily category puzzle built from American slang, casual phrases, and
          common online expressions. The board always has 16 words. Behind those 16 words are 4
          hidden groups. Each group has a shared meaning, usage situation, or tone.
        </p>
        <p>
          Some groups are direct synonyms, such as four ways to say something is excellent. Other
          groups are more situational, such as phrases people use when canceling plans, replying to
          messages, showing agreement, or describing something suspicious.
        </p>
      </section>

      <section className="card prose">
        <h2>How to Play</h2>
        <ol>
          <li>Read every word before making a move.</li>
          <li>Choose exactly four words or phrases that belong together.</li>
          <li>Submit the group and see whether it locks into place.</li>
          <li>Use hints when you need a nudge, not a full answer.</li>
          <li>Review the answer page after the board is finished.</li>
        </ol>
        <p>
          The best strategy is to avoid grabbing the first four words that look familiar. Slang
          categories often have close traps. For example, one word may be about agreement while
          another is about honesty, even if both appear in the same conversation.
        </p>
        <p>
          A slower first scan usually beats a fast guess. Mark the words that feel obvious, then
          look for the words that are flexible. Flexible slang is often the key to the board because
          it can tempt you into the wrong group.
        </p>
      </section>

      <section className="card prose">
        <h2>Example Puzzle</h2>
        {page.exampleGroups.map((group) => (
          <div className="definition-row" key={group.name}>
            <strong>{group.name}</strong>
            <span>{group.words.join(" · ")}</span>
            <p>{group.note}</p>
          </div>
        ))}
        <p>
          These examples show why a category game works well for slang. The connection is not
          always spelling or grammar. Often it is the social use of the phrase.
        </p>
        <p>
          When you build a guess, try naming the category before you submit. If the category name is
          too vague, such as "good words" or "internet words," keep looking. A strong category can
          be explained in one clear phrase.
        </p>
      </section>

      <section className="card prose">
        <h2>Why It Helps You Read Casual English</h2>
        <p>
          Slang changes quickly, but the situations behind slang are stable. People still agree,
          cancel, praise, doubt, joke, flirt, complain, and react. A category puzzle trains you to
          notice those situations instead of memorizing isolated definitions.
        </p>
        <p>
          That makes the game useful even when a word is new. If three phrases clearly point to
          texting and one unfamiliar phrase fits the same scene, the board gives you a reasonable
          guess. The answer notes then confirm the meaning in plain English.
        </p>
      </section>

      <section className="card prose">
        <h2>Common Slang Categories</h2>
        <p>
          Daily boards often include categories like praise, suspicion, money, texting, canceling
          plans, leaving, agreement, exaggeration, tiredness, gossip, confidence, and relaxed mood.
          These categories are broad enough to be playable, but specific enough to avoid multiple
          possible answers.
        </p>
        <p>
          A clean category is the difference between a fair puzzle and a messy word list. If two
          groups could share the same answer, the board is not good enough. Daily Slang Connections
          aims for categories that become obvious after the reveal.
        </p>
        <p>
          Strong categories also create better archive pages because each finished puzzle becomes a
          small reference point. You can return later and see how phrases about texting, money,
          suspicion, praise, or leaving were separated.
        </p>
      </section>

      <section className="card prose">
        <h2>Play Today's Puzzle</h2>
        <p>
          Start with the current board, then use the archive if you want another round. New puzzles
          are generated twice a day, so there is always a fresh board and a growing set of past
          puzzles.
        </p>
        <div className="inline-links">
          <Link href="/today">Play today</Link>
          <Link href="/hints">Get hints</Link>
          <Link href="/answers">See answers</Link>
          <Link href="/archive">Browse archive</Link>
        </div>
      </section>

      <section className="card prose">
        <h2>Related Guides</h2>
        <div className="article-list">
          {relatedMeanings.map((meaning) => (
            <Link href={`/${meaning.slug}`} key={meaning.slug}>
              <strong>What does {meaning.phrase} mean?</strong>
              <span>{meaning.shortMeaning}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

function MeaningContent({ slug }: { slug: string }) {
  const page = getSlangMeaningPage(slug);
  if (!page) notFound();
  const related = slangMeaningPages
    .filter((item) => item.slug !== page.slug)
    .filter((item) => item.puzzleCategory === page.puzzleCategory || item.similar.some((word) => page.similar.includes(word)))
    .slice(0, 4);
  const fallbackRelated = related.length ? related : slangMeaningPages.filter((item) => item.slug !== page.slug).slice(0, 4);

  return (
    <main className="page narrow prose">
      <section className="card prose">
        <p className="eyebrow">slang meaning</p>
        <h1>What Does {page.phrase} Mean?</h1>
        <p>
          Quick answer: <strong>{page.phrase}</strong> means {page.shortMeaning}. It is {page.tone}
          and usually appears in casual conversation, texting, comments, videos, and daily online
          speech.
        </p>
      </section>

      <section className="card prose">
        <h2>Meaning in Simple English</h2>
        <p>
          The phrase <strong>{page.phrase}</strong> is useful because it carries more than a plain
          dictionary meaning. It also carries attitude. When someone uses it, they are usually
          reacting quickly, speaking casually, or adding social color to the sentence.
        </p>
        <p>
          In a daily slang puzzle, this phrase belongs near words that share the same situation:
          <strong> {page.puzzleCategory}</strong>. That category clue is often more helpful than a
          direct translation.
        </p>
        <p>
          A simple way to understand the phrase is to ask what job it does in a conversation. Does
          it praise something, doubt something, accept a plan, describe money, or react to a
          message? That job is usually what matters in a word-grouping puzzle.
        </p>
      </section>

      <section className="card prose">
        <h2>How Americans Use It</h2>
        <p>
          People use <strong>{page.phrase}</strong> when the conversation is relaxed. It can show
          agreement, doubt, praise, irritation, surprise, or social judgment depending on the word.
          The safest way to understand it is to look at the sentence around it.
        </p>
        <p>
          It is common in short messages because slang often saves time. One compact phrase can
          carry a meaning that would take a longer sentence in formal English.
        </p>
        <p>
          The phrase can also signal belonging. When people choose casual language, they are often
          matching the tone of friends, comments, streams, group chats, or relaxed speech. That is
          why the same phrase can feel natural in one place and awkward in another.
        </p>
      </section>

      <section className="card prose">
        <h2>Texting Examples</h2>
        <ul>
          {page.examples.map((example) => (
            <li key={example}>{example}</li>
          ))}
        </ul>
        <p>
          These examples are short on purpose. Slang usually feels most natural in quick replies,
          comments, captions, and casual conversation.
        </p>
        <p>
          If you are not sure whether the phrase fits, replace it with a plain meaning first. If the
          sentence still makes sense, then check whether the casual tone also fits the speaker and
          the situation.
        </p>
      </section>

      <section className="card prose">
        <h2>Spoken English Examples</h2>
        <p>
          In spoken English, tone matters. A phrase can sound friendly, teasing, annoyed, or
          excited depending on the voice. If the phrase is used with a smile, it may feel playful.
          If it is used after a problem, it may feel critical.
        </p>
        <p>
          Try saying one example out loud, then replace <strong>{page.phrase}</strong> with one of
          the similar phrases below. If the sentence still works, the words probably belong in the
          same puzzle category.
        </p>
        <p>
          This replacement test is useful because many slang phrases overlap without being exactly
          the same. Two phrases can belong to the same category even if one sounds stronger, newer,
          funnier, or more sarcastic than the other.
        </p>
      </section>

      <section className="card prose">
        <h2>Tone and Formality</h2>
        <p>
          The tone is {page.tone}. That means it is usually better for casual speech than formal
          writing. It can work with friends, online posts, group chats, and relaxed conversation.
          It may feel out of place in a job application, legal document, or serious business email.
        </p>
        <p>
          Formality is one of the biggest clues in slang. A phrase may be perfectly normal in a
          text, but too loose in a serious setting. Daily puzzle answers focus on common casual
          meaning, not on every possible formal or regional use.
        </p>
      </section>

      <section className="card prose">
        <h2>Common Mistakes</h2>
        <ul>
          {page.traps.map((trap) => (
            <li key={trap}>{trap}</li>
          ))}
        </ul>
        <p>
          The main mistake is treating slang as one fixed translation. In real use, the sentence,
          speaker, and situation all matter.
        </p>
        <p>
          Another mistake is grouping words only because they are all "slang." Every word on the
          board is casual, so the real connection must be more specific. Look for a shared purpose:
          honesty, suspicion, praise, plans, money, gossip, leaving, or mood.
        </p>
      </section>

      <section className="card prose">
        <h2>Similar Phrases</h2>
        <p>{page.similar.join(", ")}</p>
        <p>
          Similar phrases are useful in a word-grouping game because they help you test a category.
          If four phrases can appear in the same kind of message, they may belong together.
        </p>
        <p>
          Still, similar does not always mean identical. A good puzzle may place two close phrases
          in different groups if their most common use is different. That tension is what makes the
          board interesting.
        </p>
      </section>

      <section className="card prose">
        <h2>Mini Quiz</h2>
        <p>
          Which category would <strong>{page.phrase}</strong> most likely belong to in a Daily
          Slang Connections puzzle?
        </p>
        <p>
          Answer: <strong>{page.puzzleCategory}</strong>. Now compare it with {page.similar[0]} and{" "}
          {page.similar[1] || page.similar[0]}. If the meanings feel close, you have found the
          pattern.
        </p>
        <p>
          Bonus challenge: write three other words that could fit the same category. If you can do
          that, you understand the phrase well enough to recognize it in a future board.
        </p>
      </section>

      <section className="card prose">
        <h2>Related Daily Puzzle</h2>
        <p>
          Play today's board to see how phrases like <strong>{page.phrase}</strong> can connect
          with other casual expressions. The daily puzzle is built around 16 words, 4 groups, and
          answer notes that explain why each group works.
        </p>
        <p>
          The archive is also useful because older boards show how the same broad category can be
          built from different words. A praise group today may use one set of phrases, while another
          praise group later may use a different set.
        </p>
        <div className="inline-links">
          <Link href="/today">Play today</Link>
          <Link href="/answers">Today's answers</Link>
          <Link href="/archive">Archive</Link>
        </div>
      </section>

      <section className="card prose">
        <h2>Related Guides</h2>
        <div className="article-list">
          {fallbackRelated.map((meaning) => (
            <Link href={`/${meaning.slug}`} key={meaning.slug}>
              <strong>What does {meaning.phrase} mean?</strong>
              <span>{meaning.shortMeaning}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
