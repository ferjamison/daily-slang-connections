import type { Puzzle } from "./types";

export const samplePuzzle: Puzzle = {
  id: "local-sample",
  date: "2026-05-25",
  slot: "morning",
  title: "Daily Slang Connections #148",
  words: [
    "lit",
    "fire",
    "dope",
    "sick",
    "sus",
    "shady",
    "sketchy",
    "off",
    "ghosted",
    "left on read",
    "flaked",
    "bailed",
    "broke",
    "loaded",
    "rich",
    "pricey"
  ],
  categories: [
    {
      name: "Very good",
      words: ["lit", "fire", "dope", "sick"],
      difficulty: "easy",
      explanation: "These words can mean something is excellent, exciting, or impressive in casual American English.",
      definitions: [
        { word: "lit", meaning: "Exciting, fun, or very good." },
        { word: "fire", meaning: "Very good or impressive." },
        { word: "dope", meaning: "Cool or excellent." },
        { word: "sick", meaning: "Very cool or impressive, not ill in this use." }
      ]
    },
    {
      name: "Suspicious",
      words: ["sus", "shady", "sketchy", "off"],
      difficulty: "medium",
      explanation: "These describe a person, place, or situation that feels unsafe, dishonest, or strange.",
      definitions: [
        { word: "sus", meaning: "Short for suspicious." },
        { word: "shady", meaning: "Dishonest or not trustworthy." },
        { word: "sketchy", meaning: "A little unsafe or suspicious." },
        { word: "off", meaning: "Strange or not quite right." }
      ]
    },
    {
      name: "Ignoring plans or messages",
      words: ["ghosted", "left on read", "flaked", "bailed"],
      difficulty: "hard",
      explanation: "These are used when someone stops replying, cancels, or does not show up.",
      definitions: [
        { word: "ghosted", meaning: "Stopped replying without explanation." },
        { word: "left on read", meaning: "Read a message but did not answer." },
        { word: "flaked", meaning: "Canceled plans or did not show up." },
        { word: "bailed", meaning: "Left or canceled plans suddenly." }
      ]
    },
    {
      name: "Money",
      words: ["broke", "loaded", "rich", "pricey"],
      difficulty: "tricky",
      explanation: "These words talk about having money, not having money, or something costing a lot.",
      definitions: [
        { word: "broke", meaning: "Having little or no money." },
        { word: "loaded", meaning: "Very rich." },
        { word: "rich", meaning: "Having a lot of money." },
        { word: "pricey", meaning: "Expensive." }
      ]
    }
  ],
  hints: [
    "These words praise something.",
    "These words describe something that feels wrong.",
    "These happen when communication or plans fail.",
    "These words are about cost or wealth."
  ],
  full_explanation:
    "Today’s puzzle teaches four useful slang areas: praising something, noticing something suspicious, talking about ignored messages or canceled plans, and describing money. The words are common in casual conversations, texts, videos, and social media.",
  created_at: "2026-05-25T00:00:00.000Z"
};
