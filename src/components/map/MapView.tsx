import L from "leaflet";
import { useEffect } from "react";
import { MapContainer, TileLayer, useMap, ZoomControl } from "react-leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import type { MarkerCategoryOverrides, MarkerMode } from "../../types/map";
import type { Spot } from "../../types/spot";
import type { UserSpotState } from "../../types/userState";
import { hasVerifiedGoogleMapsCoordinate } from "../../utils/googleMaps";
import { MapLegend } from "./MapLegend";
import { SpotMarker } from "./SpotMarker";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const NUMAZU_CENTER: [number, number] = [35.038, 138.875];

interface MapPanToProps {
  spot?: Spot;
}

function MapPanTo({ spot }: MapPanToProps) {
  const map = useMap();

  useEffect(() => {
    if (spot && hasVerifiedGoogleMapsCoordinate(spot)) {
      map.panTo([spot.latitude, spot.longitude], { animate: true });
    }
  }, [map, spot]);

  return null;
}

interface MapViewProps {
  spots: Spot[];
  selectedSpot?: Spot;
  selectedSpotId?: string;
  markerMode: MarkerMode;
  markerCategoryOverrides: MarkerCategoryOverrides;
  getSpotState: (spotId: string) => UserSpotState;
  onSelectSpot: (spotId: string) => void;
}

export function MapView({
  spots,
  selectedSpot,
  selectedSpotId,
  markerMode,
  markerCategoryOverrides,
  getSpotState,
  onSelectSpot,
}: MapViewProps) {
  const markerSpots = spots.filter(hasVerifiedGoogleMapsCoordinate);

  return (
    <div className="map-panel">
      <MapContainer center={NUMAZU_CENTER} zoom={12} scrollWheelZoom zoomControl={false} className="leaflet-map">
        <ZoomControl position="bottomright" />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapPanTo spot={selectedSpot} />
        {markerSpots.map((spot) => (
          <SpotMarker
            key={spot.id}
            spot={spot}
            isSelected={selectedSpotId === spot.id}
            markerMode={markerMode}
            markerCategoryOverrides={markerCategoryOverrides}
            state={getSpotState(spot.id)}
            onSelect={onSelectSpot}
          />
        ))}
      </MapContainer>
      <MapLegend />
    </div>
  );
}
