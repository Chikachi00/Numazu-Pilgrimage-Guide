import type { PilgrimageRoute } from "../types/route";

export const routes: PilgrimageRoute[] = [
  {
    id: "numazu-city-half-day",
    title: { zh: "沼津市区半日入门" },
    description: { zh: "从沼津站出发，串联商店街、河岸和沼津港，适合第一次到访。" },
    spotIds: ["numazu-station-south", "numazu-nakamise", "numazu-riverside-walk", "numazu-port"],
    estimatedHours: 4,
    difficulty: "easy",
    transport: { zh: "步行 + 巴士或出租车" },
    tips: { zh: "午餐建议安排在沼津港，返程前回到站前补给。" },
  },
  {
    id: "uchiura-classic-day",
    title: { zh: "内浦经典一日" },
    description: { zh: "以内浦海边、三津滨、淡岛方向为核心的标准巡礼路线。" },
    spotIds: [
      "izu-mito-sea-paradise-area",
      "mitsuhama-beach",
      "uchiura-bus-stop-area",
      "awashima-pier-area",
      "awashima-island-view",
    ],
    estimatedHours: 6,
    difficulty: "normal",
    transport: { zh: "沼津站往返内浦方向巴士" },
    tips: { zh: "先查好末班车；夏季注意防晒和补水。" },
  },
  {
    id: "nagaisaki-view-route",
    title: { zh: "长井崎眺望轻巡礼" },
    description: { zh: "围绕长井崎与内浦海景展开，适合喜欢慢节奏拍照的人。" },
    spotIds: ["nagaisaki-school-area", "mitsuhama-beach", "izu-mito-sea-paradise-area"],
    estimatedHours: 3.5,
    difficulty: "normal",
    transport: { zh: "巴士 + 步行" },
    tips: { zh: "长井崎周边尊重学校和居民环境，仅在公共区域停留。" },
  },
];
