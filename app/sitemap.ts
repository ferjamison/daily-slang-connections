import type { MetadataRoute } from "next";
import { learnCategories } from "@/lib/learnCategories";
import { learnArticles } from "@/lib/learn";
import { getSeoSlugs } from "@/lib/seoContent";

const siteUrl = "https://dailyslangcategories.com";

export const dynamic = "force-dynamic";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = [
    "",
    "/today",
    "/hints",
    "/answers",
    "/how-to-play",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/learn",
    "/learn/the-slang-blade-method-how-to-master-informal-english-fast",
    ...learnCategories.map((category) => `/learn/${category.slug}`),
    ...learnArticles.map((article) => `/learn/${article.slug}`),
    ...getSeoSlugs().map((slug) => `/${slug}`),
  ];

  return Array.from(new Set(routes)).map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "" || route === "/today" ? "daily" : "weekly",
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
