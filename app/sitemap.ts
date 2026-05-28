import type { MetadataRoute } from "next";
import { learnArticles } from "@/lib/learn";
import { getArchivePuzzles } from "@/lib/puzzles";
import { getSeoSlugs } from "@/lib/seoContent";

const siteUrl = "https://dailyslangcategories.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();
  const archivePuzzles = await getArchivePuzzles();
  const dates = Array.from(new Set(archivePuzzles.map((puzzle) => puzzle.date)));
  const routes = [
    "",
    "/today",
    "/hints",
    "/answers",
    "/archive",
    "/how-to-play",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/learn",
    ...learnArticles.map((article) => `/learn/${article.slug}`),
    ...getSeoSlugs().map((slug) => `/${slug}`),
    ...dates.flatMap((date) => [`/puzzle/${date}`, `/hints/${date}`, `/answers/${date}`]),
    ...archivePuzzles.map((puzzle) => `/archive/${puzzle.date}/${puzzle.slot}`),
  ];

  return Array.from(new Set(routes)).map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency:
      route === "" || route === "/today" || route.startsWith("/puzzle/") || route.startsWith("/answers/")
        ? "daily"
        : "weekly",
    priority:
      route === ""
        ? 1
        : route === "/today"
          ? 0.9
          : route.startsWith("/what-does-") || route.startsWith("/daily-slang") || route.startsWith("/american-slang")
            ? 0.82
            : route.startsWith("/learn/")
              ? 0.75
              : 0.7,
  }));
}
