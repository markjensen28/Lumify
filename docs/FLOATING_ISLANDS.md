# Floating island presentation

The world selector now presents eight separate floating islands in a depth
carousel. The unlocked Grand Library is initially centered. Neighbor taps, horizontal dragging or
swiping, left/right keys, arrow controls, and position markers move selection.
The centered island or its nameplate enters an open island. Enter/Space also
enters; Escape closes Settings. Returning from a quarter map restores its island.

## Assets

- Five new normal island PNGs: `public/assets/floating-islands/`.
- Shared sky and transparent mist: `public/assets/backgrounds/floating-sky.png`
  and `floating-mist.png`.
- Four future subject environments: `public/assets/island-maps/hibla-archipelago-map.png`,
  `hearthwork-terraces-map.png`, `tala-crossroad-map.png`, `concord-grove-map.png`.
- The original Vulcan, Reading, and Numeric island sprites and thematic quarter
  maps remain in use. The Grand Library retains its existing interior backdrop.
- The supplied `public/assets/video/world-intro.mp4` is retained as the source.
  `world-intro-browser.mp4` uses H.264/yuv420p at the original 1920 x 1080,
  preserves the AAC audio, and places MP4 metadata first for browser playback.

All eleven new images were produced with the built-in image generator. Exact
prompts and paths are in `floating-island-assets.json` and embedded in each PNG.

## Normal and locked states

`src/config/content.js` owns the eight destinations and default access.
`src/config/islandVisuals.js` defines subjects and state treatment;
`src/ui/floatingIslandArt.js` renders it consistently in selection and intro.

Every island supports normal artwork and a locked treatment made from that same
artwork, a cool dark tint, matching mist, and a separate lock glyph. State layers
preserve recognition and avoid duplicating each island's texture. Science,
English, Mathematics, and the Grand Library are initially open; the other four destinations remain
locked. A runtime `islandUnlocks` registry object can override defaults. This
change does not introduce automatic progression or curricula for locked islands.

The test seam exposes `setIslandUnlocked(id, unlocked)` and
`selectCarouselIsland(id)` only when `?test=1` is present.

## Preserved flow

The opening cinematic and Krae's library dialogue run first. The library fades
to white before `world-intro-browser.mp4` plays (an H.264 copy of the supplied
HEVC `world-intro.mp4`, with its original audio). Krae's world dialogue then fades in
immediately over the same island positions used in selection, centered on the
Grand Library. There is no empty viewing pause, and selection controls only
appear after the final dialogue fades to white. The world dialogue explains
carousel controls. Quarter and minigame navigation,
music, settings, and existing curriculum remain functional. Vulcan's Q4 marker
was moved below the map header.

The existing fixed 16:9 FIT shell remains. Narrow displays show three visible
islands instead of five; portrait letterboxing and small text reflect that
retained shell. Reduced-motion preferences disable floating drift and remove
carousel transition duration.

## Validation

- Production build passed.
- Eleven desktop checks passed across `pilot-world.spec.js`, `intro.spec.js`,
  `cloud-transition.spec.js`, and `minigame-navigation.spec.js`, including natural
  playback of both cinematics and navigation through the five original games.
- Three mobile-width checks passed for intro replay, missing-video recovery,
  and real touch navigation. The touch check passed on an isolated rerun after
  a cleanup timeout during concurrent verification.
- The earlier floating-island visual review returned `ship`, with no material fixes.

Review images are in `.impeccable/review/`, including desktop, mobile, both Hibla
states, the three open quarter maps, and both Krae dialogue stages. The current
intro tests also cover natural world-video playback, matching carousel positions,
hidden selection controls during dialogue, and entry to the unlocked Library.
