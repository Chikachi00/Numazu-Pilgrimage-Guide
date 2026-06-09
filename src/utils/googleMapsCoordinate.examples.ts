import { parseGoogleMapsCoordinate } from "./googleMapsCoordinate";

export const googleMapsCoordinateExampleResults = [
  parseGoogleMapsCoordinate("https://www.google.com/maps/place/Example/@35.0990301,138.8585892,18z"),
  parseGoogleMapsCoordinate("https://www.google.com/maps/place/Example/data=!3d35.0990863!4d138.859128"),
  parseGoogleMapsCoordinate("https://www.google.com/maps/search/?api=1&query=沼津駅"),
  parseGoogleMapsCoordinate("not a google maps url"),
];
