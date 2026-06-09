export interface UserSpotState {
  visited: boolean;
  favorite: boolean;
  wishlist: boolean;
  visitedAt?: string;
  note?: string;
}

export type UserSpotStateMap = Record<string, UserSpotState>;
