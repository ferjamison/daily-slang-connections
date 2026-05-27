import type { MetadataRoute } from "next";
import { learnArticles } from "@/lib/learn";

const siteUrl = "https://dailyslangcategories.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
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
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "" || route === "/today" ? "daily" : "weekly",
    priority: route === "" ? 1 : route === "/today" ? 0.9 : route.startsWith("/learn/") ? 0.75 : 0.7,
  }));
}
