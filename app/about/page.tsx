import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn what Daily Slang Connections is and how it helps English learners.",
};

export default function AboutPage() {
  return (
    <main className="page narrow prose">
      <h1>About Daily Slang Connections</h1>
      <section className="card prose">
        <p>
          Daily Slang Connections is an independent daily word-grouping game for English learners.
          The goal is simple: sort 16 American slang words or casual phrases into four meaningful
          groups. After playing, learners can read short explanations written in simple English.
        </p>
        <p>
          The site focuses on natural American casual language: phrases people use in texts,
          conversations, comments, school, work, shopping, planning, and everyday social life. It
          avoids offensive, hateful, sexual, invented, or very obscure slang.
        </p>
        <p>
          This project is designed for B1-B2 learners who already know basic English but want to
          understand real casual speech better. It is not affiliated with any newspaper, puzzle
          publisher, school, or testing organization.
        </p>
      </section>
    </main>
  );
}
