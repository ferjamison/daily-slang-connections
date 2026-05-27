"use client";

import { useMemo, useState } from "react";
import type { Puzzle, PuzzleCategory } from "@/lib/types";
import "./game.css";

const MAX_MISTAKES = 4;

function normalize(word: string) {
  return word.trim().toLowerCase();
}

function sameSet(a: string[], b: string[]) {
  if (a.length !== b.length) return false;
  const left = a.map(normalize).sort();
  const right = b.map(normalize).sort();
  return left.every((word, index) => word === right[index]);
}

function hashSeed(seed: string) {
  let hash = 2166136261;
  for (let index = 0; index < seed.length; index += 1) {
    hash ^= seed.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function seededRandom(seed: number) {
  let value = seed || 1;
  return () => {
    value = Math.imul(48271, value) % 0x7fffffff;
    return (value & 0x7fffffff) / 0x7fffffff;
  };
}

function shuffle<T>(items: T[], seedText: string) {
  const result = [...items];
  const random = seededRandom(hashSeed(seedText));
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }
  return result;
}

export function Game({ puzzle }: { puzzle: Puzzle }) {
  const words = useMemo(() => shuffle(puzzle.words, puzzle.date), [puzzle.date, puzzle.words]);
  const [selected, setSelected] = useState<string[]>([]);
  const [solved, setSolved] = useState<PuzzleCategory[]>([]);
  const [mistakes, setMistakes] = useState(0);
  const [message, setMessage] = useState("Find four slang words that belong together.");
  const [hintIndex, setHintIndex] = useState(0);

  const solvedWords = useMemo(
    () => new Set(solved.flatMap((category) => category.words.map(normalize))),
    [solved],
  );
  const remainingMistakes = MAX_MISTAKES - mistakes;
  const isComplete = solved.length === puzzle.categories.length || mistakes >= MAX_MISTAKES;

  function toggleWord(word: string) {
    if (isComplete || solvedWords.has(normalize(word))) return;
    setSelected((current) => {
      if (current.includes(word)) return current.filter((item) => item !== word);
      if (current.length >= 4) return current;
      return [...current, word];
    });
  }

  function submit() {
    if (selected.length !== 4) {
      setMessage("Choose exactly four words before you submit.");
      return;
    }

    const match = puzzle.categories.find(
      (category) =>
        !solved.some((solvedCategory) => solvedCategory.name === category.name) &&
        sameSet(category.words, selected),
    );

    if (match) {
      setSolved((current) => [...current, match]);
      setSelected([]);
      setMessage(`Correct: ${match.name}`);
      return;
    }

    const nextMistakes = mistakes + 1;
    setMistakes(nextMistakes);
    setSelected([]);
    setMessage(
      nextMistakes >= MAX_MISTAKES
        ? "Game over. Study the answer below and try tomorrow."
        : `Not quite. ${MAX_MISTAKES - nextMistakes} attempts left.`,
    );
  }

  function revealHint() {
    const hint = puzzle.hints[hintIndex % puzzle.hints.length];
    setHintIndex((value) => value + 1);
    setMessage(`Hint: ${hint}`);
  }

  function clearSelection() {
    setSelected([]);
    setMessage("Selection cleared.");
  }

  return (
    <main className="game-page">
      <section className="game-card" aria-label="Today’s puzzle">
        <div className="game-head">
          <div className="date-row">
            <span>{new Date(`${puzzle.date}T00:00:00`).toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}</span>
            <span className="pill">daily slang</span>
          </div>
          <h1>Daily Slang Connections</h1>
        </div>

        <div className="game-body">
          <div className="metrics">
            <div className="metric"><span>Words</span><strong>16</strong></div>
            <div className="metric"><span>Groups</span><strong>{solved.length}/4</strong></div>
            <div className="metric"><span>Tries</span><strong>{remainingMistakes}</strong></div>
          </div>

          <p className="prompt">{message}</p>

          <div className="solved-list" aria-label="Solved categories">
            {solved.map((category) => (
              <div className="solved-category" key={category.name}>
                <b>{category.name}</b>
                <span>{category.words.join(", ")}</span>
              </div>
            ))}
          </div>

          <div className="word-grid" aria-label="Word grid">
            {words.map((word) => {
              const isSolved = solvedWords.has(normalize(word));
              const isSelected = selected.includes(word);
              return (
                <button
                  className={`word-tile ${isSelected ? "selected" : ""} ${isSolved ? "solved" : ""}`}
                  disabled={isSolved || isComplete}
                  key={word}
                  onClick={() => toggleWord(word)}
                >
                  {word}
                </button>
              );
            })}
          </div>

          <div className="mistakes">
            <span>Mistakes</span>
            {Array.from({ length: MAX_MISTAKES }).map((_, index) => (
              <span className={`dot ${index < mistakes ? "used" : ""}`} key={index} />
            ))}
          </div>

          <div className="actions">
            <button className="action" onClick={clearSelection}>Clear</button>
            <button className="action" onClick={revealHint}>Hint</button>
            <button className="action primary" onClick={submit} disabled={isComplete}>Submit</button>
          </div>
        </div>
      </section>

      <section className="explanation card">
        <h2>{isComplete ? "Full Answer" : "Quick Note"}</h2>
        <p>{isComplete ? puzzle.full_explanation : "Hints help you notice meaning or usage, but they do not reveal the category name."}</p>
        <div className="answer-groups">
          {(isComplete ? puzzle.categories : solved).map((category) => (
            <article key={category.name}>
              <h3>{category.name}</h3>
              <p>{category.explanation}</p>
              <ul>
                {category.definitions.map((definition) => (
                  <li key={definition.word}>
                    <strong>{definition.word}:</strong> {definition.meaning}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
