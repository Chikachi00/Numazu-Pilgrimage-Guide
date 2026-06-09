# Coordinate Verification Workflow

1. Open `docs/coordinate-review.md`.
2. Click the Map Search link for a spot.
3. Confirm the correct location in Google Maps manually.
4. Copy the final Google Maps place URL.
5. If the URL contains `@lat,lng` or `!3dlat!4dlng`, use `parseGoogleMapsCoordinate` from `src/utils/googleMapsCoordinate.ts` to extract the coordinate.
6. Update `src/data/spots.ts`:
   - `latitude`
   - `longitude`
   - `googleMapsUrl`
   - `coordinateStatus: "verified"`
   - `coordinateSource: "google_maps_place_url"`
   - `lastVerifiedAt: "YYYY-MM-DD"`
   - `verificationNote: "Parsed from Google Maps place URL"`
7. If the location is uncertain, keep `coordinateStatus: "needs_review"`.

Google Maps search URLs are only a manual verification entry point. They are not proof that a coordinate is correct.
