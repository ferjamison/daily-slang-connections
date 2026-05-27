import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Daily Slang Connections.",
};

export default function ContactPage() {
  return (
    <main className="page narrow prose">
      <h1>Contact</h1>
      <section className="card prose">
        <p>
          Questions, corrections, and feedback are welcome. If you notice a phrase that feels
          unclear, outdated, or not useful for English learners, please let us know.
        </p>
        <p>
          Email: <a href="mailto:contact@dailyslangcategories.com">contact@dailyslangcategories.com</a>
        </p>
        <p>
          Please include the puzzle date and whether it was the morning or evening puzzle when you
          report an issue with a specific answer.
        </p>
      </section>
    </main>
  );
}
