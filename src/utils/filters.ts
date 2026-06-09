import {
  areaJapaneseLabels,
  areaLabels,
  layerJapaneseLabels,
  layerLabels,
  typeJapaneseLabels,
  typeLabels,
} from "../data/labels";
import type { Character, Spot, SpotArea, SpotLayer, SpotType } from "../types/spot";
import type { UserSpotStateMap } from "../types/userState";

export type StatusFilter = "all" | "visited" | "unvisited" | "favorite" | "wishlist";
export type SpotVisibilityMode = "featured" | "all_verified" | "all";

export interface SpotFilters {
  query: string;
  areas: SpotArea[];
  types: SpotType[];
  layers: SpotLayer[];
  characters: Character[];
  status: StatusFilter;
  visibilityMode: SpotVisibilityMode;
}

export const DEFAULT_FILTERS: SpotFilters = {
  query: "",
  areas: [],
  types: [],
  layers: [],
  characters: [],
  status: "all",
  visibilityMode: "featured",
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
    spot.originalGoogleMapsName,
    spot.description.zh,
    spot.description.ja,
    areaLabels[spot.area],
    areaJapaneseLabels[spot.area],
    typeLabels[spot.type],
    typeJapaneseLabels[spot.type],
    spot.spotLayer ? layerLabels[spot.spotLayer] : undefined,
    spot.spotLayer ? layerJapaneseLabels[spot.spotLayer] : undefined,
    spot.businessHours?.weekdayOpen,
    spot.businessHours?.weekdayClose,
    spot.businessHours?.weekendHours,
    spot.businessHours?.regularHoliday,
    spot.businessHours?.specialHolidayNote,
    spot.businessHours?.businessNote,
    spot.businessHours?.priceNote,
    spot.businessHours?.weekdayPriceYen?.toString(),
    spot.businessHours?.weekendPriceYen?.toString(),
    ...(spot.tags ?? []),
  ];

  return searchFields.some((field) => normalize(field).includes(normalizedQuery));
}

function matchesVisibilityMode(spot: Spot, filters: SpotFilters): boolean {
  switch (filters.visibilityMode) {
    case "all":
      return true;
    case "all_verified":
      return spot.coordinateStatus === "verified";
    case "featured":
    default:
      return (
        spot.coordinateStatus === "verified" &&
        spot.isHiddenByDefault !== true &&
        (spot.isFeatured === true || spot.spotLayer === "pilgrimage_core")
      );
  }
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
      const layerMatched =
        filters.layers.length === 0 || (spot.spotLayer ? filters.layers.includes(spot.spotLayer) : false);
      const characterMatched =
        filters.characters.length === 0 ||
        spot.characters.some((character) => filters.characters.includes(character));

      return (
        matchesVisibilityMode(spot, filters) &&
        areaMatched &&
        typeMatched &&
        layerMatched &&
        characterMatched &&
        matchesStatus(spot, filters, states) &&
        matchesSearch(spot, filters.query)
      );
    })
    .sort((a, b) => a.priority - b.priority || a.name.zh.localeCompare(b.name.zh, "zh-CN"));
}
