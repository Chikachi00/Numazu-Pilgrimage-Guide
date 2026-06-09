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

export interface LocalizedText {
  zh: string;
  ja?: string;
  en?: string;
}

export interface Spot {
  id: string;
  name: LocalizedText;
  shortName?: LocalizedText;
  latitude: number;
  longitude: number;
  area: SpotArea;
  type: SpotType;
  characters: Character[];
  description: LocalizedText;
  pilgrimageNote?: LocalizedText;
  accessNote?: LocalizedText;
  photoTip?: LocalizedText;
  address?: LocalizedText;
  recommendedDurationMinutes?: number;
  googleMapsUrl?: string;
  officialUrl?: string;
  tags?: string[];
  priority: 1 | 2 | 3;
}
