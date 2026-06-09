import { Marker, Popup } from "react-leaflet";
import { areaLabels, typeLabels } from "../../data/labels";
import type { Spot } from "../../types/spot";

interface SpotMarkerProps {
  spot: Spot;
  isSelected: boolean;
  onSelect: (spotId: string) => void;
}

export function SpotMarker({ spot, isSelected, onSelect }: SpotMarkerProps) {
  return (
    <Marker
      position={[spot.latitude, spot.longitude]}
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
