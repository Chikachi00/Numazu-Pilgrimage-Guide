import L from "leaflet";
import type { MarkerStyleMode } from "../types/map";
import type { Spot } from "../types/spot";
import type { UserSpotState } from "../types/userState";

interface CreateSpotMarkerIconOptions {
  spot: Spot;
  index: number;
  styleMode: MarkerStyleMode;
  isSelected: boolean;
  state: UserSpotState;
}

const layerClassNames: Record<NonNullable<Spot["spotLayer"]>, string> = {
  pilgrimage_core: "layer-pilgrimage",
  food: "layer-food",
  shopping: "layer-shopping",
  hotel: "layer-hotel",
  transport: "layer-transport",
  scenic: "layer-scenic",
  auxiliary: "layer-auxiliary",
};

function getLayerClassName(spot: Spot) {
  return spot.spotLayer ? layerClassNames[spot.spotLayer] : "layer-auxiliary";
}

function getMarkerGlyph(options: CreateSpotMarkerIconOptions) {
  if (options.state.visited) {
    return "✓";
  }

  if (options.styleMode === "numbered") {
    return String(options.index + 1);
  }

  if (options.styleMode === "aqours_inspired" && options.spot.isFeatured) {
    return "☆";
  }

  if (options.state.favorite) {
    return "★";
  }

  if (options.state.wishlist) {
    return "＋";
  }

  return "";
}

export function createSpotMarkerIcon(options: CreateSpotMarkerIconOptions) {
  const classNames = [
    "spot-div-marker",
    `marker-style-${options.styleMode}`,
    getLayerClassName(options.spot),
    options.isSelected ? "is-selected" : "",
    options.spot.isFeatured ? "is-featured" : "",
    options.state.visited ? "is-visited" : "",
    options.state.favorite ? "is-favorite" : "",
    options.state.wishlist ? "is-wishlist" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const glyph = getMarkerGlyph(options);

  return L.divIcon({
    className: "",
    html: `<span class="${classNames}"><span class="marker-core">${glyph}</span></span>`,
    iconAnchor: [18, 38],
    iconSize: [36, 40],
    popupAnchor: [0, -36],
  });
}
