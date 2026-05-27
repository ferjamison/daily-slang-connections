import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn what Daily Slang Connections is and how the daily slang puzzle works.",
};

export default function AboutPage() {
  return (
    <main className="page narrow prose">
      <h1>About Daily Slang Connections</h1>
      <section className="card prose">
        <p>
          Daily Slang Connections is an independent daily word-grouping game built around American
          slang and casual English. The goal is simple: sort 16 slang words or phrases into four
          meaningful groups. After playing, you can read short explanations written in simple
          English.
        </p>
        <p>
          The site focuses on natural American casual language: phrases people use in texts,
          conversations, comments, school, work, shopping, planning, and everyday social life. It
          avoids offensive, hateful, sexual, invented, or very obscure slang.
        </p>
        <p>
          The site is made for anyone who likes quick word games, slang puzzles, and casual English.
          It is not affiliated with any newspaper, puzzle publisher, school, or testing
          organization.
        </p>
      </section>
    </main>
  );
}
