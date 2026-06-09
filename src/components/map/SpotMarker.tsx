import { Marker, Popup } from "react-leaflet";
import { areaLabels, typeLabels } from "../../data/labels";
import type { MarkerStyleMode } from "../../types/map";
import type { Spot } from "../../types/spot";
import type { UserSpotState } from "../../types/userState";
import { createSpotMarkerIcon } from "../../utils/markerIcons";

interface SpotMarkerProps {
  spot: Spot;
  index: number;
  isSelected: boolean;
  markerStyleMode: MarkerStyleMode;
  state: UserSpotState;
  onSelect: (spotId: string) => void;
}

export function SpotMarker({ spot, index, isSelected, markerStyleMode, state, onSelect }: SpotMarkerProps) {
  return (
    <Marker
      position={[spot.latitude, spot.longitude]}
      icon={createSpotMarkerIcon({ spot, index, styleMode: markerStyleMode, isSelected, state })}
      eventHandlers={{
        click: () => onSelect(spot.id),
      }}
      zIndexOffset={isSelected ? 1000 : 0}
    >
      <Popup>
        <div className="marker-popup">
          <strong>{spot.name.zh}</strong>
          <span>
            {areaLabels[spot.area]} · {typeLabels[spot.type]}
          </span>
        </div>
      </Popup>
    </Marker>
  );
}
