# Science Game 10: Steady Pour

Updated from the supplied reference on 12 October 2026.

## Layout

The left laboratory bench shows a large source jar, a smaller receiving jar and the last transfer stream. Below the jars are their labels and four purple controls: Let It Settle, − Tilt, + Tilt and Pour a Little.

The right panel groups the settling state, tilt angle, collected and remaining amounts, illustrated source/output status, goals, feedback and Reset/Check or Retry/Next. Failed pours tint the feedback panel red and show sediment in the receiving jar.

The shared parchment title header, Pixelify Sans typeface, navy/gold framing, purple controls and laboratory match Games 6–9.

| Navigation | Center on the 1280 × 720 canvas |
| --- | --- |
| How to Play | 1135, 37 |
| Settings | 1209, 37 |
| Back | 46, 678 |

The footer summarizes the activity and its three challenges with no timer. How to Play contains three illustrated steps, the scientist's explanation and guidance for retrying an unsuccessful pour.

## Experiment

- Initial source: 100% liquid with freshly stirred sediment; receiver: empty.
- Use Let It Settle twice to settle the sand. The state saturates after three settling steps.
- Tilt changes in 10° steps, bounded from 0° to 50°.
- Pour a Little transfers 20% at a time. An upright jar does not transfer liquid.
- Pouring before settling, tilting above 30°, or pouring the last liquid into the receiver carries sediment along.
- Success requires at least 60% collected, at least 20% remaining, and no sediment in the receiver.
- Both 60%/40% and 80%/20% are valid results.
- Settling after a contaminated pour cannot repair the receiver; Reset restarts the experiment.
- Help and Settings preserve the current experiment. Retry replaces the current challenge score.
- All three completed challenges save progress under lesson `q1-m2-l5`.

The numerical interaction rules and completion thresholds were preserved. Feedback now identifies contamination, too little liquid left, or insufficient recovery. The Help note retains the distinction between decanting and drinking-water purification.

## Rendering

The empty jar sprite is reused at different scales and angles for the source, receiver, progress illustrations and Help figures. Its contents remain live Phaser graphics.

The jar's inner polygon is transformed with the glass. Liquid and settled sediment are clipped by horizontal world-space surfaces, so tilting the source does not tilt the liquid surface or draw contents outside the glass. Fill levels preserve the chosen visual fluid area across jar rotations. These are educational illustrations rather than a real-time fluid physics solver.

Suspended grains become a bottom sediment layer after settling. A contaminated receiver shows a sediment bed and suspended grains. The stream changes from blue to tan when sediment is transferred and represents the latest pour; each user action transfers one 20% portion.

## Asset

Generated using the built-in image generation tool, with the supplied Game 10 reference for style and perspective.

| Project file | Mode | Use |
| --- | --- | --- |
| public/assets/ui/science-quarter/decant-workshop/decant-jar.png | Generate, transparent background | Empty glass jar reused across the activity |

The original remains in the Codex generated-images folder. The project PNG measures 1035 × 1519 pixels, with measured visible bounds `[62, 96, 911, 1353]`. Runtime trimming removes padding without editing the image. The clear interior lets live contents show through. The existing laboratory, panel frame and scientist were reused.

### Final generation prompt

Mode: built-in image generation. Reference: the supplied Game 10 image. Transparent background: true.

Use case: scientific-educational. Asset type: standalone transparent game sprite for LUMIFY Steady Pour. Input image role: reference for the glass jars and crisp fantasy pixel-art style only, do not reproduce the UI. Generate EXACTLY ONE completely EMPTY clear glass sample jar: broad cylindrical body, rounded bottom corners, slightly rounded shoulders, a short narrower neck with a thick elliptical OPEN mouth and visible glass rim. NO lid, cork, handle, liquid, sand or sediment. Front three-quarter perspective, with minimal perspective distortion; overall jar silhouette width-to-height about 0.68:1. The broad interior must be genuinely transparent, with sparse restrained translucent pale-blue and white reflections mostly at the side edges and base, so the game can draw changing liquid and sand behind the sprite. Authentic polished fantasy pixel art, crisp square pixel clusters, consistent deliberate pixels, clean outline, limited blue-white-grey glass ramps. Match the provided warm fantasy laboratory illustration. Entire jar centered, full silhouette visible, occupying about 85% of canvas. Genuine alpha 0 outside the jar and through most of its clear interior. No background, table, scenery, separate objects, shadows outside the object, text, numbers, labels, watermark, smooth painting, photographic or 3D rendering.

## Implementation

- `src/ui/decantWorkshopUi.js`: jars, contents, stream, progress panel, result controls and illustrated Help.
- `src/games/science/decantGeometry.js`: polygon clipping and level geometry.
- `src/config/decantArtwork.js`: measured texture frame.
- `src/scenes/BootScene.js`: loads the project PNG and creates its frame.
- `src/scenes/ScienceAdventureScene.js`: shared workshop styling and Game 10 Help/result routing.
- `src/games/science/separationViews.js`: delegates Steady Pour rendering.
- `src/games/science/scienceLogic.js`: concise feedback; preserved experiment rules.

## Verification

Production build and 14 unit checks pass. Unit coverage includes horizontal surfaces and bounded contents at multiple tilt angles, fluid-area preservation, liquid conservation, tilt limits, contamination and valid stopping points.

The focused browser test follows the actual menu/world/lesson route on desktop and at a 390-pixel viewport. It checks shared navigation, modal input blocking and state preservation, an upright pour, unsettled/steep/emptying failures, settling and tilt limits, all three successful challenges at different gentle angles, 60% and 80% stopping points, reset/retry scores, saved progress, re-entry and access to Game 11.

Reviewed previews: [desktop](../screenshots/decant-workshop/desktop) and [narrow viewport](../screenshots/decant-workshop/mobile-width). They include the initial activity, Help, unsettled/steep/excessive pours, a gentle 40% pour, successful separation and completion.

```powershell
npm.cmd run build
node --test tests/unit/scienceLogic.node.js tests/unit/decantGeometry.node.js
npx.cmd playwright test tests/decant-workshop.spec.js --workers=1
```
