# Map Icon and Detail UI Update Report

## Marker System

* Removed old style modes from the UI: `layer_color`, `minimal_dot`, `numbered`, `aqours_inspired`.
* New default mode: `category_icon`.
* Supported marker categories: restaurant, cafe, shop, hotel, transport, info, park, shrine, beach, scenic, aquarium, onsen, museum, anime, generic.
* Custom icon mode: users can choose an icon per marker category without changing spot data.
* localStorage keys:
  * `numazu-marker-mode`
  * `numazu-marker-category-overrides`
  * legacy `numazu-marker-style-mode` is ignored for rendering and does not break the app.

## Detail Panel Simplification

* Hidden sections: pilgrimage tips, access suggestions, photo tips, and template-like descriptions are no longer emphasized in the main detail UI.
* Preserved sections: title, Japanese / original Google Maps name, area, type, layer, marker category, Google Maps link, visited / wishlist / favorite buttons, tags, and coordinate status.
* Added user note feature: each spot has a local-only note editor saved as `numazu-spot-note:<spotId>`.
* Business hours priority: business-hour information is now the main detail content after the primary actions.

## Location Sync

* Latest `docs/reference/location.md` URLs: 94.
* Successfully parsed URLs: 94.
* Formal spots after duplicate-place suppression: 93.
* New formal spots from latest sync: 4.
* Remaining `needs_review` spots: 0.
* Spots matched with business hours: 42.

## Validation

* Spot count: 93.
* Verified count: 93.
* needs_review count: 0.
* Build status: `npm run build` passed.
* Route spotId status: no missing route spot IDs.
