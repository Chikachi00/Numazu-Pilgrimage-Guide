import type { Spot } from "../types/spot";

export function getGoogleMapsUrl(spot: Spot): string {
  if (spot.googleMapsUrl) {
    return spot.googleMapsUrl;
  }

  return `https://www.google.com/maps/search/?api=1&query=${spot.latitude},${spot.longitude}`;
}
