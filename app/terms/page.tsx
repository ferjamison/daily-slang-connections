import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for Daily Slang Connections.",
};

export default function TermsPage() {
  return (
    <main className="page narrow prose">
      <h1>Terms</h1>
      <section className="card prose">
        <p>Last updated: May 28, 2026</p>
        <p>
          By using Daily Slang Connections, you agree to use the site for personal learning,
          classroom discussion, or general entertainment. The content is educational and may not
          always reflect every local or personal meaning of a phrase.
        </p>
        <h2>Content</h2>
        <p>
          Puzzle words and explanations are provided for English learning. Slang changes over time,
          and usage can vary by region, age, community, and context. We try to keep phrases natural,
          common, and appropriate for learners.
        </p>
        <h2>Availability</h2>
        <p>
          We may update, remove, or change site features at any time. We do not guarantee that every
          puzzle or archive entry will remain available forever.
        </p>
        <h2>Contact</h2>
        <p>
          For questions about these terms, email{" "}
          <a href="mailto:contact@dailyslangcategories.com">contact@dailyslangcategories.com</a>.
        </p>
      </section>
    </main>
  );
}
