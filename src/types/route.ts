import type { LocalizedText } from "./spot";

export type RouteDifficulty = "easy" | "normal" | "packed";

export interface PilgrimageRoute {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  spotIds: string[];
  estimatedHours: number;
  difficulty: RouteDifficulty;
  transport: LocalizedText;
  tips: LocalizedText;
}
