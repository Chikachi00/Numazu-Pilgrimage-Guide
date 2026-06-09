import type { Character, SpotArea, SpotLayer, SpotType } from "../types/spot";
import type { SpotVisibilityMode, StatusFilter } from "../utils/filters";
import { DEFAULT_FILTERS, type SpotFilters } from "../utils/filters";
import { STORAGE_KEYS } from "../utils/storage";
import { useLocalStorage } from "./useLocalStorage";

function toggleValue<T>(values: T[], value: T): T[] {
  return values.includes(value) ? values.filter((item) => item !== value) : [...values, value];
}

export function useSpotFilters() {
  const [filters, setFilters] = useLocalStorage<SpotFilters>(STORAGE_KEYS.filters, DEFAULT_FILTERS);

  return {
    filters: {
      ...DEFAULT_FILTERS,
      ...filters,
    },
    setQuery: (query: string) => setFilters((current) => ({ ...DEFAULT_FILTERS, ...current, query })),
    toggleArea: (area: SpotArea) =>
      setFilters((current) => ({
        ...DEFAULT_FILTERS,
        ...current,
        areas: toggleValue((current.areas ?? []) as SpotArea[], area),
      })),
    toggleType: (type: SpotType) =>
      setFilters((current) => ({
        ...DEFAULT_FILTERS,
        ...current,
        types: toggleValue((current.types ?? []) as SpotType[], type),
      })),
    toggleLayer: (layer: SpotLayer) =>
      setFilters((current) => ({
        ...DEFAULT_FILTERS,
        ...current,
        layers: toggleValue((current.layers ?? []) as SpotLayer[], layer),
      })),
    toggleCharacter: (character: Character) =>
      setFilters((current) => ({
        ...DEFAULT_FILTERS,
        ...current,
        characters: toggleValue((current.characters ?? []) as Character[], character),
      })),
    setStatus: (status: StatusFilter) =>
      setFilters((current) => ({
        ...DEFAULT_FILTERS,
        ...current,
        status,
      })),
    setVisibilityMode: (visibilityMode: SpotVisibilityMode) =>
      setFilters((current) => ({
        ...DEFAULT_FILTERS,
        ...current,
        visibilityMode,
      })),
    clearFilters: () => setFilters(DEFAULT_FILTERS),
  };
}
