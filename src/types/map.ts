export type MarkerMode = "category_icon" | "custom_icon";

export type MarkerCategory =
  | "restaurant"
  | "cafe"
  | "shop"
  | "hotel"
  | "transport"
  | "info"
  | "park"
  | "shrine"
  | "beach"
  | "scenic"
  | "aquarium"
  | "onsen"
  | "museum"
  | "anime"
  | "generic";

export type MarkerIconName =
  | "pin"
  | "dot"
  | "star"
  | "heart"
  | "bookmark"
  | "utensils"
  | "coffee"
  | "bag"
  | "bed"
  | "bus"
  | "train"
  | "info"
  | "tree"
  | "wave"
  | "camera"
  | "mountain"
  | "fish"
  | "onsen"
  | "shrine"
  | "building"
  | "museum";

export type MarkerCategoryOverrides = Partial<Record<MarkerCategory, MarkerIconName>>;
