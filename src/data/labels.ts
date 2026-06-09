import type { Character, SpotArea, SpotType } from "../types/spot";
import type { StatusFilter } from "../utils/filters";

export const areaLabels: Record<SpotArea, string> = {
  numazu_station: "沼津站周边",
  uchiura: "内浦",
  awashima: "淡岛",
  mitsuhama: "三津滨",
  nagayama: "长井崎",
  other: "其他",
};

export const typeLabels: Record<SpotType, string> = {
  anime_scene: "动画场景",
  shop: "商店",
  station: "车站",
  school_related: "学校相关",
  shrine: "神社",
  beach: "海滨",
  viewpoint: "观景点",
  restaurant: "餐饮",
  transport: "交通",
  other: "其他",
};

export const characterLabels: Record<Character, string> = {
  chika: "千歌",
  riko: "梨子",
  kanan: "果南",
  dia: "黛雅",
  you: "曜",
  yoshiko: "善子",
  hanamaru: "花丸",
  mari: "鞠莉",
  ruby: "露比",
  aqours: "Aqours",
  saint_snow: "Saint Snow",
};

export const statusFilterLabels: Record<StatusFilter, string> = {
  all: "全部",
  visited: "已打卡",
  unvisited: "未打卡",
  favorite: "收藏",
  wishlist: "想去",
};
