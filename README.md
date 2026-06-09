# Numazu Pilgrimage Guide / 沼津圣地巡礼导航

一个 Web 版 Love Live! Sunshine!! / Aqours 沼津圣地巡礼导航 Demo。项目第一阶段聚焦地图体验、手写点位、筛选搜索、打卡记录、收藏和想去列表。

## 技术栈

- React
- TypeScript
- Vite
- React Leaflet
- Leaflet
- OpenStreetMap tile
- localStorage

## 功能列表

- 沼津地图与 OpenStreetMap 底图
- 静态点位数据：`src/data/spots.ts`
- 地图 marker、点位列表、点位详情面板
- 区域 / 类型 / 角色多选筛选
- 状态筛选：全部、已打卡、未打卡、收藏、想去
- 关键词搜索
- Google Maps 经纬度跳转
- localStorage 保存已打卡、收藏、想去状态
- 巡礼进度统计
- 桌面与移动端响应式布局
- 预留人工路线数据与路线页面

## 数据说明

点位由作者手动整理并维护，当前仅包含 MVP 示例数据。项目不会自动抓取数据，也不依赖后端数据库。

## 版权说明

本项目不使用官方图片、角色图或其他版权素材。页面仅使用文字、色块、地图和手写静态数据来呈现巡礼信息。

## 本地运行

```bash
npm install
npm run dev
```

构建检查：

```bash
npm run build
```

## 部署建议

这是纯前端静态项目，适合部署到：

- Vercel
- Cloudflare Pages

部署时使用默认 Vite 构建命令 `npm run build`，输出目录为 `dist`。
