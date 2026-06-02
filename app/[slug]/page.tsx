import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  coreSlangPages,
  getCoreSlangPage,
  getLongTailGuidePage,
  getPillarPage,
  getSeoSlugs,
  getSlangMeaningPage,
  pillarPages,
  slangMeaningPages,
} from "@/lib/seoContent";

const dialogueExamples: Record<string, { a: string; b: string }[]> = {
  "is-sus-rude": [
    { a: "That account just asked for my password.", b: "Yeah, that's sus. Don't reply." },
    { a: "Can I say he looks sus?", b: "Maybe say the situation feels sus. It sounds less personal." },
    { a: "This deal is almost too cheap.", b: "Sus, but maybe check the reviews first." },
  ],
  "is-no-cap-offensive": [
    { a: "No cap, that was the best episode.", b: "Not offensive at all. Just casual." },
    { a: "Can I write no cap in my essay?", b: "No, use honestly or seriously." },
    { a: "No cap, your design looks great.", b: "Thanks, I appreciate it." },
  ],
  "is-low-key-positive-or-negative": [
    { a: "That cafe is low-key amazing.", b: "Positive. You mean it's quietly really good." },
    { a: "I'm low-key annoyed.", b: "Negative, but softer than saying you're angry." },
    { a: "I low-key want to go home.", b: "Neutral. It just makes the feeling sound less intense." },
  ],
  "how-do-i-reply-to-no-cap": [
    { a: "No cap, this pizza is perfect.", b: "Fr. It's so good." },
    { a: "No cap, I think she's the best player.", b: "You're not wrong." },
    { a: "No cap, that test was brutal.", b: "Exactly. I was struggling too." },
  ],
  "how-to-respond-thats-fire": [
    { a: "Your jacket is fire.", b: "Thanks, I just got it." },
    { a: "That beat is fire.", b: "Right? I've had it on repeat." },
    { a: "This edit is fire.", b: "Appreciate it. It took forever." },
  ],
  "sus-vs-shady-vs-sketchy": [
    { a: "That link looks sus.", b: "Yeah, don't click it." },
    { a: "That seller seems shady.", b: "Agreed. The story keeps changing." },
    { a: "This parking lot feels sketchy.", b: "Let's leave and find another one." },
  ],
  "fire-vs-lit-vs-dope": [
    { a: "This song is fire.", b: "No cap, the chorus is perfect." },
    { a: "The party was lit.", b: "I know, everyone was dancing." },
    { a: "Your poster design is dope.", b: "Thanks, I wanted it to feel clean." },
  ],
  "ghosted-vs-left-on-read": [
    { a: "He hasn't replied for two weeks.", b: "That sounds like ghosted." },
    { a: "She saw my message and didn't answer.", b: "That's left on read, at least for now." },
    { a: "Is one missed reply ghosting?", b: "Not really. Ghosting is more of a pattern." },
  ],
  "slang-people-use-when-texting": [
    { a: "Hit me up when you get there.", b: "Bet, I'll text you." },
    { a: "No cap, I'm tired.", b: "Same. I'm low-key done too." },
    { a: "She left me on read.", b: "Ouch. Maybe she's busy." },
  ],
  "slang-people-use-in-dating": [
    { a: "He ghosted after the first date.", b: "That's rough. His loss." },
    { a: "She has great energy.", b: "Yeah, the vibe is good." },
    { a: "He flaked again.", b: "That might be a red flag." },
  ],
};

const comparisonRows: Record<string, { term: string; meaning: string; tone: string; usedFor: string; example: string; safer: string }[]> = {
  "sus-vs-shady-vs-sketchy": [
    { term: "sus", meaning: "suspicious or not trustworthy", tone: "casual, internet-style", usedFor: "quick reactions online or in texts", example: "That link looks sus.", safer: "suspicious" },
    { term: "shady", meaning: "dishonest or morally questionable", tone: "critical", usedFor: "people, deals, behavior", example: "That deal sounds shady.", safer: "questionable" },
    { term: "sketchy", meaning: "unsafe, unreliable, or suspicious", tone: "warning", usedFor: "places, websites, plans", example: "This area feels sketchy.", safer: "unsafe" },
  ],
  "fire-vs-lit-vs-dope": [
    { term: "fire", meaning: "really good or impressive", tone: "excited praise", usedFor: "music, food, outfits, ideas", example: "This song is fire.", safer: "excellent" },
    { term: "lit", meaning: "exciting, fun, full of energy", tone: "party-like, energetic", usedFor: "events, parties, concerts", example: "The party was lit.", safer: "exciting" },
    { term: "dope", meaning: "cool, stylish, impressive", tone: "relaxed praise", usedFor: "design, fashion, music, art", example: "That jacket is dope.", safer: "cool" },
  ],
  "ghosted-vs-left-on-read": [
    { term: "ghosted", meaning: "stopped replying completely", tone: "hurt, disappointed", usedFor: "dating, jobs, friendships", example: "He ghosted me after two dates.", safer: "stopped responding" },
    { term: "left on read", meaning: "saw a message but did not reply", tone: "awkward, annoyed", usedFor: "one message or short silence", example: "She left me on read.", safer: "did not reply" },
  ],
};

const sceneVocabulary: Record<string, { category: string; words: string[]; note: string }[]> = {
  "slang-people-use-when-texting": [
    { category: "Agreement", words: ["bet", "say less", "for sure", "sounds good", "I'm down"], note: "Use these when accepting a plan or agreeing quickly." },
    { category: "Honesty or emphasis", words: ["no cap", "fr", "for real", "deadass", "not gonna lie"], note: "Use these when a message needs stronger truth or emphasis." },
    { category: "No reply", words: ["left on read", "ghosted", "ignored", "no response", "went silent"], note: "These describe message silence or someone not answering." },
    { category: "Contacting someone", words: ["hit me up", "dm me", "text me", "ping me", "hmu"], note: "These are casual ways to ask someone to contact you." },
    { category: "Soft reactions", words: ["low-key", "same", "valid", "mood", "ouch"], note: "These are short emotional replies common in texting." },
  ],
  "slang-people-use-in-dating": [
    { category: "No reply or disappearing", words: ["ghosted", "left on read", "went silent", "ignored", "no response"], note: "These describe communication problems." },
    { category: "Canceling plans", words: ["flaked", "bailed", "ditched", "canceled last minute", "stood me up"], note: "These describe unreliable dating plans." },
    { category: "Attraction", words: ["rizz", "vibe", "chemistry", "cute", "a catch"], note: "These describe charm, interest, or attraction." },
    { category: "Warning signs", words: ["red flag", "sus", "shady", "sketchy", "bad vibes"], note: "These suggest doubt or concern." },
    { category: "Reactions", words: ["delulu", "ick", "situationship", "hard launch", "soft launch"], note: "These are common in online dating talk and social media." },
  ],
};

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

  const coreMeaning = getCoreSlangPage(slug);
  if (coreMeaning) {
    return {
      title: coreMeaning.title,
      description: `${coreMeaning.quickMeaning} See examples, replies, tone, similar slang, and when not to use it.`,
    };
  }

  const longTail = getLongTailGuidePage(slug);
  if (longTail) {
    return {
      title: longTail.title,
      description: longTail.description,
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

  const coreMeaning = getCoreSlangPage(slug);
  if (coreMeaning) return <CoreMeaningContent slug={slug} />;

  const longTail = getLongTailGuidePage(slug);
  if (longTail) return <LongTailGuideContent slug={slug} />;

  const meaning = getSlangMeaningPage(slug);
  if (meaning) return <MeaningContent slug={slug} />;

  notFound();
}

function LongTailGuideContent({ slug }: { slug: string }) {
  const page = getLongTailGuidePage(slug);
  if (!page) notFound();
  const dialogues = dialogueExamples[slug] ?? [];
  const rows = comparisonRows[slug] ?? [];
  const vocabGroups = sceneVocabulary[slug] ?? [];

  return (
    <main className="page narrow prose">
      <section className="card prose">
        <p className="eyebrow">slang guide</p>
        <h1>{page.title}</h1>
        <h2>Quick Answer</h2>
        <p>{page.intro}</p>
      </section>

      {page.sections.map((section) => (
        <section className="card prose" key={section.heading}>
          <h2>{section.heading}</h2>
          {section.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
      ))}

      <section className="card prose">
        <h2>Examples in Real Situations</h2>
        {dialogues.map((dialogue, index) => (
          <div className="dialogue" key={`${dialogue.a}-${index}`}>
            <p><strong>A:</strong> {dialogue.a}</p>
            <p><strong>B:</strong> {dialogue.b}</p>
          </div>
        ))}
      </section>

      {rows.length ? (
        <section className="card prose">
          <h2>Meaning, Tone, and Safer Alternatives</h2>
          <div className="comparison-table">
            <div className="comparison-row header">
              <span>Word</span>
              <span>Meaning</span>
              <span>Tone</span>
              <span>Used for</span>
              <span>Example</span>
              <span>Safer alternative</span>
            </div>
            {rows.map((row) => (
              <div className="comparison-row" key={row.term}>
                <span>{row.term}</span>
                <span>{row.meaning}</span>
                <span>{row.tone}</span>
                <span>{row.usedFor}</span>
                <span>{row.example}</span>
                <span>{row.safer}</span>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {vocabGroups.length ? (
        <section className="card prose">
          <h2>Slang Vocabulary by Category</h2>
          {vocabGroups.map((group) => (
            <div className="definition-row" key={group.category}>
              <strong>{group.category}</strong>
              <span>{group.words.join(", ")}</span>
              <p>{group.note}</p>
            </div>
          ))}
        </section>
      ) : null}

      <section className="card prose">
        <h2>How This Connects to the Daily Puzzle</h2>
        <p>
          Daily Slang Connections groups words by meaning, tone, and situation. A guide like this
          helps you recognize why a word belongs with one group instead of another. Suspicion words,
          praise words, texting words, and dating words often look unrelated until you notice the
          shared situation.
        </p>
      </section>

      <section className="card prose">
        <h2>Related Slang Meanings</h2>
        <div className="article-list">
          {coreSlangPages.slice(0, 6).map((meaning) => (
            <Link href={`/${meaning.slug}`} key={meaning.slug}>
              <strong>{meaning.title}</strong>
              <span>{meaning.quickMeaning}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="card prose">
        <h2>Play Today's Puzzle</h2>
        <p>
          Try the daily slang puzzle to practice these words in categories. Each board has 16
          casual English phrases, 4 hidden groups, hints, and answer explanations.
        </p>
        <div className="inline-links">
          <Link href="/today">Play today</Link>
          <Link href="/daily-slang-puzzle">Daily slang puzzle</Link>
          <Link href="/american-slang-quiz">American slang quiz</Link>
        </div>
      </section>
    </main>
  );
}

function CoreMeaningContent({ slug }: { slug: string }) {
  const page = getCoreSlangPage(slug);
  if (!page) notFound();
  const relatedMeanings = coreSlangPages
    .filter((item) => item.slug !== page.slug)
    .filter((item) => item.similar.some((word) => page.similar.includes(word)) || item.tone === page.tone)
    .slice(0, 4);
  const fallbackRelated = relatedMeanings.length ? relatedMeanings : coreSlangPages.filter((item) => item.slug !== page.slug).slice(0, 4);

  return (
    <main className="page narrow prose">
      <section className="card prose">
        <p className="eyebrow">slang meaning</p>
        <h1>{page.title}</h1>
        <h2>Quick Meaning</h2>
        <p>{page.quickMeaning}</p>
      </section>

      <section className="card prose">
        <h2>Simple Explanation</h2>
        <p>{page.simpleExplanation}</p>
        <p>
          The important thing is not only the dictionary meaning. Slang also carries tone, social
          context, and timing. A phrase can sound friendly in a group chat but strange in a formal
          email.
        </p>
        <p>
          A helpful way to read slang is to ask what the speaker is trying to do. They may be
          agreeing, joking, flirting, complaining, warning someone, or giving a compliment. The same
          phrase can feel different when the situation changes.
        </p>
      </section>

      <section className="card prose">
        <h2>When People Use It</h2>
        <p>{page.whenPeopleUseIt}</p>
        <p>
          In Daily Slang Connections, this kind of phrase may appear with words that share the same
          situation, such as texting, dating, school, gaming, TikTok comments, compliments, money,
          or suspicion.
        </p>
        <p>
          You do not need to use the phrase yourself to understand it. It is still useful to
          recognize it when you see it in comments, captions, messages, short videos, or casual
          conversations.
        </p>
      </section>

      <section className="card prose">
        <h2>Tone</h2>
        <p>{page.tone}</p>
        <p>
          Tone matters because two phrases can have similar meanings but feel different. One may
          sound funny, one may sound rude, one may sound flirty, and one may sound safe for everyday
          conversation.
        </p>
        <p>
          If you are not sure about the tone, use a safer phrase first. For example, a plain word
          like "seriously," "suspicious," "expensive," or "great" may work better with teachers,
          bosses, clients, or people you do not know well.
        </p>
      </section>

      <section className="card prose">
        <h2>Examples</h2>
        <ol>
          {page.examples.map((example) => (
            <li key={example}>{example}</li>
          ))}
        </ol>
        <p>
          These examples are written like short messages because slang usually sounds most natural
          in quick, informal sentences. Long formal sentences can make the same word feel forced.
        </p>
      </section>

      <section className="card prose">
        <h2>How to Reply</h2>
        <ul>
          {page.replies.map((reply) => (
            <li key={reply}>{reply}</li>
          ))}
        </ul>
        <p>
          Your reply depends on whether you agree, feel surprised, want to joke, or want to show
          support. Short replies usually sound most natural with slang.
        </p>
        <p>
          If the other person is upset, choose a warmer reply. If they are joking, a short playful
          reply is fine. If they are giving you a compliment, a simple "thanks" is usually enough.
        </p>
      </section>

      <section className="card prose">
        <h2>Similar Slang</h2>
        <p>{page.similar.join(", ")}</p>
        <p>
          Similar slang words are not always interchangeable. They may share a general meaning but
          differ in age, intensity, setting, or attitude. That is why comparing them is more useful
          than memorizing one translation.
        </p>
      </section>

      <section className="card prose">
        <h2>Difference</h2>
        <p>{page.difference}</p>
        <p>
          This difference is useful in word-grouping games because close words can be traps. If two
          words feel similar but belong to different situations, they may not be in the same group.
        </p>
      </section>

      <section className="card prose">
        <h2>When Not to Use It</h2>
        <p>{page.whenNotToUse}</p>
        <p>
          Slang works best when the relationship and setting are relaxed. If the conversation is
          serious, professional, or with someone you do not know, choose a clearer standard English
          phrase instead.
        </p>
      </section>

      <section className="card prose">
        <h2>Mini FAQ</h2>
        {page.faqs.map((faq) => (
          <div className="definition-row" key={faq.question}>
            <strong>{faq.question}</strong>
            <span>{faq.answer}</span>
          </div>
        ))}
      </section>

      <section className="card prose">
        <h2>Related Daily Puzzle</h2>
        <p>
          Play today's puzzle to see how slang words connect by meaning, tone, and situation. The
          game uses 16 words, 4 hidden categories, hints, answers, and simple explanations.
        </p>
        <div className="inline-links">
          <Link href="/today">Play today</Link>
          <Link href="/daily-slang-puzzle">Daily slang puzzle</Link>
          <Link href="/slang-word-grouping-game">Slang word grouping game</Link>
        </div>
      </section>

      <section className="card prose">
        <h2>Related Slang Meanings</h2>
        <div className="article-list">
          {fallbackRelated.map((meaning) => (
            <Link href={`/${meaning.slug}`} key={meaning.slug}>
              <strong>{meaning.title}</strong>
              <span>{meaning.quickMeaning}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

function PillarContent({ slug }: { slug: string }) {
  const page = getPillarPage(slug);
  if (!page) notFound();
  const relatedMeanings = coreSlangPages.slice(0, 10);

  return (
    <main className="page narrow prose">
      <section className="card prose">
        <p className="eyebrow">{page.keyword}</p>
        <h1>{page.title}</h1>
        <h2>Quick Answer</h2>
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
        <h2>How It Works</h2>
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
        <p>
          This is different from a normal slang quiz. A quiz usually asks, "What does this word
          mean?" A grouping game asks a sharper question: "Which four words work in the same
          situation?" That makes the puzzle better for real slang, because slang depends on context.
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
        <h2>Why It Helps English Learners</h2>
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
        <p>
          For English learners, this matters because casual English often feels easy word by word
          but confusing in real messages. Phrases like <strong>no cap</strong>,{" "}
          <strong>left on read</strong>, or <strong>say less</strong> are not hard because of
          grammar. They are hard because they carry tone, timing, and social meaning.
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
          Strong categories also make the next puzzle more useful because each finished board
          becomes a small reference point. You can keep playing and compare how phrases about
          texting, money, suspicion, praise, or leaving are separated across different boards.
        </p>
      </section>

      <section className="card prose">
        <h2>Play Today's Puzzle</h2>
        <p>
          Start with the current board, then use Next Puzzle when you want another round. New
          puzzles are generated twice a day, and older boards stay in the playable pool without
          turning the site into a dated list.
        </p>
        <div className="inline-links">
          <Link href="/today">Play today</Link>
          <Link href="/hints">Get hints</Link>
          <Link href="/answers">See answers</Link>
          <Link href="/today">Play another puzzle</Link>
        </div>
      </section>

      <section className="card prose">
        <h2>Related Slang Meanings</h2>
        <div className="article-list">
          {relatedMeanings.map((meaning) => (
            <Link href={`/${meaning.slug}`} key={meaning.slug}>
              <strong>{meaning.title}</strong>
              <span>{meaning.quickMeaning}</span>
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
          The next-puzzle flow is useful because older boards can still appear as extra practice
          without becoming a dated list. A praise group today may use one set of phrases, while
          another praise group later may use a different set.
        </p>
        <div className="inline-links">
          <Link href="/today">Play today</Link>
          <Link href="/answers">Today's answers</Link>
          <Link href="/today">Next puzzle</Link>
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
