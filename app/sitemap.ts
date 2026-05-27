import type { MetadataRoute } from "next";

const siteUrl = "https://dailyslangcategories.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = ["", "/today", "/hints", "/answers", "/archive", "/how-to-play"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "" || route === "/today" ? "daily" : "weekly",
    priority: route === "" ? 1 : route === "/today" ? 0.9 : 0.7,
  }));
}
