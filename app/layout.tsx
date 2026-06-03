import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dailyslangcategories.com"),
  title: {
    default: "Daily Slang Connections",
    template: "%s | Daily Slang Connections",
  },
  description:
    "A daily American slang word-grouping game. Sort 16 casual phrases into 4 hidden categories.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <header className="topbar">
            <Link className="brand" href="/">
              <strong>Daily Slang Connections</strong>
            </Link>
            <nav className="navlinks" aria-label="Main navigation">
              <Link href="/today">Today</Link>
              <Link href="/learn">Slang Guide</Link>
            </nav>
          </header>
          <div className="app-frame">
            <aside className="sidebar" aria-label="Site sections">
              <nav>
                <p>Play</p>
                <Link href="/today">Daily Puzzle</Link>
                <Link href="/hints">Today&apos;s Hints</Link>
                <Link href="/answers">Today&apos;s Answers</Link>
              </nav>
              <nav>
                <p>Learn</p>
                <Link href="/what-does-ate-mean">TikTok Slang</Link>
                <Link href="/slang-people-use-when-texting">Texting Slang</Link>
                <Link href="/learn/gen-z-slang">Gen Z Slang</Link>
                <Link href="/sus-vs-shady-vs-sketchy">Slang Comparisons</Link>
                <Link href="/learn/the-slang-blade-method-how-to-master-informal-english-fast">Learn Slang</Link>
              </nav>
            </aside>
            <div className="main-area">{children}</div>
          </div>
          <footer className="site-footer">
            <nav aria-label="Footer navigation">
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
              <Link href="/learn">Learn</Link>
            </nav>
            <p>
              Daily Slang Connections is an independent daily slang puzzle game. It is not
              affiliated with any newspaper, game publisher, or testing company.
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
