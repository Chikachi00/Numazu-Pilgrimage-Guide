import type { UserSpotStateMap } from "../types/userState";

export interface ProgressStats {
  total: number;
  visited: number;
  favorite: number;
  wishlist: number;
}

export function getProgressStats(total: number, states: UserSpotStateMap): ProgressStats {
  const values = Object.values(states);

  return {
    total,
    visited: values.filter((state) => state.visited).length,
    favorite: values.filter((state) => state.favorite).length,
    wishlist: values.filter((state) => state.wishlist).length,
  };
}
