import { genZSlangArticle } from "./genZArticle";
import type { LearnArticle } from "./learn";

export type LearnCategory = {
  slug: string;
  title: string;
  description: string;
  articles: LearnArticle[];
};

export const learnCategories: LearnCategory[] = [
  {
    slug: "gen-z-slang",
    title: "Gen Z Slang",
    description:
      "Browse Gen Z slang guides with examples, meanings, usage notes, and related daily slang puzzles.",
    articles: [genZSlangArticle],
  },
];

export function getLearnCategory(slug: string) {
  return learnCategories.find((category) => category.slug === slug);
}
