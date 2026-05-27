import { getPuzzleByDate } from "@/lib/puzzles";
import { Game } from "@/components/Game";
import Link from "next/link";

export default async function HomePage() {
  const puzzle = await getPuzzleByDate();
  return (
    <>
      <Game puzzle={puzzle} />
      <section className="page narrow prose" aria-label="About Daily Slang Connections">
        <section className="card prose">
          <h1>Daily Slang Connections</h1>
          <p>
            Daily Slang Connections is a daily American slang grouping game made for English
            learners who want to understand casual speech without memorizing random word lists.
            Every puzzle gives you 16 lowercase words or phrases. Your job is to find four groups
            of four. A group might be about praise, money, texting, making plans, being tired,
            agreeing with someone, or describing a suspicious situation.
          </p>
          <p>
            The game is useful because slang is rarely learned one word at a time. Real speakers
            choose words based on situation, tone, and shared meaning. When you compare phrases
            such as "no cap", "for real", and "dead serious", you start to notice how casual
            English marks honesty, emphasis, and attitude. Grouping words trains that kind of
            pattern recognition.
          </p>
          <p>
            Daily Slang Connections is built for B1-B2 learners. The answers use simple English
            explanations, and the hints point toward meaning without spoiling the category. You do
            not need to know every phrase before you start. Guessing, checking, and reading the
            answer notes is part of the learning loop.
          </p>
          <p>
            A new puzzle is generated twice a day. The archive lets you replay older puzzles, so
            learners can practice more than one set when they want a longer study session. The goal
            is a small habit: five minutes a day with common American casual English.
          </p>
        </section>

        <section className="card prose">
          <h2>Who This Game Is For</h2>
          <ul>
            <li>English learners who understand textbook English but struggle with casual speech.</li>
            <li>Students preparing to watch American videos, podcasts, streams, or social media.</li>
            <li>Teachers who want a quick warm-up activity for vocabulary and discussion.</li>
            <li>Anyone who wants to learn slang in context instead of memorizing isolated words.</li>
          </ul>
        </section>

        <section className="card prose">
          <h2>Start Learning</h2>
          <p>
            Play today's puzzle, check the hints, review the answer explanations, or read short
            slang guides in the learning section.
          </p>
          <div className="article-list">
            <Link href="/today"><strong>Play today's puzzle</strong><span>Try the current 16-word grouping challenge.</span></Link>
            <Link href="/archive"><strong>Browse the archive</strong><span>Replay previous morning and evening puzzles.</span></Link>
            <Link href="/learn"><strong>Read slang guides</strong><span>Learn common phrases with simple examples.</span></Link>
          </div>
        </section>
      </section>
    </>
  );
}
