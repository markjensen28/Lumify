# Science Game 13: Village Impact Board

Updated from the supplied reference on 12 October 2026.

## Layout

Three village cards group each resident, mixture, potential recovery amount, and installed service. The cards use cream panels with green installed-service areas; gold marks the selected tool. Five illustrated tool cards sit below the village cards, followed by **Preview Benefits**.

The right **Shift Impact** panel shows remaining service tokens, previewed useful recovery, and two illustrated benefit tiles. Feedback and Reset/Check Result or Retry/Next Challenge stay together at its bottom. The shared parchment header, purple Help/Settings controls, lower-left Back button, warm workshop and summary footer match the other revised Science activities. Examples and science notes are in illustrated How to Play.

| Navigation | Center on the 1280 × 720 canvas |
| --- | --- |
| How to Play | 1135, 37 |
| Settings | 1209, 37 |
| Back | 46, 678 |

## Interaction and recovery

Select a tool, then tap a village site to install its service. Two tokens permit at most two installations. Tap an installed site to reclaim its token; select another tool before installing the replacement. Changing installations invalidates the preview. **Preview Benefits** computes the useful recovery; **Check Result** accepts a previewed plan with the greatest recovery available from two suitable services.

| Challenge | Sites and potential amounts | Best two services | Maximum useful recovery |
| --- | --- | --- | --- |
| 1 | Repair yard 8; building yard 6; salt maker 2 | Magnet at repair yard; sieve at building yard | 14 units |
| 2 | Pottery studio 9; building yard 5; repair yard 3 | Filter at pottery studio; sieve at building yard | 14 units |
| 3 | Settling station 7; salt maker 6; repair yard 2 | Decant at settling station; evaporate at salt maker | 13 units |

An unsuitable tool recovers zero useful units at its installed site. A suitable lower-impact plan remains playable so players can compare alternatives. Recovery amounts are planning quantities, not a physical efficiency model. Decanting recovers upper liquid while leaving settled sediment behind; separate liquid is not automatically safe to drink.

There is no timer. Help and Settings preserve the current plan. Completed challenges lock installations and tool changes; Retry replaces the current challenge result rather than adding duplicate points. All three challenges persist to lesson `q1-m3-l3`.

## Artwork

Two transparent portraits were generated with the built-in image generation tool in **generate** mode, transparent background enabled.

| Project file | Native PNG dimensions | Visible runtime frame |
| --- | --- | --- |
| public/assets/ui/science-quarter/village-impact/village-mechanic.png | 1122 × 1402 | [27, 5, 1067, 1387] |
| public/assets/ui/science-quarter/village-impact/village-saltmaker.png | 1122 × 1402 | [49, 55, 1031, 1318] |

Both PNGs have genuine alpha transparency with corner alpha 0. Runtime frames trim transparent padding without editing the original files. The originals remain in the Codex generated-images directory. The existing builder portrait, pottery resident, laboratory background, frames, scientist, tools and material sprites were reused. Tokens and status bands use live Phaser graphics.

### Final mechanic generation prompt

Create exactly one Standalone friendly bust portrait sprite for LUMIFY: Lumi Adventures, 2D educational fantasy pixel-art game. Authentic handcrafted 32-bit-inspired fantasy pixel art, crisp square pixels and deliberate pixel clusters, clean dark outlines, limited color ramps, expressive approachable proportions. Native-design detail about 128x160 pixels, preserve consistent pixel sizes even if output larger. Head and torso to waist, centered, three-quarter view facing slightly right, arms kept within silhouette, character occupies 80 percent canvas. Fully transparent PNG genuine alpha 0 outside character. Exactly one character. No background, environment, frames, text, labels, watermark, smooth painting, 3D rendering, blurry edges or checkerboard. Warm cream and brown clothing matches existing friendly tan-capped worker portrait in the supplied game UI reference. Character: young adult Filipino repair-yard mechanic, warm medium tan skin, short dark brown tousled hair, friendly smiling expressive eyes. Brass-framed blue-lens work goggles resting on forehead, rolled-sleeve cream shirt, brown leather apron with shoulder straps, holding one small grey wrench in a relaxed hand close to chest. Welcoming village craftsperson, fantasy workshop costume.

### Final salt-maker generation prompt

Create exactly one Standalone friendly bust portrait sprite for LUMIFY: Lumi Adventures, 2D educational fantasy pixel-art game. Authentic handcrafted 32-bit-inspired fantasy pixel art, crisp square pixels and deliberate pixel clusters, clean dark outlines, limited color ramps, expressive approachable proportions. Native-design detail about 128x160 pixels, preserve consistent pixel sizes even if output larger. Head and torso to waist, centered, three-quarter view facing slightly right, arms kept within silhouette, character occupies 80 percent canvas. Fully transparent PNG genuine alpha 0 outside character. Exactly one character. No background, environment, frames, text, labels, watermark, smooth painting, 3D rendering, blurry edges or checkerboard. Warm cream and brown clothing matches existing friendly tan-capped worker portrait in the supplied game UI reference. Character: elderly Filipino salt maker, medium tan skin, friendly warm smile, kind expressive eyes, short white beard and mustache, blue cloth headscarf tied at side, rolled-sleeve cream shirt, brown leather apron with shoulder straps. Hands relaxed at waist. Friendly village craftsperson, fantasy workshop costume.

## Implementation

- `src/ui/villageImpactUi.js`: village cards, installation statuses, tool row, previewed benefits, grouped results and illustrated Help.
- `src/config/villageImpactArtwork.js`: measured portrait frames.
- `src/scenes/BootScene.js`: loads the generated portraits.
- `src/scenes/ScienceAdventureScene.js`: Game 13 workshop skin, fitted mission label, Help and results.
- `src/games/science/communityViews.js`: routes Game 13 to its new renderer.
- `src/ui/recoveryCircuitUi.js`: exports the existing shared tool artwork helper.
- `tests/village-impact.spec.js`: menu/map entry, token limits, unsuitable and lower-impact plans, preview requirements, all three maximum-impact plans, Help/Settings preservation, Retry, persistence, reentry and Game 14 access.
- `tests/unit/scienceLogic.node.js`: two-token and maximum-recovery rule coverage.

## Verification

```powershell
npm.cmd run build
node --test tests/unit/scienceLogic.node.js tests/unit/decantGeometry.node.js
npx.cmd playwright test tests/village-impact.spec.js --workers=1
```

Screenshots are saved in `screenshots/village-impact/desktop` and `screenshots/village-impact/mobile-width`. The game keeps the shared fixed canvas and scales to a narrow viewport.

Production build and all 16 separation/geometry checks passed. The complete Game 13 browser flow passed on desktop and a narrow viewport with no page or console errors. Reviewed screenshots cover installed services, previewed benefits, pottery recovery, final liquid/salt recovery and illustrated Help. Mission, recovered-amount and feedback labels were fitted to prevent overlap. Source and recovered-product icons remain distinct for decanting.

