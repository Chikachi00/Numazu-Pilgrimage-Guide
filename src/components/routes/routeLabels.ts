import type { RouteDifficulty, RouteTheme, RouteTransport } from "../../types/route";

export const routeThemeLabels: Record<RouteTheme, string> = {
  first_time: "first_time",
  numazu_station: "numazu_station",
  uchiura_half_day: "uchiura_half_day",
  awashima_mito: "awashima_mito",
  photo: "photo",
  relaxed: "relaxed",
  hardcore: "hardcore",
};

export const routeDifficultyLabels: Record<RouteDifficulty, string> = {
  easy: "Easy",
  normal: "Normal",
  hard: "Hard",
};

export const routeTransportLabels: Record<RouteTransport, string> = {
  walk: "Walk",
  bus: "Bus",
  train: "Train",
  ferry: "Ferry",
  taxi: "Taxi",
};
