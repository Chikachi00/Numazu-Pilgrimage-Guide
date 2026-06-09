import type { Spot } from "../types/spot";

function hasValidCoordinate(spot: Spot) {
  return Number.isFinite(spot.latitude) && Number.isFinite(spot.longitude);
}

export function hasVerifiedGoogleMapsCoordinate(spot: Spot): boolean {
  return spot.coordinateStatus === "verified" && hasValidCoordinate(spot);
}

export function getGoogleMapsUrl(spot: Spot): string | undefined {
  if (spot.googleMapsUrl) {
    return spot.googleMapsUrl;
  }

  if (hasVerifiedGoogleMapsCoordinate(spot)) {
    return `https://www.google.com/maps/search/?api=1&query=${spot.latitude},${spot.longitude}`;
  }

  if (spot.mapSearchUrl) {
    return spot.mapSearchUrl;
  }

  return undefined;
}

export function getGoogleMapsButtonLabel(spot: Spot): string {
  return spot.coordinateStatus === "verified" ? "Google Maps 导航" : "Google Maps 搜索 / 校对";
}
