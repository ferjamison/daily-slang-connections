import { getPuzzleByDate } from "@/lib/puzzles";
import { Game } from "@/components/Game";

export default async function HomePage() {
  const puzzle = await getPuzzleByDate();
  return <Game puzzle={puzzle} />;
}
