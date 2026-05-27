import OpenAI from "openai";
import { z } from "zod";
import type { Puzzle } from "./types";
import type { PuzzleSlot } from "./puzzles";

const difficultySchema = z.enum(["easy", "medium", "hard", "tricky"]);

const generatedPuzzleSchema = z.object({
  title: z.string().min(4),
  words: z.array(z.string().min(1)).length(16),
  categories: z.array(z.object({
    name: z.string().min(2),
    words: z.array(z.string().min(1)).length(4),
    difficulty: difficultySchema,
    explanation: z.string().min(20),
    definitions: z.array(z.object({
      word: z.string().min(1),
      meaning: z.string().min(8),
    })).length(4),
  })).length(4),
  hints: z.array(z.string().min(8)).length(4),
  full_explanation: z.string().min(80),
});

function puzzleDateShanghai() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const map = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${map.year}-${map.month}-${map.day}`;
}

function currentShanghaiSlot(): PuzzleSlot {
  const hour = Number(new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Shanghai",
    hour: "2-digit",
    hour12: false,
  }).format(new Date()));
  return hour >= 18 ? "evening" : "morning";
}

function validateCategoryCoverage(words: string[], categories: { words: string[] }[]) {
  const normalizedWords = words.map((word) => word.toLowerCase().trim()).sort();
  const categoryWords = categories
    .flatMap((category) => category.words)
    .map((word) => word.toLowerCase().trim())
    .sort();

  return normalizedWords.length === categoryWords.length &&
    normalizedWords.every((word, index) => word === categoryWords[index]);
}

function normalizeGeneratedPuzzle(puzzle: z.infer<typeof generatedPuzzleSchema>) {
  return {
    ...puzzle,
    words: puzzle.words.map((word) => word.toLowerCase().trim()),
    categories: puzzle.categories.map((category) => ({
      ...category,
      words: category.words.map((word) => word.toLowerCase().trim()),
      definitions: category.definitions.map((definition) => ({
        ...definition,
        word: definition.word.toLowerCase().trim(),
      })),
    })),
  };
}

export async function generatePuzzle(
  date = puzzleDateShanghai(),
  slot = currentShanghaiSlot(),
): Promise<Puzzle> {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error("OPENAI_API_KEY is required to generate puzzles.");
  }

  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const response = await openai.responses.create({
    model: "gpt-5.4-mini",
    input: [
      {
        role: "developer",
        content:
          "You create clean American English learning puzzles. Output only valid JSON matching the schema. Use natural, current, common American casual phrases. Do not invent slang. Avoid obscure, offensive, sexual, hateful, or very low-frequency terms. Explanations must be simple B1-B2 English.",
      },
      {
        role: "user",
        content: `Generate one ${slot} Daily Slang Connections puzzle for ${date}. It must have exactly 16 unique lowercase slang words or casual phrases and exactly 4 categories of 4 words. Categories must have one clear solution with no ambiguous overlaps. Include spoiler-light hints and simple definitions for every word.`,
      },
    ],
    text: {
      format: {
        type: "json_schema",
        name: "daily_slang_connections_puzzle",
        strict: true,
        schema: {
          type: "object",
          additionalProperties: false,
          required: ["title", "words", "categories", "hints", "full_explanation"],
          properties: {
            title: { type: "string" },
            words: { type: "array", minItems: 16, maxItems: 16, items: { type: "string" } },
            categories: {
              type: "array",
              minItems: 4,
              maxItems: 4,
              items: {
                type: "object",
                additionalProperties: false,
                required: ["name", "words", "difficulty", "explanation", "definitions"],
                properties: {
                  name: { type: "string" },
                  words: { type: "array", minItems: 4, maxItems: 4, items: { type: "string" } },
                  difficulty: { type: "string", enum: ["easy", "medium", "hard", "tricky"] },
                  explanation: { type: "string" },
                  definitions: {
                    type: "array",
                    minItems: 4,
                    maxItems: 4,
                    items: {
                      type: "object",
                      additionalProperties: false,
                      required: ["word", "meaning"],
                      properties: {
                        word: { type: "string" },
                        meaning: { type: "string" },
                      },
                    },
                  },
                },
              },
            },
            hints: { type: "array", minItems: 4, maxItems: 4, items: { type: "string" } },
            full_explanation: { type: "string" },
          },
        },
      },
    },
  });

  const parsed = normalizeGeneratedPuzzle(generatedPuzzleSchema.parse(JSON.parse(response.output_text)));
  const uniqueWords = new Set(parsed.words);
  if (uniqueWords.size !== 16) {
    throw new Error("Generated puzzle must contain 16 unique words.");
  }
  if (!validateCategoryCoverage(parsed.words, parsed.categories)) {
    throw new Error("Generated puzzle category words do not exactly match the 16 puzzle words.");
  }

  return {
    id: crypto.randomUUID(),
    date,
    slot,
    created_at: new Date().toISOString(),
    ...parsed,
  };
}
