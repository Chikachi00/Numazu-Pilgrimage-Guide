import { Badge } from "../ui/Badge";
import type { PilgrimageRoute } from "../../types/route";
import { routeDifficultyLabels, routeThemeLabels, routeTransportLabels } from "./routeLabels";

interface RouteCardProps {
  route: PilgrimageRoute;
  completedCount: number;
  isSelected: boolean;
  onSelect: (routeId: string) => void;
}

export function RouteCard({ route, completedCount, isSelected, onSelect }: RouteCardProps) {
  return (
    <button
      className={`route-card-button${isSelected ? " is-selected" : ""}`}
      type="button"
      onClick={() => onSelect(route.id)}
    >
      <div className="route-card-topline">
        <Badge tone="blue">{routeThemeLabels[route.theme]}</Badge>
        <Badge tone={route.difficulty === "hard" ? "pink" : route.difficulty === "normal" ? "amber" : "green"}>
          {routeDifficultyLabels[route.difficulty]}
        </Badge>
      </div>

      <h3>{route.title.zh}</h3>
      <p>{route.description.zh}</p>

      <div className="route-card-meta">
        <span>{route.estimatedHours}h</span>
        <span>{route.transport.map((item) => routeTransportLabels[item]).join(" + ")}</span>
        <span>{route.spotIds.length} spots</span>
      </div>

      <div className="route-progress-line">
        <span>
          {completedCount} / {route.spotIds.length} completed
        </span>
        <progress value={completedCount} max={route.spotIds.length} />
      </div>
    </button>
  );
}
