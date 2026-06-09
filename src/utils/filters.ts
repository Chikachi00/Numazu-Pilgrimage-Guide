import type { Character, Spot, SpotArea, SpotType } from "../types/spot";
import type { UserSpotStateMap } from "../types/userState";

export type StatusFilter = "all" | "visited" | "unvisited" | "favorite" | "wishlist";

export interface SpotFilters {
  query: string;
  areas: SpotArea[];
  types: SpotType[];
  characters: Character[];
  status: StatusFilter;
}

export const DEFAULT_FILTERS: SpotFilters = {
  query: "",
  areas: [],
  types: [],
  characters: [],
  status: "all",
};

function normalize(value: string | undefined): string {
  return value?.trim().toLowerCase() ?? "";
}

function matchesSearch(spot: Spot, query: string): boolean {
  const normalizedQuery = normalize(query);

  if (!normalizedQuery) {
    return true;
  }

  const searchFields = [
    spot.name.zh,
    spot.name.ja,
    spot.name.en,
    spot.description.zh,
    spot.description.ja,
    ...(spot.tags ?? []),
  ];

  return searchFields.some((field) => normalize(field).includes(normalizedQuery));
}

function matchesStatus(spot: Spot, filters: SpotFilters, states: UserSpotStateMap): boolean {
  const state = states[spot.id];

  switch (filters.status) {
    case "visited":
      return Boolean(state?.visited);
    case "unvisited":
      return !state?.visited;
    case "favorite":
      return Boolean(state?.favorite);
    case "wishlist":
      return Boolean(state?.wishlist);
    case "all":
    default:
      return true;
  }
}

export function filterSpots(spots: Spot[], filters: SpotFilters, states: UserSpotStateMap): Spot[] {
  return spots
    .filter((spot) => {
      const areaMatched = filters.areas.length === 0 || filters.areas.includes(spot.area);
      const typeMatched = filters.types.length === 0 || filters.types.includes(spot.type);
      const characterMatched =
        filters.characters.length === 0 ||
        spot.characters.some((character) => filters.characters.includes(character));

      return (
        areaMatched &&
        typeMatched &&
        characterMatched &&
        matchesStatus(spot, filters, states) &&
        matchesSearch(spot, filters.query)
      );
    })
    .sort((a, b) => a.priority - b.priority || a.name.zh.localeCompare(b.name.zh, "zh-CN"));
}
