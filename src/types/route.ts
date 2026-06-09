import type { LocalizedText } from "./spot";

export type RouteTheme =
  | "first_time"
  | "numazu_station"
  | "uchiura_half_day"
  | "awashima_mito"
  | "photo"
  | "relaxed"
  | "hardcore";

export type RouteDifficulty = "easy" | "normal" | "hard";

export type RouteTransport = "walk" | "bus" | "train" | "ferry" | "taxi";

export interface PilgrimageRoute {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  theme: RouteTheme;
  spotIds: string[];
  estimatedHours: number;
  difficulty: RouteDifficulty;
  transport: RouteTransport[];
  startSpotId?: string;
  endSpotId?: string;
  tips?: LocalizedText;
}
