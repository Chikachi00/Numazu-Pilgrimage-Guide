import type { Spot } from "../../types/spot";
import type { UserSpotState } from "../../types/userState";
import { EmptyState } from "../ui/EmptyState";
import { SpotListItem } from "./SpotListItem";

interface SpotListProps {
  spots: Spot[];
  selectedSpotId?: string;
  getSpotState: (spotId: string) => UserSpotState;
  onSelectSpot: (spotId: string) => void;
}

export function SpotList({ spots, selectedSpotId, getSpotState, onSelectSpot }: SpotListProps) {
  if (spots.length === 0) {
    return <EmptyState title="没有匹配的点位" description="试试减少筛选条件或更换关键词。" />;
  }

  return (
    <div className="spot-list">
      {spots.map((spot) => (
        <SpotListItem
          key={spot.id}
          spot={spot}
          state={getSpotState(spot.id)}
          isSelected={selectedSpotId === spot.id}
          onSelect={onSelectSpot}
        />
      ))}
    </div>
  );
}
