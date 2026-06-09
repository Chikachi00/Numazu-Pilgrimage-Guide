export interface ParsedCoordinate {
  latitude: number;
  longitude: number;
  source: "at_lat_lng" | "place_3d_4d";
}

function toCoordinate(latitude: string, longitude: string, source: ParsedCoordinate["source"]) {
  const parsedLatitude = Number(latitude);
  const parsedLongitude = Number(longitude);

  if (!Number.isFinite(parsedLatitude) || !Number.isFinite(parsedLongitude)) {
    return null;
  }

  return {
    latitude: parsedLatitude,
    longitude: parsedLongitude,
    source,
  };
}

export function parseGoogleMapsCoordinate(url: string): ParsedCoordinate | null {
  const placeCoordinateMatch = url.match(/!3d(-?\d+(?:\.\d+)?)!4d(-?\d+(?:\.\d+)?)/);

  if (placeCoordinateMatch) {
    return toCoordinate(placeCoordinateMatch[1], placeCoordinateMatch[2], "place_3d_4d");
  }

  const atCoordinateMatch = url.match(/@(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)(?:,|\/|$)/);

  if (atCoordinateMatch) {
    return toCoordinate(atCoordinateMatch[1], atCoordinateMatch[2], "at_lat_lng");
  }

  return null;
}
