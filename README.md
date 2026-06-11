# Numazu Pilgrimage Guide

A lightweight interactive Numazu pilgrimage map with verified Google Maps locations, category-based markers, route references, business-hour notes, and local travel planning tools.

[中文](#中文版) | [English](#english-version)

[Live Demo](https://numazu-pilgrimage-guide.vercel.app/) · [GitHub](https://github.com/Chikachi00/Numazu-Pilgrimage-Guide) · [Data Accuracy](#数据来源与准确性策略) · [Local Setup](#本地运行)

---

## 中文版

一个面向沼津巡礼旅行的轻量级交互式地图工具，支持 Google Maps 校对点位、分类图标、路线参考、营业信息和本地旅行记录。

### 快速链接

- [Live demo](https://numazu-pilgrimage-guide.vercel.app/)
- [GitHub](https://github.com/Chikachi00/Numazu-Pilgrimage-Guide)
- [English Version](#english-version)
- [数据准确性与点位来源](#数据来源与准确性策略)
- [本地运行](#本地运行)
- [已知限制](#已知限制)

### 快速导航

- [项目简介](#项目简介)
- [核心功能](#核心功能)
- [技术栈](#技术栈)
- [架构和数据模型亮点](#架构和数据模型亮点)
- [数据来源与准确性策略](#数据来源与准确性策略)
- [本地运行](#本地运行)
- [本地存储](#本地存储)
- [验证](#验证)
- [已知限制](#已知限制)

<a id="项目简介"></a>

### 项目简介

Numazu Pilgrimage Guide / 沼津圣地巡礼导航 是一个面向沼津巡礼旅行的轻量级前端地图应用。它用于整理沼津及周边的巡礼点、餐饮、住宿、交通、风景、商店等地点，并把这些地点组织成可筛选、可搜索、可导航、可记录的地图体验。

项目的正式点位只来自用户人工整理的完整 Google Maps place URL。坐标通过 URL 中的 `!3dlat!4dlng` 或 `@lat,lng` 字符串解析，不使用自动 geocoding，也不调用 Google Maps API。这样做的目标是避免地图导览项目里最糟糕的问题：marker 被放到错误位置。

这个项目同时展示前端数据建模、地图交互、静态数据校对、localStorage 状态管理和旅行工具设计能力。它是 fan-made / personal project，不代表官方信息。

<a id="核心功能"></a>

### 核心功能

#### 地图与点位浏览

- 使用 Leaflet / React Leaflet 和 OpenStreetMap tile layer。
- 地图优先布局，默认视野优先展示地图本身。
- 筛选 drawer、点位列表 drawer、详情浮层都可以打开和关闭。
- 桌面端使用右侧浮动详情卡，移动端使用 bottom sheet。
- 每个正式点位都提供 Google Maps 外部导航链接。

#### 点位数据与坐标准确性

- `docs/reference/location.md` 是正式点位与坐标的唯一可信来源。
- 每个正式点位必须来自完整 Google Maps place URL。
- 坐标解析优先使用 `!3dlat!4dlng`，其次使用 `@lat,lng`。
- 不使用自动 geocoding。
- 不使用 Google Maps API。
- 不把 Google Maps search URL 当作 verified 坐标。
- 当前正式点位全部为 `verified`，正式 `needs_review` 数量为 0。
- 未出现在 `location.md` 中的旧点位不会进入正式地图。

#### 分类图标与自定义 marker

- Marker 按地点类别显示：餐厅、咖啡、商店、酒店、交通、案内所、公园、神社、海边、景点、水族馆、温泉、博物馆、作品相关和其他。
- 默认 `category_icon` 模式类似地图应用的类别图标逻辑，不只是换颜色。
- 用户可以切换到 `custom_icon` 模式，为不同类别选择自定义图标。
- Marker 设置保存在 localStorage。
- 图标为自制 CSS / inline SVG，不使用官方素材、角色图或 Aqours 官方 logo。

#### 筛选、搜索和点位分层

- 支持推荐巡礼点、全部已校对点、全部点位三种显示模式。
- 支持区域、类型、角色、状态和点位层级筛选。
- `spotLayer` 包含 `pilgrimage_core`、`food`、`shopping`、`hotel`、`transport`、`scenic`、`auxiliary`。
- 搜索覆盖中文名、日文名、original Google Maps name、区域、类型、点位层级、marker 分类、标签、营业时间、定休日、价格备注和用户本地备注。

#### 路线参考

- 提供人工整理的路线参考，用于快速理解沼津站、市区、内浦、三津、淡岛等区域的旅行串联方式。
- 路线只引用当前存在的 verified spotId。
- 普通餐饮、酒店、远端辅助点不会自动进入核心巡礼路线。

#### 营业时间与定休日

- 营业信息来自用户整理的 `docs/reference/numazu.html` 和 `docs/reference/沼津店舗.pdf`。
- 支持显示平日时间、土日祝时间、定休日、特殊说明、价格和备注。
- 营业信息在点位详情页中优先展示。
- 营业时间可能变化，实际出行前请以 Google Maps、店铺官网或现场公告为准。

#### 打卡、想去、收藏和用户备注

- 支持 visited / wishlist / favorite 本地状态。
- 用户可以为每个地点写本地备注、计划、简介或打卡感想。
- 所有状态和备注只保存在当前浏览器 localStorage。
- 不需要登录，不上传云端，不做云同步。

#### 响应式地图界面

- 桌面端使用地图优先布局和右侧详情浮层。
- 移动端详情页以 bottom sheet 展示。
- 筛选和列表不常驻挤压地图视野。
- Marker、drawer、详情卡和地图缩放控件都有独立层级控制。

<a id="技术栈"></a>

### 技术栈

- React
- TypeScript
- Vite
- Leaflet
- React Leaflet
- OpenStreetMap tile layer
- Browser localStorage
- Responsive CSS
- Vercel deployment

项目不需要 Google Maps API key。地图底图使用 OpenStreetMap，并保留 attribution。Google Maps 只作为外部导航链接，以及用户人工提供 place URL 的坐标来源。

<a id="架构和数据模型亮点"></a>

### 架构和数据模型亮点

- `Spot` 数据模型保存地点名称、坐标、区域、类型、分层、营业信息、Google Maps URL、校对来源和 UI 展示状态。
- `verifiedGoogleMapLinks` 是从 `docs/reference/location.md` 派生的坐标参考数据。
- `businessHoursReference` 是从 `docs/reference/numazu.html` / PDF 参考文件整理出的营业信息库。
- 正式 `src/data/spots.ts` 只保存 verified 地点。
- `location.md` 负责“哪些点存在 + 坐标是否可信”。
- `numazu.html` / PDF 负责“营业时间、定休日、价格和备注参考”。
- `markerCategory` 从 `type`、`spotLayer`、名称和标签派生，只用于 marker 展示，不改变底层点位分层。
- localStorage 保存打卡、想去、收藏、筛选状态、marker 设置和用户备注。
- 路线数据只引用现有 verified spotId。
- 删除或改名的旧 spotId 不会导致 UI 崩溃；找不到的旧 localStorage 状态会被忽略。

<a id="数据来源与准确性策略"></a>

### 数据来源与准确性策略

- 项目不自动抓取 Google Maps 坐标。
- 项目不使用 Google Maps API。
- 正式点位来自用户人工整理的 Google Maps place URL。
- 坐标只从 URL 中的 `!3dlat!4dlng` 或 `@lat,lng` 解析。
- 未经 Google Maps place URL 校对的旧点位不会进入正式地图。
- Google Maps search URL 只可作为人工校对入口，不能作为 verified 坐标。
- 营业时间来自用户整理的参考文件，可能过期。
- 实际出行前应以 Google Maps、店铺官网或现场公告为准。
- 本项目是 fan-made / personal project，不代表官方信息。
- 本项目不使用官方图片、角色图、动画截图或 Aqours 官方 logo。

<a id="本地运行"></a>

### 本地运行

```bash
npm install
npm run dev
```

生产构建：

```bash
npm run build
```

当前 `package.json` 提供 `dev`、`build`、`preview` 脚本；没有单独的 `typecheck` 脚本，TypeScript 检查包含在 `npm run build` 中。

<a id="本地存储"></a>

### 本地存储

项目使用浏览器 localStorage，不需要后端或登录。主要 key 包括：

- `numazu-pilgrimage-guide:spot-states`：visited / favorite / wishlist 状态。
- `numazu-pilgrimage-guide:language`：语言偏好。
- `numazu-pilgrimage-guide:filters`：筛选状态。
- `numazu-marker-mode`：marker 模式，当前支持 `category_icon` 和 `custom_icon`。
- `numazu-marker-category-overrides`：每个 marker category 的自定义图标。
- `numazu-marker-style-mode`：旧版本 marker 样式 key，仅为兼容保留，不再用于新 UI。
- `numazu-spot-note:<spotId>`：每个点位的用户本地备注。

<a id="验证"></a>

### 验证

```bash
npm install
npm run build
```

手动验证建议：

- 打开地图首页。
- 切换推荐巡礼点 / 全部已校对点 / 全部点位。
- 打开筛选 drawer 和点位列表 drawer。
- 搜索中文名、日文名、original Google Maps name。
- 搜索定休日、营业时间或价格备注。
- 切换 marker 分类图标 / 自定义图标。
- 点击 marker 打开详情。
- 检查营业信息显示。
- 编辑并保存用户备注。
- 测试打卡 / 想去 / 收藏。
- 点击 Google Maps 导航。
- 打开路线页。
- 在移动端宽度检查 bottom sheet。

<a id="已知限制"></a>

### 已知限制

- 不支持用户登录和云同步。
- 用户备注、打卡、想去、收藏只保存在当前浏览器 localStorage。
- 不支持自动 geocoding。
- 不使用 Google Maps API。
- 新增正式点位需要先提供完整 Google Maps place URL。
- 营业时间可能变化，需出行前核对。
- 不保证所有地点都有营业信息。
- 不使用官方图片或角色素材。
- Vite 生产构建可能出现 chunk size warning，这不是 build failure。
- OpenStreetMap 底图展示效果与 Google Maps 不完全一致。

### 截图 / Demo

当前仓库不包含官方图片、角色图或动画截图。请通过 [Live Demo](https://numazu-pilgrimage-guide.vercel.app/) 查看实际界面。

### License

No explicit open-source license has been added yet. This is an unofficial fan-made / personal project.

---

## English Version

A lightweight interactive Numazu pilgrimage map with verified Google Maps locations, category-based markers, route references, business-hour notes, and local travel planning tools.

### Quick Links

- [Live demo](https://numazu-pilgrimage-guide.vercel.app/)
- [GitHub](https://github.com/Chikachi00/Numazu-Pilgrimage-Guide)
- [中文版本](#中文版)
- [Data Sources and Accuracy Policy](#data-sources-and-accuracy-policy)
- [Local Setup](#local-setup)
- [Known Limitations](#known-limitations)

### Quick Navigation

- [Overview](#overview)
- [Core Features](#core-features)
- [Tech Stack](#tech-stack)
- [Architecture and Data Model Highlights](#architecture-and-data-model-highlights)
- [Data Sources and Accuracy Policy](#data-sources-and-accuracy-policy)
- [Local Setup](#local-setup)
- [Local Storage](#local-storage)
- [Verification](#verification)
- [Known Limitations](#known-limitations)

### Overview

Numazu Pilgrimage Guide is a lightweight frontend map application for planning Numazu pilgrimage trips. It organizes verified places around Numazu and nearby areas, including pilgrimage-related landmarks, restaurants, lodging, transport nodes, scenic spots, and shops.

The formal spot dataset is built only from user-provided full Google Maps place URLs. Coordinates are parsed from `!3dlat!4dlng` or `@lat,lng` inside those URLs. The project does not use automatic geocoding or the Google Maps API. The goal is simple: a map guide should not send users to guessed or inaccurate marker locations.

This project also demonstrates frontend data modeling, map interaction design, static data verification, localStorage state management, and travel-tool UX design. It is a fan-made / personal project and does not represent official information.

### Core Features

#### Map and Spot Browsing

- Built with Leaflet / React Leaflet and OpenStreetMap tiles.
- Map-first layout focused on visible map space.
- Filter drawer, spot-list drawer, and closeable detail panel.
- Floating detail panel on desktop and bottom sheet on mobile.
- Google Maps navigation link for each formal spot.

#### Verified Location Data

- `docs/reference/location.md` is the only trusted source for formal spot coordinates.
- Each formal spot must come from a complete Google Maps place URL.
- Coordinate parsing uses `!3dlat!4dlng` first, then falls back to `@lat,lng`.
- No automatic geocoding.
- No Google Maps API.
- Google Maps search URLs are not treated as verified coordinates.
- All formal spots are currently `verified`; formal `needs_review` count is 0.
- Old places that do not appear in `location.md` are not included in the formal map.

#### Category Markers and Custom Icons

- Markers are categorized as restaurant, cafe, shop, hotel, transport, information, park, shrine, beach, scenic, aquarium, onsen, museum, anime-related, or generic.
- The default `category_icon` mode works like a map app: icon shape and symbol carry place-category meaning.
- Users can switch to `custom_icon` mode and choose icons per category.
- Marker preferences are stored in localStorage.
- Icons are self-made CSS / inline SVG, with no official artwork, character images, or official logos.

#### Filters, Search, and Spot Layers

- Visibility modes: featured pilgrimage spots, all verified spots, and all spots.
- Filters support area, type, character, status, and spot layer.
- `spotLayer` values include `pilgrimage_core`, `food`, `shopping`, `hotel`, `transport`, `scenic`, and `auxiliary`.
- Search covers Chinese names, Japanese names, original Google Maps names, area/type/layer labels, marker categories, tags, business hours, regular holidays, price notes, and local user notes.

#### Route References

- Hand-curated route references help users understand practical travel flow around Numazu Station, downtown Numazu, Uchiura, Mito, and Awashima.
- Routes reference only existing verified spot IDs.
- Generic restaurants, hotels, and remote auxiliary places are not automatically inserted into core routes.

#### Business Hours and Regular Holidays

- Business-hour references come from user-maintained `docs/reference/numazu.html` and `docs/reference/沼津店舗.pdf`.
- The UI can show weekday hours, weekend/holiday hours, regular holidays, special notes, prices, and remarks.
- Business-hour information is emphasized in the spot detail panel.
- Business hours may change. Before traveling, check Google Maps, official websites, or on-site notices.

#### Check-in, Wishlist, Favorites, and Local Notes

- Supports visited / wishlist / favorite states.
- Users can write local notes, plans, descriptions, or check-in impressions for each spot.
- All states and notes are stored in browser localStorage.
- No login, no backend, and no cloud sync.

#### Responsive Map UI

- Desktop uses a map-first layout with a floating detail panel.
- Mobile uses a bottom-sheet detail panel.
- Filters and lists do not permanently occupy map space.
- Markers, drawers, detail panel, and zoom controls use separate stacking layers.

### Tech Stack

- React
- TypeScript
- Vite
- Leaflet
- React Leaflet
- OpenStreetMap tile layer
- Browser localStorage
- Responsive CSS
- Vercel deployment

The app does not require a Google Maps API key. OpenStreetMap is used as the map tile layer with attribution preserved. Google Maps is used only as an external navigation target and as the source of user-provided place URLs.

### Architecture and Data Model Highlights

- The `Spot` model stores names, coordinates, area, type, spot layer, business hours, Google Maps URL, verification source, and UI display metadata.
- `verifiedGoogleMapLinks` is generated from `docs/reference/location.md` as the coordinate reference list.
- `businessHoursReference` is generated from user-maintained `numazu.html` / PDF business-hour references.
- Formal `src/data/spots.ts` contains verified spots only.
- `location.md` answers: which spots exist, and which coordinates are trusted.
- `numazu.html` / PDF references answer: what business-hour notes may be available.
- `markerCategory` is derived from `type`, `spotLayer`, names, and tags for marker display only; it does not replace the underlying spot layer.
- localStorage stores check-in states, wishlist, favorites, filters, marker settings, and user notes.
- Route data references existing verified spot IDs only.
- Deleted or renamed old spot IDs do not crash the UI; stale localStorage entries are ignored.

### Data Sources and Accuracy Policy

- The project does not automatically scrape Google Maps coordinates.
- The project does not use the Google Maps API.
- Formal spots come from user-provided Google Maps place URLs.
- Coordinates are parsed only from `!3dlat!4dlng` or `@lat,lng` in those URLs.
- Old locations without Google Maps place URL verification are not included in the formal map.
- Google Maps search URLs may help manual review, but they are not verified coordinate sources.
- Business-hour data comes from user-maintained reference files and may become outdated.
- Before traveling, check Google Maps, official websites, or on-site notices.
- This is a fan-made / personal project and does not represent official information.
- The project does not use official images, character artwork, anime screenshots, or Aqours official logos.

### Local Setup

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

The current `package.json` includes `dev`, `build`, and `preview`. There is no separate `typecheck` script; TypeScript checking is included in `npm run build`.

### Local Storage

The app uses browser localStorage and does not require login or a backend. Main keys include:

- `numazu-pilgrimage-guide:spot-states`: visited / favorite / wishlist states.
- `numazu-pilgrimage-guide:language`: language preference.
- `numazu-pilgrimage-guide:filters`: filter state.
- `numazu-marker-mode`: current marker mode, `category_icon` or `custom_icon`.
- `numazu-marker-category-overrides`: custom icon choices per marker category.
- `numazu-marker-style-mode`: legacy marker-style key kept for compatibility; the new UI does not render from it.
- `numazu-spot-note:<spotId>`: local user notes per spot.

### Verification

```bash
npm install
npm run build
```

Suggested manual checks:

- Open the map home page.
- Switch between featured pilgrimage spots, all verified spots, and all spots.
- Open the filter drawer and spot-list drawer.
- Search Chinese names, Japanese names, and original Google Maps names.
- Search regular holidays, business hours, or price notes.
- Switch between category marker mode and custom icon mode.
- Click markers and open spot details.
- Check business-hour display.
- Edit and save local spot notes.
- Test visited / wishlist / favorite states.
- Open Google Maps navigation.
- Open the routes page.
- Check the mobile bottom-sheet detail panel.

### Known Limitations

- No user login and no cloud sync.
- User notes, visited states, wishlist, and favorites are stored only in the current browser localStorage.
- No automatic geocoding.
- No Google Maps API.
- New formal spots must first be supplied as complete Google Maps place URLs.
- Business hours may change and should be checked before travel.
- Not every spot has business-hour data.
- No official images or character assets are used.
- Vite production build may show a chunk size warning; this is not a build failure.
- OpenStreetMap visual details differ from Google Maps.

### Screenshots / Demo

This repository does not include official images, character artwork, or anime screenshots. Use the [Live Demo](https://numazu-pilgrimage-guide.vercel.app/) to inspect the current interface.

### License

No explicit open-source license has been added yet. This is an unofficial fan-made / personal project.
