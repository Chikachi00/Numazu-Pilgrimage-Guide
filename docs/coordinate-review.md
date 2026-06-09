# Coordinate Review Checklist

There are currently no formal `needs_review` spots in `src/data/spots.ts`.

All official spots now come from user-provided Google Maps place URLs in `docs/reference/location.md` and are stored as verified Google Maps place URL coordinates.

Legacy unverified spots that were not present in `location.md` have been removed from the formal spot dataset.

To add a future spot, first provide a Google Maps place URL, then import it as a verified coordinate.
