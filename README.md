# Numazu Pilgrimage Guide / 沼津圣地巡礼导航

A lightweight web pilgrimage guide for Love Live! Sunshine!! / Aqours fans visiting Numazu.

This project focuses on a clean map-first experience: curated spots, practical pilgrimage notes, personal check-in states, and route planning foundations for future expansion.

## Live Demo

Live Demo: https://numazu-pilgrimage-guide.vercel.app/

## Core Features

- Numazu pilgrimage spot map
- Spot detail panel
- Area / type / character filters
- Keyword search
- Google Maps navigation links
- Visited / wishlist / favorite states
- localStorage persistence
- Manual route recommendation data reserved for future route UI

## Tech Stack

- React
- TypeScript
- Vite
- React Leaflet
- Leaflet
- OpenStreetMap
- localStorage
- Vercel
- Cloudflare Workers / Pages, optional backup deployment

## Project Highlights

- Fan-oriented travel workflow for Love Live! Sunshine!! / Aqours pilgrimage planning.
- Spot data is manually curated by the author, not automatically scraped.
- The product focus is on map usability, route-friendly spot grouping, and personal check-in tracking.
- The MVP stays intentionally lightweight: no backend, no login, no cloud sync, and no external database.

## Data Notes

Spot data lives in `src/data/spots.ts` and is manually organized by the author. The current data is sample MVP content and should be reviewed before being used as a complete travel reference.

## Copyright Notes

This is an unofficial fan-made tool. It does not use official images, character artwork, anime screenshots, or other copyrighted visual assets.

Map tiles are provided by OpenStreetMap and attribution is preserved in the map UI.

## Local Development

```bash
npm install
npm run dev
npm run build
```

## Deployment

Main deployment: Vercel

Backup deployment: Cloudflare Workers / Pages, optional

Recommended Vercel configuration:

- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`
- Framework preset: `Vite`
