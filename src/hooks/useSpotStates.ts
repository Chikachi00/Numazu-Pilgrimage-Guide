import type { UserSpotState, UserSpotStateMap } from "../types/userState";
import { STORAGE_KEYS } from "../utils/storage";
import { useLocalStorage } from "./useLocalStorage";

const defaultSpotState: UserSpotState = {
  visited: false,
  favorite: false,
  wishlist: false,
};

function withDefaultState(state?: UserSpotState): UserSpotState {
  return {
    ...defaultSpotState,
    ...state,
  };
}

export function useSpotStates() {
  const [spotStates, setSpotStates] = useLocalStorage<UserSpotStateMap>(STORAGE_KEYS.spotStates, {});

  function updateSpotState(spotId: string, updater: (state: UserSpotState) => UserSpotState) {
    setSpotStates((currentStates) => ({
      ...currentStates,
      [spotId]: updater(withDefaultState(currentStates[spotId])),
    }));
  }

  function toggleVisited(spotId: string) {
    updateSpotState(spotId, (state) => {
      const nextVisited = !state.visited;
      const nextState = {
        ...state,
        visited: nextVisited,
      };

      if (nextVisited) {
        nextState.visitedAt = new Date().toISOString();
      } else {
        delete nextState.visitedAt;
      }

      return nextState;
    });
  }

  function toggleFavorite(spotId: string) {
    updateSpotState(spotId, (state) => ({
      ...state,
      favorite: !state.favorite,
    }));
  }

  function toggleWishlist(spotId: string) {
    updateSpotState(spotId, (state) => ({
      ...state,
      wishlist: !state.wishlist,
    }));
  }

  function getSpotState(spotId: string) {
    return withDefaultState(spotStates[spotId]);
  }

  return {
    spotStates,
    getSpotState,
    toggleVisited,
    toggleFavorite,
    toggleWishlist,
  };
}
