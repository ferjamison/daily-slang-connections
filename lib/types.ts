export type Difficulty = "easy" | "medium" | "hard" | "tricky";

export type SlangDefinition = {
  word: string;
  meaning: string;
};

export type PuzzleCategory = {
  name: string;
  words: string[];
  difficulty: Difficulty;
  explanation: string;
  definitions: SlangDefinition[];
};

export type Puzzle = {
  id: string;
  date: string;
  slot: "morning" | "evening";
  title: string;
  words: string[];
  categories: PuzzleCategory[];
  hints: string[];
  full_explanation: string;
  created_at: string;
};

export type UserProgress = {
  id: string;
  user_id: string;
  puzzle_date: string;
  solved_at: string | null;
};
