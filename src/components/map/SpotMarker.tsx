import { Marker, Popup } from "react-leaflet";
import { areaLabels, typeLabels } from "../../data/labels";
import type { MarkerCategoryOverrides, MarkerMode } from "../../types/map";
import type { Spot } from "../../types/spot";
import type { UserSpotState } from "../../types/userState";
import { getMarkerCategory, markerCategoryLabels } from "../../utils/markerCategory";
import { createSpotMarkerIcon } from "../../utils/markerIcons";

interface SpotMarkerProps {
  spot: Spot;
  isSelected: boolean;
  markerMode: MarkerMode;
  markerCategoryOverrides: MarkerCategoryOverrides;
  state: UserSpotState;
  onSelect: (spotId: string) => void;
}

export function SpotMarker({ spot, isSelected, markerMode, markerCategoryOverrides, state, onSelect }: SpotMarkerProps) {
  const markerCategory = getMarkerCategory(spot);

  return (
    <Marker
      position={[spot.latitude, spot.longitude]}
      icon={createSpotMarkerIcon({ spot, markerMode, categoryOverrides: markerCategoryOverrides, isSelected, state })}
      eventHandlers={{
        click: () => onSelect(spot.id),
      }}
      zIndexOffset={isSelected ? 1000 : 0}
    >
      <Popup>
        <div className="marker-popup">
          <strong>{spot.name.zh}</strong>
          <span>
            {areaLabels[spot.area]} / {typeLabels[spot.type]}
          </span>
          <span>{markerCategoryLabels[markerCategory]}</span>
        </div>
      </Popup>
    </Marker>
  );
}
