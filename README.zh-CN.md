# Numazu Pilgrimage Guide / 沼津圣地巡礼导航

中文单独版 README。完整中英双语 README 请见 [README.md](README.md)。

English Version: [README.md#english-version](README.md#english-version)

一个面向沼津巡礼旅行的轻量级交互式地图工具，支持 Google Maps 校对点位、分类图标、路线参考、营业信息和本地旅行记录。

## 快速链接

- [Live Demo](https://numazu-pilgrimage-guide.vercel.app/)
- [GitHub](https://github.com/Chikachi00/Numazu-Pilgrimage-Guide)
- [完整中英双语 README](README.md)
- [English Version](README.md#english-version)

## 快速导航

- [项目简介](#项目简介)
- [核心功能](#核心功能)
- [技术栈](#技术栈)
- [数据来源与准确性策略](#数据来源与准确性策略)
- [本地运行](#本地运行)
- [本地存储](#本地存储)
- [验证](#验证)
- [已知限制](#已知限制)
- [License](#license)

## 项目简介

Numazu Pilgrimage Guide 是一个基于 React + TypeScript + Vite 的静态前端地图应用，用于整理沼津及周边巡礼旅行相关地点。它覆盖巡礼核心点、餐饮、住宿、交通、商店、风景和远端辅助地点，并提供地图浏览、筛选、搜索、路线参考、营业信息、Google Maps 导航和本地旅行记录。

项目正式点位只来自用户人工整理的完整 Google Maps place URL。坐标从 URL 中的 `!3dlat!4dlng` 或 `@lat,lng` 解析，不使用自动 geocoding，也不调用 Google Maps API。

## 核心功能

- 地图浏览：Leaflet / React Leaflet + OpenStreetMap，保留地图 attribution。
- 点位准确性：正式 `spots.ts` 只保存来自 `docs/reference/location.md` 的 verified 地点。
- 分类 marker：餐厅、咖啡、商店、酒店、交通、案内所、公园、神社、海边、景点、水族馆、温泉等类别有不同自制图标。
- 自定义图标：用户可以为不同 marker category 选择图标，设置保存在 localStorage。
- 筛选和搜索：支持推荐巡礼点、全部已校对点、全部点位，以及区域、类型、角色、状态、spotLayer 筛选。
- 点位分层：`pilgrimage_core`、`food`、`shopping`、`hotel`、`transport`、`scenic`、`auxiliary`。
- 路线参考：人工整理路线，只引用当前存在的 verified spotId。
- 营业信息：支持平日时间、土日祝时间、定休日、特殊说明、价格和备注。
- 本地状态：visited / wishlist / favorite。
- 用户备注：每个地点可保存本地备注、计划或打卡感想。
- 响应式 UI：桌面端浮动详情卡，移动端 bottom sheet，筛选和列表不常驻遮挡地图。

## 技术栈

- React
- TypeScript
- Vite
- Leaflet
- React Leaflet
- OpenStreetMap tile layer
- Browser localStorage
- Responsive CSS
- Vercel

项目不需要 Google Maps API key。Google Maps 仅作为外部导航链接和用户提供 place URL 的坐标来源。

## 数据来源与准确性策略

- `docs/reference/location.md` 是正式点位与坐标的唯一可信来源。
- 每个正式点位必须来自完整 Google Maps place URL。
- 坐标解析优先使用 `!3dlat!4dlng`，其次使用 `@lat,lng`。
- Google Maps search URL 不能作为 verified 坐标。
- 未经 Google Maps place URL 校对的旧点位不会进入正式地图。
- 当前正式点位全部为 `verified`，正式 `needs_review` 数量为 0。
- `docs/reference/numazu.html` 和 `docs/reference/沼津店舗.pdf` 只作为营业时间、定休日、价格和备注参考，不作为坐标来源。
- 营业时间可能变化，实际出行前请以 Google Maps、店铺官网或现场公告为准。
- 本项目是 fan-made / personal project，不代表官方信息。
- 本项目不使用官方图片、角色图、动画截图或 Aqours 官方 logo。

## 本地运行

```bash
npm install
npm run dev
```

生产构建：

```bash
npm run build
```

当前 `package.json` 提供 `dev`、`build`、`preview` 脚本；没有单独的 `typecheck` 脚本，TypeScript 检查包含在 `npm run build` 中。

## 本地存储

主要 localStorage keys：

- `numazu-pilgrimage-guide:spot-states`：visited / favorite / wishlist 状态。
- `numazu-pilgrimage-guide:language`：语言偏好。
- `numazu-pilgrimage-guide:filters`：筛选状态。
- `numazu-marker-mode`：marker 模式。
- `numazu-marker-category-overrides`：不同 marker category 的自定义图标。
- `numazu-marker-style-mode`：旧版本 marker 样式 key，仅为兼容保留。
- `numazu-spot-note:<spotId>`：每个点位的用户本地备注。

所有数据只保存在当前浏览器，不上传云端。

## 验证

```bash
npm install
npm run build
```

建议手动检查：

- 地图首页是否正常显示。
- 推荐巡礼点 / 全部已校对点 / 全部点位切换是否正常。
- 搜索中文名、日文名、original Google Maps name、定休日和营业时间。
- marker 分类图标和自定义图标是否正常。
- 点位详情营业信息是否正常。
- 用户备注是否能保存。
- 打卡 / 想去 / 收藏是否刷新后保留。
- Google Maps 导航是否可打开。
- 路线页是否正常。
- 移动端 bottom sheet 是否正常。

## 已知限制

- 不支持登录和云同步。
- 用户备注、打卡、想去、收藏只保存在当前浏览器 localStorage。
- 不支持自动 geocoding。
- 不使用 Google Maps API。
- 新增正式点位需要先提供完整 Google Maps place URL。
- 营业时间可能变化，出行前需要核对。
- 不保证所有地点都有营业信息。
- 不使用官方图片或角色素材。
- Vite 构建可能出现 chunk size warning，这不是 build failure。
- OpenStreetMap 底图展示效果与 Google Maps 不完全一致。

## License

当前尚未添加明确的开源许可证。本项目是非官方 fan-made / personal project。
