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
              <strong>Daily Slang</strong>
              <span>Connections</span>
            </Link>
            <nav className="navlinks" aria-label="Main navigation">
              <Link href="/today">Today</Link>
              <Link href="/hints">Hints</Link>
              <Link href="/answers">Answers</Link>
              <Link href="/archive">Archive</Link>
              <Link href="/how-to-play">How to Play</Link>
            </nav>
          </header>
          {children}
          <footer className="site-footer">
            <nav aria-label="Footer navigation">
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms">Terms</Link>
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
