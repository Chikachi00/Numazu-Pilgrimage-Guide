import L from "leaflet";
import type { MarkerCategory, MarkerCategoryOverrides, MarkerIconName, MarkerMode } from "../types/map";
import type { Spot } from "../types/spot";
import type { UserSpotState } from "../types/userState";
import { getMarkerCategory } from "./markerCategory";

interface CreateSpotMarkerIconOptions {
  spot: Spot;
  markerMode: MarkerMode;
  categoryOverrides: MarkerCategoryOverrides;
  isSelected: boolean;
  state: UserSpotState;
}

export const defaultCategoryIcons: Record<MarkerCategory, MarkerIconName> = {
  restaurant: "utensils",
  cafe: "coffee",
  shop: "bag",
  hotel: "bed",
  transport: "bus",
  info: "info",
  park: "tree",
  shrine: "shrine",
  beach: "wave",
  scenic: "camera",
  aquarium: "fish",
  onsen: "onsen",
  museum: "museum",
  anime: "star",
  generic: "pin",
};

export const markerIconOptions: MarkerIconName[] = [
  "pin",
  "dot",
  "star",
  "heart",
  "bookmark",
  "utensils",
  "coffee",
  "bag",
  "bed",
  "bus",
  "train",
  "info",
  "tree",
  "wave",
  "camera",
  "mountain",
  "fish",
  "onsen",
  "shrine",
  "building",
  "museum",
];

export const markerIconLabels: Record<MarkerIconName, string> = {
  pin: "图钉",
  dot: "圆点",
  star: "星标",
  heart: "爱心",
  bookmark: "书签",
  utensils: "餐具",
  coffee: "咖啡",
  bag: "购物袋",
  bed: "床",
  bus: "巴士",
  train: "列车",
  info: "信息",
  tree: "树",
  wave: "海浪",
  camera: "相机",
  mountain: "山",
  fish: "鱼",
  onsen: "温泉",
  shrine: "神社",
  building: "建筑",
  museum: "展馆",
};

function iconPath(iconName: MarkerIconName) {
  switch (iconName) {
    case "utensils":
      return '<path d="M8 3v7M5 3v5a3 3 0 0 0 6 0V3M8 10v11M16 3v18M16 3c2 2 3 4 3 7 0 2-1 4-3 5"/>';
    case "coffee":
      return '<path d="M5 8h11v5a5 5 0 0 1-5 5H9a4 4 0 0 1-4-4V8Z"/><path d="M16 10h2a2 2 0 0 1 0 4h-2M7 4c1 1 1 2 0 3M12 4c1 1 1 2 0 3"/>';
    case "bag":
      return '<path d="M6 8h12l-1 12H7L6 8Z"/><path d="M9 8a3 3 0 0 1 6 0"/>';
    case "bed":
      return '<path d="M4 11h16v7M4 18V7M20 18v-4a3 3 0 0 0-3-3h-5v7M7 11h3"/>';
    case "bus":
      return '<path d="M6 4h12a2 2 0 0 1 2 2v10H4V6a2 2 0 0 1 2-2Z"/><path d="M4 9h16M7 19h1M16 19h1"/>';
    case "train":
      return '<path d="M7 3h10a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Z"/><path d="M7 8h10M8 21l2-3M16 18l2 3"/>';
    case "info":
      return '<path d="M12 10v7M12 7h.01"/><circle cx="12" cy="12" r="9"/>';
    case "tree":
      return '<path d="M12 3 5 14h5l-3 5h10l-3-5h5L12 3Z"/><path d="M12 19v3"/>';
    case "wave":
      return '<path d="M3 15c3-3 6 3 9 0s6 3 9 0M3 19c3-3 6 3 9 0s6 3 9 0"/>';
    case "camera":
      return '<path d="M5 7h4l2-2h3l2 2h3v12H5V7Z"/><circle cx="12" cy="13" r="3"/>';
    case "mountain":
      return '<path d="m3 19 7-12 4 6 3-4 4 10H3Z"/>';
    case "fish":
      return '<path d="M3 12s4-5 10-5 8 5 8 5-2 5-8 5-10-5-10-5Z"/><path d="m3 12-2-3v6l2-3ZM16 12h.01"/>';
    case "onsen":
      return '<path d="M6 15c4 2 8 2 12 0M8 19c3 1 5 1 8 0M8 4c2 2-2 3 0 5M12 4c2 2-2 3 0 5M16 4c2 2-2 3 0 5"/>';
    case "shrine":
      return '<path d="M4 7h16M6 10h12M8 10v9M16 10v9M5 19h14M12 4v3"/>';
    case "building":
      return '<path d="M5 21V5h14v16M9 9h.01M15 9h.01M9 13h.01M15 13h.01M9 17h.01M15 17h.01"/>';
    case "museum":
      return '<path d="m4 9 8-5 8 5H4ZM6 10v8M10 10v8M14 10v8M18 10v8M4 20h16"/>';
    case "star":
      return '<path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z"/>';
    case "heart":
      return '<path d="M12 20s-7-4.4-9-9a4 4 0 0 1 7-4 4 4 0 0 1 7 4c-2 4.6-9 9-9 9Z"/>';
    case "bookmark":
      return '<path d="M7 4h10v17l-5-3-5 3V4Z"/>';
    case "dot":
      return '<circle cx="12" cy="12" r="5"/>';
    case "pin":
    default:
      return '<path d="M12 21s7-6 7-12a7 7 0 0 0-14 0c0 6 7 12 7 12Z"/><circle cx="12" cy="9" r="2.5"/>';
  }
}

function renderIcon(iconName: MarkerIconName) {
  return `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${iconPath(iconName)}</svg>`;
}

export function getMarkerIconName(category: MarkerCategory, mode: MarkerMode, overrides: MarkerCategoryOverrides) {
  if (mode === "custom_icon") {
    return overrides[category] ?? defaultCategoryIcons[category];
  }

  return defaultCategoryIcons[category];
}

export function createSpotMarkerIcon(options: CreateSpotMarkerIconOptions) {
  const category = getMarkerCategory(options.spot);
  const iconName = getMarkerIconName(category, options.markerMode, options.categoryOverrides);
  const statusBadges = [
    options.state.visited ? '<span class="marker-badge marker-badge-visited">✓</span>' : "",
    options.state.favorite ? '<span class="marker-badge marker-badge-favorite">♥</span>' : "",
    options.state.wishlist ? '<span class="marker-badge marker-badge-wishlist">◆</span>' : "",
    options.spot.isFeatured ? '<span class="marker-badge marker-badge-featured">★</span>' : "",
  ].join("");
  const classNames = [
    "spot-div-marker",
    "marker-mode-category",
    `marker-category-${category}`,
    `marker-icon-${iconName}`,
    options.isSelected ? "is-selected" : "",
    options.spot.isFeatured ? "is-featured" : "",
    options.state.visited ? "is-visited" : "",
    options.state.favorite ? "is-favorite" : "",
    options.state.wishlist ? "is-wishlist" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return L.divIcon({
    className: "",
    html: `<span class="${classNames}"><span class="marker-pin"><span class="marker-core">${renderIcon(iconName)}</span>${statusBadges}</span></span>`,
    iconAnchor: [16, 34],
    iconSize: [34, 38],
    popupAnchor: [0, -34],
  });
}
