import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Daily Slang Connections.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="page narrow prose">
      <h1>Privacy Policy</h1>
      <section className="card prose">
        <p>Last updated: May 28, 2026</p>
        <p>
          Daily Slang Connections is built to be simple. You can play puzzles without creating an
          account. If account-based progress features are added later, they will use the minimum
          information needed to save your progress.
        </p>
        <h2>Information We May Collect</h2>
        <p>
          We may collect basic technical information such as pages visited, device type, browser,
          approximate region, and error logs. This helps us understand whether the site works well
          and which learning pages are useful.
        </p>
        <h2>Cookies and Analytics</h2>
        <p>
          The site may use cookies or similar technologies for security, analytics, and advertising.
          If Google AdSense or other Google advertising products are used, Google may use cookies to
          serve and measure ads according to its own policies.
        </p>
        <h2>Third-Party Services</h2>
        <p>
          The site uses hosting, database, and AI services to run the game and generate puzzle
          content. These providers may process technical data needed to deliver the service.
        </p>
        <h2>Contact</h2>
        <p>
          For privacy questions, email{" "}
          <a href="mailto:contact@dailyslangcategories.com">contact@dailyslangcategories.com</a>.
        </p>
      </section>
    </main>
  );
}
