import type { PilgrimageRoute } from "../types/route";

export const routes: PilgrimageRoute[] = [
{
    id: "numazu-station-easy-walk",
    title: { zh: "沼津站周边轻松路线", ja: "沼津駅周辺ゆったりルート", en: "Numazu Station Easy Walk" },
    description: {
      zh: "适合第一次到沼津、时间不多的人。从站前开始，顺路走商店街、市区河岸，再把沼津港作为收尾。",
    },
    theme: "numazu_station",
    spotIds: [
      "numazu-tourist-info-area",
      "numazu-nakamise",
      "gamers-numazu-store",
      "love-live-sunshine-and-yohane-the-parhelion-premium-shop",
      "the-bluewater",
      "numazu-deep-sea-aquarium-area",
      "numazu-port-observatory-water-gate",
      "港八十三番地"
    ],
    estimatedHours: 2,
    difficulty: "easy",
    transport: ["walk", "bus", "taxi"],
    startSpotId: "numazu-tourist-info-area",
    endSpotId: "港八十三番地",
    tips: { zh: "如果时间紧，把沼津港作为午餐或傍晚点即可；站前到港口可搭巴士或出租车。" },
  },
{
    id: "uchiura-half-day-classic",
    title: { zh: "内浦半日经典路线", ja: "内浦半日クラシックルート", en: "Uchiura Half-Day Classic" },
    description: {
      zh: "适合第一次认真巡礼的人。以三津、内浦、长井崎和安田屋旅馆周边为核心，感受作品里的海边日常氛围。",
    },
    theme: "uchiura_half_day",
    spotIds: [
      "izu-mito-sea-paradise-area",
      "三之浦综合案内所",
      "安田屋旅馆",
      "松月",
      "oh-mos",
      "辻宗商店",
      "nagaisaki-school-area",
      "maruka-orange-center"
    ],
    estimatedHours: 4,
    difficulty: "normal",
    transport: ["bus", "walk"],
    startSpotId: "izu-mito-sea-paradise-area",
    endSpotId: "maruka-orange-center",
    tips: { zh: "内浦方向巴士班次有限，建议提前确认回程时间；长井崎周边请只在公共区域停留。" },
  },
{
    id: "awashima-mito-seaside",
    title: { zh: "淡岛 / 三津海边路线", ja: "淡島・三津海辺ルート", en: "Awashima / Mito Seaside Route" },
    description: {
      zh: "适合喜欢海边、拍照、慢慢走的人。用较轻松的节奏串联三津滨、淡岛码头和海边眺望点。",
    },
    theme: "awashima_mito",
    spotIds: [
      "izu-mito-sea-paradise-area",
      "awashima-hotel",
      "淡岛神社"
    ],
    estimatedHours: 3.5,
    difficulty: "normal",
    transport: ["bus", "walk", "ferry"],
    startSpotId: "izu-mito-sea-paradise-area",
    endSpotId: "淡岛神社",
    tips: { zh: "如果计划上岛，请先确认船班和营业信息；不上岛也可以把本土侧眺望点作为轻量拍照路线。" },
  },
{
    id: "aqours-first-time-full-day",
    title: { zh: "Aqours 初次巡礼一日路线", ja: "Aqours 初巡礼一日ルート", en: "Aqours First-Time Full-Day Route" },
    description: {
      zh: "适合第一次完整体验沼津巡礼的人。上午走市区，下午转向内浦核心点位，强度较高但体验完整。",
    },
    theme: "first_time",
    spotIds: [
      "numazu-tourist-info-area",
      "numazu-nakamise",
      "gamers-numazu-store",
      "love-live-sunshine-and-yohane-the-parhelion-premium-shop",
      "numazu-deep-sea-aquarium-area",
      "numazu-port-observatory-water-gate",
      "izu-mito-sea-paradise-area",
      "三之浦综合案内所",
      "松月",
      "安田屋旅馆",
      "nagaisaki-school-area",
      "awashima-hotel",
      "淡岛神社"
    ],
    estimatedHours: 7,
    difficulty: "hard",
    transport: ["train", "bus", "walk", "taxi"],
    startSpotId: "numazu-tourist-info-area",
    endSpotId: "淡岛神社",
    tips: { zh: "建议早出发并预留机动时间；如果体力或天气不理想，可把淡岛或长井崎拆到第二天。" },
  }
];
