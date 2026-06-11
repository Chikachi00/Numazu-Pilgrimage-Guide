import { areaLabels, characterLabels, layerLabels, typeLabels } from "../../data/labels";
import type { Spot } from "../../types/spot";
import type { UserSpotState } from "../../types/userState";
import { getMarkerCategory, markerCategoryLabels } from "../../utils/markerCategory";
import { Badge } from "../ui/Badge";

interface SpotListItemProps {
  spot: Spot;
  state: UserSpotState;
  isSelected: boolean;
  onSelect: (spotId: string) => void;
}

function getSubtitle(spot: Spot) {
  return [spot.name.ja, spot.originalGoogleMapsName]
    .filter((value, index, values): value is string => Boolean(value) && value !== spot.name.zh && values.indexOf(value) === index)
    .join(" / ");
}

export function SpotListItem({ spot, state, isSelected, onSelect }: SpotListItemProps) {
  const needsCoordinateReview = spot.coordinateStatus !== "verified";
  const regularHoliday = spot.businessHours?.regularHoliday;
  const hasRegularHoliday = Boolean(regularHoliday && regularHoliday !== "無" && regularHoliday !== "无");
  const subtitle = getSubtitle(spot);
  const markerCategory = getMarkerCategory(spot);

  return (
    <button
      className={`spot-list-item${isSelected ? " is-selected" : ""}`}
      type="button"
      onClick={() => onSelect(spot.id)}
    >
      <div className="spot-list-main">
        <div>
          <h3>{spot.name.zh}</h3>
          {subtitle ? <p className="spot-list-subtitle">{subtitle}</p> : null}
          <p>
            {areaLabels[spot.area]} / {typeLabels[spot.type]}
          </p>
        </div>
        <span className="priority-dot" aria-label={`优先级 ${spot.priority}`}>
          P{spot.priority}
        </span>
      </div>
      <div className="badge-row">
        {spot.spotLayer ? <Badge tone="gray">{layerLabels[spot.spotLayer]}</Badge> : null}
        <Badge tone="blue">{markerCategoryLabels[markerCategory]}</Badge>
        {spot.isFeatured ? <Badge tone="green">推荐</Badge> : null}
        {spot.characters.slice(0, 4).map((character) => (
          <Badge key={character} tone="blue">
            {characterLabels[character]}
          </Badge>
        ))}
        {needsCoordinateReview ? <Badge tone="amber">坐标待校对</Badge> : <Badge tone="green">坐标已校对</Badge>}
        {spot.businessHours ? <Badge tone="blue">有营业信息</Badge> : null}
        {hasRegularHoliday ? <Badge tone="amber">定休：{regularHoliday}</Badge> : null}
      </div>
      <div className="badge-row status-row">
        {state.visited ? <Badge tone="green">已打卡</Badge> : null}
        {state.favorite ? <Badge tone="pink">收藏</Badge> : null}
        {state.wishlist ? <Badge tone="amber">想去</Badge> : null}
      </div>
    </button>
  );
}
