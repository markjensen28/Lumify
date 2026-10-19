# Science Game 15: Lumi Field Report

Updated from the supplied reference on 12 October 2026.

## Layout

The **Reporting Workboard** contains three large parchment image panels: Before, Process and After. A cyan outline marks the selected panel. The Image Bank below offers the input mixture, separation method, recovered product and two distractors. Tap a panel, then an image to fill it or replace its current choice.

The right **Your Field Report** panel groups the challenge title, recovered-material illustration, writing prompt and a larger parchment writing area. The field accepts 20–180 characters and shows a live character count. Reset/Save Report and Retry/Next Report share the same action container. Download Saved Reports stays below the image bank and becomes available when a report has been saved.

The warm laboratory, parchment header, navy/gold frame, purple controls, green Save Report, lower-left Back button and summary footer match the other revised Science activities. Illustrated How to Play contains the instructions and science note.

| Navigation | Center on the 1280 × 720 canvas |
| --- | --- |
| How to Play | 1135, 37 |
| Settings | 1209, 37 |
| Back | 46, 678 |

## Reports and validation

| Report | Before | Process | After | Community benefit |
| --- | --- | --- | --- | --- |
| Sand for Building | Sand mixed with stones | Sieve | Usable sand | The building yard can reuse recovered sand |
| Iron for Repairs | Iron mixed with sand | Magnet | Recovered iron | The repair yard can reuse recovered iron |
| Salt for the Community | Saltwater | Evaporation | Recovered salt | The salt maker recovers a useful product |

Saving checks that all three images match the correct stage and that the explanation contains at least 20 characters after trimming leading and trailing whitespace. It does not automatically judge the scientific accuracy or quality of student writing. Every saved record is marked for teacher review. Specific feedback identifies missing images, incorrect picture order or incomplete writing.

Help and Settings hide the native writing field while open and preserve its text and picture choices. The field remains visible and read-only after saving, so students can review or select their explanation. Picture choices are locked until Retry. Retry replaces the current score; it does not add duplicate points. There is no timer.

All three reports save locally to lesson `q1-m3-l5` in `lumify-science-q1-v1`. Download Saved Reports produces `lumify-science-field-reports.json`, containing readable report titles, explanations, stage labels, selected image labels, community benefits and teacher-review markers, together with the original saved records. Saved reports remain downloadable after reentering the activity. The native text field is removed when leaving the scene.

## Artwork

No additional generation was needed. The laboratory, frames, sieve rim, pebbles, magnet, nails, evaporation apparatus, beaker, scientist, sand, salt and oil/water sprite reuse existing artwork.

Before illustrations compose stones or iron with a sand mound. Process illustrations show a sieve and falling grains, a magnet with iron, or evaporation with salt and vapor. After illustrations show the recovered product. Dissolved salt is not drawn as visible grains inside saltwater. The sieving diagram reuses Game 14's dynamic mesh helper; these images illustrate the process rather than simulate an entire laboratory experiment.

## Implementation

- `src/ui/fieldReportUi.js`: reporting panels, source/process/product compositions, Image Bank, writing frame, grouped results and illustrated Help.
- `src/config/scienceQuarterGames.js`: shared 180-character caption limit.
- `src/games/science/scienceLogic.js`: caption limit and targeted report validation messages.
- `src/scenes/ScienceAdventureScene.js`: shared workshop skin, fitted mission, native textarea placement/read-only lifecycle, report Help/results and labeled JSON export.
- `src/games/science/communityViews.js`: routes Game 15 to its renderer.
- `src/ui/brokenSeparatorUi.js`: exports the existing sieve illustration for reuse.
- `tests/field-report.spec.js`: actual map entry, picture validation, writing limit, modal preservation, saved-field protection, Retry, all three reports, downloads, persistence, reentry and native-input cleanup.
- `tests/unit/scienceLogic.node.js`: writing preservation, length limit, image order and nonblank requirements.

## Verification

```powershell
npm.cmd run build
node --test tests/unit/scienceLogic.node.js tests/unit/decantGeometry.node.js
npx.cmd playwright test tests/field-report.spec.js --workers=1
```

Screenshots are saved in `screenshots/field-report/desktop` and `screenshots/field-report/mobile-width`. The native writing field follows the scaled fixed game canvas.

The production build and all 18 separation/geometry checks passed. The complete Game 15 browser flow passed on desktop and a narrow viewport with no page or console errors. Downloads were parsed to verify all three explanations, ordered image labels and teacher-review markers. Reviewed screenshots include building, repair and salt reports, saved states, incorrect image choices and illustrated Help. Footer controls were fitted inside their shared container and source materials were arranged as mixed samples.
