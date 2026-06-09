export type SpotArea =
  | "numazu_station"
  | "uchiura"
  | "awashima"
  | "mitsuhama"
  | "nagayama"
  | "other";

export type SpotType =
  | "anime_scene"
  | "shop"
  | "station"
  | "school_related"
  | "shrine"
  | "beach"
  | "viewpoint"
  | "restaurant"
  | "transport"
  | "other";

export type Character =
  | "chika"
  | "riko"
  | "kanan"
  | "dia"
  | "you"
  | "yoshiko"
  | "hanamaru"
  | "mari"
  | "ruby"
  | "aqours"
  | "saint_snow";

export type SpotLayer =
  | "pilgrimage_core"
  | "food"
  | "shopping"
  | "hotel"
  | "transport"
  | "scenic"
  | "auxiliary";

export interface LocalizedText {
  zh: string;
  ja?: string;
  en?: string;
}

export interface Spot {
  id: string;
  name: LocalizedText;
  shortName?: LocalizedText;
  originalGoogleMapsName?: string;
  latitude: number;
  longitude: number;
  area: SpotArea;
  type: SpotType;
  spotLayer?: SpotLayer;
  isFeatured?: boolean;
  isHiddenByDefault?: boolean;
  characters: Character[];
  description: LocalizedText;
  pilgrimageNote?: LocalizedText;
  accessNote?: LocalizedText;
  photoTip?: LocalizedText;
  address?: LocalizedText;
  recommendedDurationMinutes?: number;
  googleMapsUrl?: string;
  coordinateStatus?: "verified" | "needs_review";
  coordinateSource?: "google_maps_place_url" | "manual_google_maps_check" | "legacy_unverified";
  mapSearchUrl?: string;
  lastVerifiedAt?: string;
  verificationNote?: string;
  officialUrl?: string;
  tags?: string[];
  priority: 1 | 2 | 3;
}
