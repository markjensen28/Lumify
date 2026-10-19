# Science Game 9: Salt Crystal Watch

Updated from the supplied reference on 12 October 2026.

## Layout and visual behavior

The large ceramic evaporation dish and iron support occupy the left laboratory bench. A cyan simulated-stage banner sits above it; the stage description, Record Observation and Advance Time controls sit below. The right panel contains the observation journal, Salt/Water choices, feedback and Reset/Check or Retry/Next.

The palette, Pixelify Sans font, parchment title header and navigation positions match Games 6–8. The main footer summarizes the activity and identifies its three challenges and lack of a timer. Illustrated instructions and scientific notes are inside How to Play.

| Navigation | Center on the 1280 × 720 canvas |
| --- | --- |
| How to Play | 1135, 37 |
| Settings | 1209, 37 |
| Back | 46, 678 |

### Five simulated stages

1. Saltwater fills the dish.
2. Water begins to evaporate.
3. Less liquid remains; some crystals become visible.
4. Only a little liquid remains.
5. Dry salt remains in the dish.

The liquid surface shrinks and lowers across the four wet stages. Pixel wisps indicate water leaving during the middle stages. Salt crystals emerge late; a recognizable salt mound appears in the final dry dish. The scene does not collect liquid water or introduce a flame/burner.

### Observation journal

Start, Middle and End are separate parchment entries with illustrated snapshots. Recording several middle stages updates the Middle image to the latest recorded middle stage; it never removes Start or End. Grey entries identify observations not yet recorded. Each thumbnail uses the same apparatus renderer as the live dish, with its saved stage value.

Record is disabled after that stage is captured. Advance is disabled at the final stage. The existing experiment rules still require a start observation, at least one middle observation, an end observation, and Salt as the recovered material. Feedback identifies missing records or a wrong output and explains when to reset. Retry replaces the current challenge's score; progress is saved under lesson `q1-m2-l4`.

Help and Settings preserve the current stage, journal and choice. The Help illustration shows the start, middle and final dish, includes the scientist's explanation, and explains compressed time and the vapor visual cue.

## Assets

Generated with the built-in image generation tool using the supplied reference for style and perspective.

| Project file | Mode | Use |
| --- | --- | --- |
| public/assets/ui/science-quarter/evaporation-workshop/evaporation-apparatus.png | Generate, transparent background | Empty cream ceramic dish on its iron support |

The original remains in the Codex generated-images folder. The project copy is 1586 × 992 pixels, with measured visible bounds `[128, 68, 1392, 888]` and fully transparent outer corners. Runtime frames trim padding without editing the PNG.

The laboratory, panel frame, scientist and existing general salt sprite were reused. The salt sprite has an activity-specific measured frame `[7, 21, 50, 24]`. Liquids, crystals, vapor, journal pages, labels and controls are live Phaser objects.

### Final generation prompt

Mode: built-in image generation. Reference: the supplied Game 9 image. Transparent background: true.

Use case: scientific-educational. Asset type: isolated game sprite for LUMIFY Salt Crystal Watch. Use the supplied reference only for the style and the large ceramic dish with its support. Generate ONE standalone evaporation apparatus: a broad EMPTY cream-white ceramic evaporating dish, shallow bowl with a small pouring spout on the RIGHT, resting on a low dark iron three-legged support. The dish is wide, approximately twice as wide as its own height; the stand is low and open beneath it. Front three-quarter perspective, with the empty INSIDE floor clearly visible. No liquid, no crystals, no vapor or smoke, no flame, no burner or glowing heat source. Authentic polished fantasy pixel art: crisp square pixel clusters, deliberate clean outlines, warm ivory ceramic with muted lavender-grey shading, dark charcoal iron with weathered brown highlights. Match the reference's illustrated laboratory art. Overall silhouette about 1.6:1 width-to-height. Entire object centered and visible with small transparent padding, suitable for a large interactive game illustration. Genuine transparent PNG alpha 0 outside the object and between the tripod legs. Exactly one apparatus, no table, scenery, books, bottles, extra decorative objects, labels, text, UI, watermarks, photographic or smooth 3D rendering. The interior must remain empty so the game can overlay simulated liquid and salt.

## Implementation

- `src/ui/evaporationWorkshopUi.js`: dish stages, journal snapshots, output/result controls and illustrated Help.
- `src/config/evaporationArtwork.js`: measured apparatus and salt texture frames.
- `src/scenes/BootScene.js`: loads the project asset and creates runtime frames.
- `src/scenes/ScienceAdventureScene.js`: uses the shared workshop skin and routes Game 9's results/Help.
- `src/games/science/separationViews.js`: delegates the evaporation view.
- `src/games/science/scienceLogic.js`: specific feedback for incomplete observations; completion requirements are preserved.

## Verification

- Production build and 11 science unit tests.
- Focused browser flow on desktop and a 390-pixel viewport: actual menu/world/lesson entry, consistent navigation, modal state preservation, missed-start recovery, duplicate-record prevention, stage limits, all five journal captures, rejection of Water, all three challenges, reset/retry score behavior, local progress, re-entry and access to Game 10.
- Visual review of the initial dish, illustrated Help, middle stage, wrong recovery and completed journal.

The first desktop test clicked the Help close button while attempting to click a blocked underlying control. The test now chooses the underlying Record control outside the close button's hit area.

Reviewed previews: [desktop](../screenshots/evaporation-workshop/desktop) and [narrow viewport](../screenshots/evaporation-workshop/mobile-width).

```powershell
npm.cmd run build
node --test tests/unit/scienceLogic.node.js
npx.cmd playwright test tests/evaporation-workshop.spec.js --workers=1
```
