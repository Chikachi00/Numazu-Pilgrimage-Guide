import type { PilgrimageRoute } from "../../types/route";
import type { UserSpotStateMap } from "../../types/userState";
import { RouteCard } from "./RouteCard";

interface RouteListProps {
  routes: PilgrimageRoute[];
  selectedRouteId?: string;
  spotStates: UserSpotStateMap;
  onSelectRoute: (routeId: string) => void;
}

function getCompletedCount(route: PilgrimageRoute, spotStates: UserSpotStateMap): number {
  return route.spotIds.filter((spotId) => spotStates[spotId]?.visited).length;
}

export function RouteList({ routes, selectedRouteId, spotStates, onSelectRoute }: RouteListProps) {
  return (
    <div className="route-list" aria-label="Recommended route list">
      {routes.map((route) => (
        <RouteCard
          key={route.id}
          route={route}
          completedCount={getCompletedCount(route, spotStates)}
          isSelected={selectedRouteId === route.id}
          onSelect={onSelectRoute}
        />
      ))}
    </div>
  );
}
