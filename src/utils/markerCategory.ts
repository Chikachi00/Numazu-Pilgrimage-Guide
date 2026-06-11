import type { MarkerCategory } from "../types/map";
import type { Spot } from "../types/spot";

export const markerCategoryLabels: Record<MarkerCategory, string> = {
  restaurant: "餐厅",
  cafe: "咖啡 / 甜点",
  shop: "商店",
  hotel: "酒店",
  transport: "交通",
  info: "案内所",
  park: "公园",
  shrine: "神社 / 寺",
  beach: "海边",
  scenic: "景点",
  aquarium: "水族馆",
  onsen: "温泉",
  museum: "博物馆",
  anime: "作品相关",
  generic: "其他",
};

const keywordCategoryRules: Array<[MarkerCategory, RegExp]> = [
  ["anime", /love live|yohane|premium shop|gamers|animate|ゲーマーズ|アニメイト|プレミアムショップ/i],
  ["cafe", /cafe|coffee|珈琲|コーヒー|カフェ|ケーキ|プリン|grandma|blue\s*water|甜点|咖啡/i],
  ["restaurant", /restaurant|ramen|burger|sushi|curry|食堂|料理|拉面|寿司|餐|華味|いけすや|弥次喜多|魚|丸天|光徳丸/i],
  ["shop", /shop|store|mall|liquor|photography|商店|商场|酒屋|写真館|ららぽーと|bivi/i],
  ["hotel", /hotel|inn|旅館|ホテル|酒店|旅馆/i],
  ["info", /観光案内所|総合案内所|案内所|information|游客中心|案内/i],
  ["transport", /駅|station|bus|バス|ferry|港|码头|交通/i],
  ["park", /park|公園|公园/i],
  ["shrine", /shrine|temple|神社|寺|鳥居/i],
  ["aquarium", /aquarium|sea paradise|marine park|水族館|シーパラダイス|マリンパーク/i],
  ["onsen", /onsen|温泉|湯/i],
  ["museum", /museum|資料館|記念館|纪念馆|資料/i],
  ["scenic", /展望|water gate|びゅうお|岬|lighthouse|灯台|煌めき|出逢い|camera|view/i],
  ["beach", /beach|海水浴場|海岸|海边|浜|湾|cape/i],
];

export const markerCategoryOrder: MarkerCategory[] = [
  "restaurant",
  "cafe",
  "shop",
  "hotel",
  "transport",
  "info",
  "park",
  "shrine",
  "beach",
  "scenic",
  "aquarium",
  "onsen",
  "museum",
  "anime",
  "generic",
];

export function getMarkerCategory(spot: Spot): MarkerCategory {
  const nameText = [spot.name.zh, spot.name.ja, spot.name.en, spot.originalGoogleMapsName, ...(spot.tags ?? [])]
    .filter(Boolean)
    .join(" ");

  for (const [category, pattern] of keywordCategoryRules) {
    if (pattern.test(nameText)) {
      return category;
    }
  }

  if (spot.type === "restaurant") return "restaurant";
  if (spot.type === "shop") return "shop";
  if (spot.type === "station" || spot.type === "transport") return "transport";
  if (spot.type === "shrine") return "shrine";
  if (spot.type === "beach") return "beach";
  if (spot.type === "viewpoint") return "scenic";
  if (spot.type === "anime_scene" || spot.type === "school_related") return "anime";

  if (spot.spotLayer === "food") return "restaurant";
  if (spot.spotLayer === "shopping") return "shop";
  if (spot.spotLayer === "hotel") return "hotel";
  if (spot.spotLayer === "transport") return "transport";
  if (spot.spotLayer === "scenic") return "scenic";
  if (spot.spotLayer === "pilgrimage_core") return "anime";

  return "generic";
}
