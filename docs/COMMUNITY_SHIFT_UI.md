# Science Game 11: Community Shift

Updated from the supplied reference on 12 October 2026.

## Layout and interaction

Three illustrated customer request cards sit above a five-slot timetable. The timetable has separate Magnet, Sieve, Filter, Evaporate, and Decant stations. A selected card has a gold outline. Each booking has a colored bar spanning its full duration; an unsuitable method, overlap, or late finish turns the bar red. Bars are visual only, so players can still click any grid cell to reposition the selected job.

The right panel groups the worker portrait, requested product, community benefit, booked method, duration and starting slot, expected or recovered product, feedback, and Reset/Check or Retry/Next controls. After completing a shift, players can still select customers to inspect their recovered products; completed bookings stay locked.

The warm laboratory, parchment title, navy and gold panels, purple controls and Pixelify Sans match the shared workshop design. The summary remains in the footer; illustrated instructions and the scientist's scheduling explanation live in How to Play.

| Navigation | Center on the 1280 × 720 canvas |
| --- | --- |
| How to Play | 1135, 37 |
| Settings | 1209, 37 |
| Back | 46, 678 |

## Three challenges

| Challenge | Requests |
| --- | --- |
| 1 | Repair yard: iron from iron and sand, magnet, 1 slot; building yard: sand from sand and stones, sieve, 2 slots; salt maker: salt from saltwater, evaporation, 3 slots |
| 2 | Pottery studio: insoluble clay from clay and water, filter, 2 slots; building yard: fine sand from gravel and sand, sieve, 2 slots; repair yard: iron from iron and wood chips, magnet, 1 slot |
| 3 | Settling station: upper liquid from settled sand and water, decant, 2 slots; salt maker: salt from saltwater, evaporation, 3 slots; repair yard: iron from iron and sand, magnet, 1 slot |

All three requests must use suitable methods, finish by slot 5, and avoid overlapping work at the same station. Different stations may work simultaneously. Run the Shift previews the schedule; Check Result validates that preview. Moving a booking clears the old preview. Reset clears the current schedule; Retry replaces its score without adding duplicate points. All three completed challenges save under lesson `q1-m3-l1`.

Time slots are planning units, not laboratory experiment durations. There is no timer. A liquid recovery request does not imply that the liquid is safe to drink.

## Generated asset

| Project file | Mode | Use |
| --- | --- | --- |
| public/assets/ui/science-quarter/community-shift/community-worker.png | Built-in image generation, transparent background | Friendly customer portrait in the selected-request panel |

The original remains in the Codex generated-images folder. The project PNG is 1122 × 1402 pixels with genuine alpha (corner alpha 0); measured visible bounds are `[61, 33, 1011, 1351]`. The loader creates a runtime frame instead of editing the PNG. Existing separation tools, materials, laboratory, panel frame and scientist are reused. Clay is illustrated with a muted earth-colored material mound and explicitly labeled.

### Final generation prompt

Create exactly one standalone friendly community workshop worker bust portrait sprite for LUMIFY: Lumi Adventures, a 2D educational fantasy pixel-art game. Young adult Filipino worker with warm medium tan skin, short dark brown hair, friendly expressive eyes and a welcoming smile, simple tan cloth work cap, cream shirt, brown leather apron with shoulder straps. Show head and torso cropped at waist, arms relaxed within the silhouette. Three-quarter view facing slightly right. Authentic handcrafted 32-bit-inspired fantasy pixel art, crisp square pixels and deliberate pixel clusters, clean dark outlines, limited color ramps, expressive approachable proportions. Native-design detail around 128x160 pixels, preserve consistent pixel sizes even if output is larger. Centered one character occupying 80 percent of canvas. This will be displayed as a small portrait beside a community request in a warm wooden laboratory UI. Fully transparent PNG with genuine alpha; outside the sprite must be 0 percent opacity. No background, environment, frame, text, labels, watermarks, decorative props, scenery, gradients, smooth painting, 3D rendering, blurry edges or checkerboard baked into image.

## Implementation and verification

- `src/ui/communityShiftUi.js`: request cards, timetable, job bars, customer details, result controls and illustrated Help.
- `src/config/communityShiftArtwork.js`: measured portrait frame.
- `src/games/science/communityViews.js`: routes Game 11 to its new renderer.
- `src/scenes/ScienceAdventureScene.js`: workshop skin and Game 11 feedback/Help integration.
- `src/scenes/BootScene.js`: loads the project portrait and creates its frame.
- `tests/community-shift.spec.js`: actual menu/map/lesson entry, all three schedules, unsuitable methods, late jobs, Run-before-Check, rescheduling, modal preservation, completed-product inspection, Retry scoring, local storage, reentry, and Game 12 access.

Commands:

```powershell
npm.cmd run build
node --test tests/unit/scienceLogic.node.js tests/unit/decantGeometry.node.js
npx.cmd playwright test tests/community-shift.spec.js --workers=1
```

Reviewed previews are saved under `screenshots/community-shift/desktop` and `screenshots/community-shift/mobile-width`.

Results: production build passed; all 14 separation/geometry unit checks passed; the Community Shift browser flow passed on desktop and a narrow viewport, with no page or console errors. A final desktop visual pass checked the longer third-challenge customer and benefit text inside their panels.

