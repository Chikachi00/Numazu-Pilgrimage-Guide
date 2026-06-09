export interface NumazuReferenceLink {
  legacyId: number;
  name: string;
  area: string;
  type: string;
  mapUrl: string;
  parsedLatitude?: number;
  parsedLongitude?: number;
  parsedSource?: "at_lat_lng" | "place_3d_4d";
  isCoordinateExtractable: boolean;
}

export const numazuReferenceLinks: NumazuReferenceLink[] = [
  {
    "legacyId": 1,
    "name": "ゆうだい温泉",
    "area": "三島",
    "type": "温泉",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=ゆうだい温泉+三島",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 2,
    "name": "門池公園",
    "area": "愛鷹行き",
    "type": "公園",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=門池公園+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 3,
    "name": "ココス 沼津IC店",
    "area": "愛鷹行き",
    "type": "餐馆",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=ココス+沼津IC店",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 4,
    "name": "万葉の湯",
    "area": "愛鷹行き",
    "type": "温泉",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=万葉の湯+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 5,
    "name": "アスルクラロ沼津",
    "area": "愛鷹行き",
    "type": "其他",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=アスルクラロ沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 6,
    "name": "愛鷹広域公園",
    "area": "愛鷹行き",
    "type": "公園",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=愛鷹広域公園+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 7,
    "name": "INN THE PARK",
    "area": "愛鷹行き",
    "type": "宿泊",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=INN+THE+PARK+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 8,
    "name": "八畳石",
    "area": "西北",
    "type": "参观",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=八畳石+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 9,
    "name": "NEOPASA駿河湾沼津（下り）",
    "area": "西北",
    "type": "商场",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=NEOPASA駿河湾沼津（下り）",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 10,
    "name": "NEOPASA駿河湾沼津（上り）",
    "area": "西北",
    "type": "商场",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=NEOPASA駿河湾沼津（上り）",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 11,
    "name": "沼津市明治史料館",
    "area": "西北",
    "type": "参观",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=沼津市明治史料館",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 12,
    "name": "明治茶館",
    "area": "西北",
    "type": "Café",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=明治茶館+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 13,
    "name": "ららぽーと沼津",
    "area": "西北",
    "type": "商场",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=ららぽーと沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 14,
    "name": "菓南",
    "area": "西北",
    "type": "甜点",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=菓南+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 15,
    "name": "天然温泉ざぶ～ん",
    "area": "西北",
    "type": "温泉",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=天然温泉ざぶ～ん+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 16,
    "name": "白隠さくら",
    "area": "西北",
    "type": "其他",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=白隠さくら+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 17,
    "name": "浮島ひまわりランド",
    "area": "西北",
    "type": "公園",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=浮島ひまわりランド+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 18,
    "name": "静铁商旅Prezio 沼津",
    "area": "北口",
    "type": "宿泊",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=静鉄ホテルプレジオ沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 19,
    "name": "プラサヴェルデ",
    "area": "北口",
    "type": "参观",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=プラサヴェルデ+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 20,
    "name": "BiVi沼津",
    "area": "北口",
    "type": "商场",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=BiVi沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 21,
    "name": "プレミアムショップ",
    "area": "北口",
    "type": "商店",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=ラブライブ+プレミアムショップ+BiVi沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 22,
    "name": "ザ・サードプラネット",
    "area": "北口",
    "type": "商店",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=ザ・サードプラネット+BiVi沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 23,
    "name": "シネマサンシャイン沼津",
    "area": "北口",
    "type": "其他",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=シネマサンシャイン沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 24,
    "name": "cocochee hotel",
    "area": "北口",
    "type": "宿泊",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=cocochee hotel",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 25,
    "name": "リコー通り",
    "area": "北口",
    "type": "参观",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=リコー通り+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 26,
    "name": "高沢公園",
    "area": "北口",
    "type": "公園",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=高沢公園+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 27,
    "name": "桃中軒",
    "area": "沼津駅",
    "type": "餐馆",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=桃中軒+沼津駅",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 28,
    "name": "ベルマートキヨスク沼津店",
    "area": "沼津駅",
    "type": "杂货",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=ベルマートキヨスク沼津店",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 29,
    "name": "沼津観光案内所",
    "area": "沼津駅",
    "type": "案内所",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=沼津観光案内所",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 30,
    "name": "駅前SLモニュメント",
    "area": "沼津駅",
    "type": "参观",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=駅前SLモニュメント+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 31,
    "name": "伊豆箱根バス 案内所",
    "area": "沼津駅",
    "type": "案内所",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=伊豆箱根バス+沼津駅前案内所",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 32,
    "name": "東海バス 案内所",
    "area": "沼津駅",
    "type": "案内所",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=東海バス+沼津駅前案内所",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 33,
    "name": "富士急シティバス 窓口",
    "area": "沼津駅",
    "type": "案内所",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=富士急シティバス+沼津駅前",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 34,
    "name": "Hotel Trend Numazu",
    "area": "南口",
    "type": "宿泊",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=ホテルトレンド沼津駅前",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 35,
    "name": "Numazu Grand Hotel",
    "area": "南口",
    "type": "宿泊",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=沼津グランドホテル",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 36,
    "name": "沼津ラクーン",
    "area": "南口",
    "type": "商场",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=沼津ラクーン",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 37,
    "name": "アニメイト",
    "area": "南口",
    "type": "商店",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=アニメイト+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 38,
    "name": "ゲーマーズ",
    "area": "南口",
    "type": "商店",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=ゲーマーズ+沼津店",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 39,
    "name": "中央亭",
    "area": "南口",
    "type": "餐馆",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=中央亭+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 118,
    "name": "スパイスマジック沼津店",
    "area": "南口",
    "type": "餐馆",
    "mapUrl": "https://www.google.com/maps/place/Spice+magic/@35.0990301,138.8585892,18.5z/data=!3m1!5s0x601985606e65e849:0xfc1dfce1eb198a97!4m6!3m5!1s0x601985c52bc9000f:0x5e0fc4f60b69a690!8m2!3d35.0990863!4d138.859128!16s%2Fg%2F11ldwn_z3r?entry=ttu",
    "parsedLatitude": 35.0990863,
    "parsedLongitude": 138.859128,
    "parsedSource": "place_3d_4d",
    "isCoordinateExtractable": true
  },
  {
    "legacyId": 119,
    "name": "ジョリーアンジュ / Jolie Ange",
    "area": "北口",
    "type": "餐馆",
    "mapUrl": "https://www.google.com/maps/place/Jolie+Ange/@35.105009,138.8590098,18z/data=!4m6!3m5!1s0x60198597fbfed995:0xde30cd53d0b639a8!8m2!3d35.1050698!4d138.8593512!16s%2Fg%2F11hdc34l2c?entry=ttu&g_ep=EgoyMDI2MDUwMi4wIKXMDSoASAFQAw%3D%3D",
    "parsedLatitude": 35.1050698,
    "parsedLongitude": 138.8593512,
    "parsedSource": "place_3d_4d",
    "isCoordinateExtractable": true
  },
  {
    "legacyId": 120,
    "name": "Daiwa Roynet Hotel Numazu",
    "area": "北口",
    "type": "宿泊",
    "mapUrl": "https://www.google.com/maps/place/Daiwa+Roynet+Hotel+Numazu/@35.1052768,138.8607247,16.75z/data=!4m10!3m9!1s0x6019855c291492e1:0x1f002a0701aa08b9!5m3!1s2026-07-13!4m1!1i2!8m2!3d35.1041515!4d138.86158!16s%2Fg%2F11b5pj_gps?entry=ttu&g_ep=EgoyMDI2MDUwMi4wIKXMDSoASAFQAw%3D%3D",
    "parsedLatitude": 35.1041515,
    "parsedLongitude": 138.86158,
    "parsedSource": "place_3d_4d",
    "isCoordinateExtractable": true
  },
  {
    "legacyId": 121,
    "name": "Kuretakein Puremiamu Numazukitaguchi Ekimae",
    "area": "北口",
    "type": "宿泊",
    "mapUrl": "https://www.google.com/maps/place/Kuretakein+Puremiamu+Numazukitaguchi+Ekimae/@35.1041314,138.8587961,19.75z/data=!4m10!3m9!1s0x601985978d2191db:0xcfb40ca70b917ec8!5m3!1s2026-07-13!4m1!1i2!8m2!3d35.1040561!4d138.8592582!16s%2Fg%2F11p56h76tm?entry=ttu&g_ep=EgoyMDI2MDUwMi4wIKXMDSoASAFQAw%3D%3D",
    "parsedLatitude": 35.1040561,
    "parsedLongitude": 138.8592582,
    "parsedSource": "place_3d_4d",
    "isCoordinateExtractable": true
  },
  {
    "legacyId": 40,
    "name": "日枝神社",
    "area": "東部",
    "type": "神社",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=日枝神社+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 41,
    "name": "creperie cafe Ferme",
    "area": "東部",
    "type": "Café",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=creperie+cafe+Ferme+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 42,
    "name": "弥次喜多 平町店",
    "area": "東部",
    "type": "餐馆",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=弥次喜多+平町店+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 43,
    "name": "ココス 大岡店",
    "area": "東部",
    "type": "餐馆",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=ココス+大岡店+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 44,
    "name": "柿田川公園",
    "area": "清水町",
    "type": "公園",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=柿田川公園+清水町",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 45,
    "name": "やば珈琲店",
    "area": "仲見世商店街",
    "type": "Café",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=やば珈琲店+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 46,
    "name": "甘味処 どんぐり",
    "area": "仲見世商店街",
    "type": "甜点",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=甘味処+どんぐり+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 47,
    "name": "マルサン書店（旧址）",
    "area": "仲見世商店街",
    "type": "其他",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=マルサン書店+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 48,
    "name": "華味",
    "area": "仲見世商店街",
    "type": "餐馆",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=華味+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 49,
    "name": "麻雀Café☆JanJan",
    "area": "仲見世商店街",
    "type": "Café",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=麻雀Café☆JanJan+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 50,
    "name": "浜忠 上土町店",
    "area": "あげつち商店街",
    "type": "餐馆",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=浜忠+上土町店+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 51,
    "name": "キングノーブル",
    "area": "あげつち商店街",
    "type": "商店",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=キングノーブル+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 52,
    "name": "マルサンホビー",
    "area": "あげつち商店街",
    "type": "商店",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=マルサンホビー+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 53,
    "name": "グランマ 本店",
    "area": "あげつち商店街",
    "type": "甜点",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=グランマ+本店+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 54,
    "name": "Numazu River Side Hotel",
    "area": "あげつち商店街",
    "type": "宿泊",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=沼津リバーサイドホテル",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 55,
    "name": "つじ写真館",
    "area": "あげつち商店街",
    "type": "商店",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=つじ写真館+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 56,
    "name": "布澤呉服店",
    "area": "あげつち商店街",
    "type": "商场",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=布澤呉服店+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 57,
    "name": "宝飾・時計 市川",
    "area": "あげつち商店街",
    "type": "商场",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=宝飾・時計+市川+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 58,
    "name": "だいこくや（仮店舗）",
    "area": "沼津",
    "type": "杂货",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=だいこくや+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 59,
    "name": "天春",
    "area": "沼津",
    "type": "餐馆",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=天春+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 60,
    "name": "THE BLUE WATER",
    "area": "沼津",
    "type": "甜点",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=THE+BLUE+WATER+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 61,
    "name": "冨久家 沼津ケーキ店",
    "area": "沼津",
    "type": "甜点",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=冨久家+沼津ケーキ店",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 62,
    "name": "欧蘭陀館 下河原店",
    "area": "沼津",
    "type": "餐馆",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=欧蘭陀館+下河原店+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 63,
    "name": "千本浜海岸・千本松原",
    "area": "沼津",
    "type": "海辺",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=千本浜海岸+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 64,
    "name": "千本浜公園",
    "area": "沼津",
    "type": "公園",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=千本浜公園+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 65,
    "name": "中央公園",
    "area": "沼津",
    "type": "公園",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=中央公園+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 66,
    "name": "桃屋",
    "area": "沼津",
    "type": "餐馆",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=桃屋+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 67,
    "name": "ドールハウスKIMURA",
    "area": "沼津",
    "type": "商店",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=ドールハウスKIMURA+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 68,
    "name": "松浦酒店",
    "area": "沼津",
    "type": "商店",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=松浦酒店+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 69,
    "name": "深海水族館",
    "area": "沼津港",
    "type": "参观",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=沼津港深海水族館",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 70,
    "name": "沼津バーガー",
    "area": "沼津港",
    "type": "餐馆",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=沼津バーガー",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 71,
    "name": "しーらかんすCafé",
    "area": "沼津港",
    "type": "Café",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=しーらかんすCafé+沼津港",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 72,
    "name": "魚河岸丸天",
    "area": "沼津港",
    "type": "餐馆",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=魚河岸丸天+沼津港",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 73,
    "name": "沼津深海プリン工房",
    "area": "沼津港",
    "type": "甜点",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=沼津深海プリン工房",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 74,
    "name": "沼津みなと新鮮館",
    "area": "沼津港",
    "type": "商场",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=沼津みなと新鮮館",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 75,
    "name": "港口公園",
    "area": "沼津港",
    "type": "公園",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=港口公園+沼津港",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 76,
    "name": "沼津魚市場INO",
    "area": "沼津港",
    "type": "商场",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=沼津魚市場INO",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 77,
    "name": "びゅうお",
    "area": "沼津港",
    "type": "参观",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=びゅうお+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 78,
    "name": "香貫山香陵台",
    "area": "狮香(内陆)",
    "type": "公園",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=香貫山香陵台+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 79,
    "name": "ＪＡふじ伊豆 本店",
    "area": "狮香(内陆)",
    "type": "杂货",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=ＪＡふじ伊豆+本店+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 80,
    "name": "JET KITCHEN",
    "area": "狮香(内陆)",
    "type": "餐馆",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=JET+KITCHEN+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 81,
    "name": "ジャンボエンチョー沼津店",
    "area": "狮香(内陆)",
    "type": "商店",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=ジャンボエンチョー沼津店",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 82,
    "name": "CBカレーキッチン",
    "area": "狮香(内陆)",
    "type": "餐馆",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=CBカレーキッチン+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 83,
    "name": "印度屋キッチン",
    "area": "狮香(内陆)",
    "type": "餐馆",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=印度屋キッチン+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 84,
    "name": "芹沢光治良記念館",
    "area": "狮香(沿海)",
    "type": "参观",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=芹沢光治良記念館+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 85,
    "name": "沼津市文化財収蔵庫",
    "area": "狮香(沿海)",
    "type": "参观",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=沼津市文化財収蔵庫",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 86,
    "name": "牛臥山公園",
    "area": "狮香(沿海)",
    "type": "公園",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=牛臥山公園+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 87,
    "name": "雅心苑 リヴァージュ",
    "area": "狮香(沿海)",
    "type": "甜点",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=雅心苑+リヴァージュ+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 88,
    "name": "沼津御用邸記念公園",
    "area": "狮香(沿海)",
    "type": "公園",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=沼津御用邸記念公園",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 89,
    "name": "沼津市歴史民俗資料館",
    "area": "狮香(沿海)",
    "type": "参观",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=沼津市歴史民俗資料館",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 90,
    "name": "島郷海岸",
    "area": "狮香(沿海)",
    "type": "海辺",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=島郷海岸+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 91,
    "name": "沼津市文化財センター",
    "area": "狮香(沿海)",
    "type": "参观",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=沼津市文化財センター",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 92,
    "name": "グランマ シーサイド店",
    "area": "狮香(沿海)",
    "type": "甜点",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=グランマ+シーサイド店+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 93,
    "name": "翠泉閣",
    "area": "香貫",
    "type": "温泉",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=翠泉閣+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 94,
    "name": "いけすや",
    "area": "内浦",
    "type": "餐馆",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=いけすや+内浦+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 95,
    "name": "辻宗商店",
    "area": "内浦",
    "type": "杂货",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=辻宗商店+内浦+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 96,
    "name": "おさかな食堂やまや",
    "area": "内浦",
    "type": "餐馆",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=おさかな食堂やまや+内浦+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 97,
    "name": "とさわや",
    "area": "内浦",
    "type": "餐馆",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=とさわや+内浦+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 98,
    "name": "松月",
    "area": "内浦",
    "type": "甜点",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=松月+内浦+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 99,
    "name": "千鳥海館",
    "area": "内浦",
    "type": "参观",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=千鳥海館+内浦+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 100,
    "name": "浜の家",
    "area": "内浦",
    "type": "宿泊",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=浜の家+内浦+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 101,
    "name": "安田屋旅馆",
    "area": "内浦",
    "type": "宿泊",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=安田屋旅館+内浦+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 102,
    "name": "松涛館",
    "area": "内浦",
    "type": "宿泊",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=松涛館+内浦+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 103,
    "name": "伊豆三津水族館",
    "area": "内浦",
    "type": "参观",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=伊豆三津水族館",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 104,
    "name": "てんてん",
    "area": "内浦",
    "type": "餐馆",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=てんてん+内浦+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 105,
    "name": "三の浦総合案内所",
    "area": "内浦",
    "type": "案内所",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=三の浦総合案内所+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 106,
    "name": "OH!MOS",
    "area": "内浦",
    "type": "杂货",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=OH!MOS+内浦+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 107,
    "name": "マルカオレンヂセンター",
    "area": "内浦",
    "type": "杂货",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=マルカオレンヂセンター+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 108,
    "name": "海のステージ",
    "area": "内浦",
    "type": "餐馆",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=海のステージ+内浦+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 109,
    "name": "らららサンビーチ",
    "area": "西浦",
    "type": "海辺",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=らららサンビーチ+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 110,
    "name": "駿陽荘 やま弥",
    "area": "西浦",
    "type": "餐馆",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=駿陽荘+やま弥+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 111,
    "name": "Awashima Hotel（淡岛酒店）",
    "area": "淡岛",
    "type": "宿泊",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=淡島ホテル+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 112,
    "name": "あわしまマリンパーク",
    "area": "淡岛",
    "type": "参观",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=あわしまマリンパーク+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 113,
    "name": "淡岛水族馆(11~2月)",
    "area": "淡岛",
    "type": "参观",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=淡島水族館+沼津",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 114,
    "name": "韮山反射炉",
    "area": "伊豆長岡",
    "type": "参观",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=韮山反射炉",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 115,
    "name": "ニュー八景園",
    "area": "伊豆長岡",
    "type": "温泉",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=ニュー八景園+伊豆長岡",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 116,
    "name": "びっくりドンキー",
    "area": "秋葉原",
    "type": "餐馆",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=びっくりドンキー+秋葉原",
    "isCoordinateExtractable": false
  },
  {
    "legacyId": 117,
    "name": "ときわや",
    "area": "户田",
    "type": "餐馆",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=ときわや+戸田+沼津",
    "isCoordinateExtractable": false
  }
];
