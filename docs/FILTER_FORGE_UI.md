# Science Game 8: Filter Forge

Updated from the supplied Filter Forge reference on 12 October 2026.

## Layout

A large framed laboratory bench occupies the left side. The source sample sits beside a double iron support stand. Players click or drag the receiving jar and paper-lined funnel into their marked slots, then pour the sample. The emptied source beaker, curved transfer arrow, droplets, residue and receiving liquid make the outputs visible.

The right panel keeps the desired material, **On Paper / In Liquid** choices, observation feedback, and Reset/Check or Retry/Next together. The selected output stays green after checking. Existing shared parchment header, typography, purple navigation and activity footer are retained.

| Navigation | Center on the 1280 × 720 canvas |
| --- | --- |
| How to Play | 1135, 37 |
| Settings | 1209, 37 |
| Back | 46, 678 |

Tips stay inside illustrated How to Play, alongside the scientist. The main footer provides a short activity summary and states that the three challenges have no timer.

## Experiments and interaction

| Challenge | Desired material | Correct output | Visible result |
| --- | --- | --- | --- |
| Sand + water | Sand | On paper | Sand residue; liquid in receiving jar |
| Saltwater | Dissolved salt | In liquid | Empty paper; salt travels with the water |
| Clay + water | Insoluble clay | On paper | Clay residue; liquid in receiving jar |

- Pouring requires both apparatus pieces.
- Each part accepts its own drag destination; wrong-slot and outside drops return the card.
- Clicking is an alternative to dragging.
- Output selection becomes available after pouring.
- Help and Settings preserve the apparatus, poured state and answer.
- Reset clears the current experiment. Retry replaces the current challenge's score.
- Three successful first attempts earn 75 points; results save under lesson `q1-m2-l3`.
- The receiving liquid does not imply drinking-water purification. This distinction appears in How to Play.

## Assets

Three new transparent PNGs were generated with the built-in image generation tool, using the user's reference for style and perspective. Originals remain in the generated-images folder; project copies are in `public/assets/ui/science-quarter/filter-workshop/`.

| File | Purpose | Alpha frame: x, y, width, height |
| --- | --- | --- |
| filter-stand.png | Double iron support and timber base | 52, 105, 1057, 1162 |
| filter-funnel.png | Empty pleated paper inside a glass funnel | 71, 82, 1083, 1150 |
| filter-beaker.png | Empty glass, allowing live liquid beneath | 87, 178, 952, 1054 |

All outer corners have alpha 0. Measured frames trim padding at runtime without modifying the source images. The warm laboratory, panel frame, sand mound and scientist were reused. Labels, arrows, liquids, particles, radios and buttons remain live Phaser objects.

### Generation prompts

Mode for all three: generate with the supplied reference, transparent background true.

#### filter-stand

Reference image role: visual style, perspective and the filtration support stand only. Create ONE standalone support stand for LUMIFY Filter Forge, authentic polished fantasy pixel art with crisp square pixel clusters and limited color ramps. Front three-quarter view of TWO slender dark blue-black iron uprights on a broad low wooden base, with side clamps and a horizontal ring/support near the top for a glass funnel. The large central space is EMPTY and truly transparent; the game will separately place a funnel near the top and receiving beaker below. Approximate silhouette width-to-height ratio 0.85:1. No funnel, paper, glass jar, liquid, sediment, labels, text, UI, surrounding furniture or environment. Entire stand and base fit in canvas with small transparent padding. Genuine alpha 0 outside and throughout the open center. No glow, haze, smooth 3D, photographic rendering or cast shadow outside the sprite.

#### filter-funnel

Reference image role: fantasy pixel-art style and the paper-lined funnel only. Generate ONE isolated clear pale-blue glass filtration funnel with a wide upper cone and long narrow downward stem. A pleated white filter-paper cone lines its upper bowl; the paper rim is broad and scalloped, the interior paper floor is visible and completely empty. Front three-quarter view matching the provided filtration apparatus. Crisp handcrafted LUMIFY fantasy pixel art, clean square pixel clusters, simple blue-white glass highlights, limited color ramps. Approximate width-to-height silhouette 1:1.1. No stand, jar, liquid, sand, clay, residue, droplets, arrows, words, labels, UI, table or environment. Genuine alpha 0 outside the isolated object. Complete funnel and stem fit in canvas, no external glow/shadow or smooth rendering.

#### filter-beaker

Reference image role: fantasy pixel-art style and the glass beakers only. Generate ONE standalone completely EMPTY transparent glass laboratory beaker, front three-quarter view, slightly elliptical open rim, short pouring lip, sturdy rounded clear bottom and a few SHORT WHITE TICK MARKS without any numbers. Crisp square pixel clusters, pale-blue and white edges and highlights, polished handcrafted LUMIFY fantasy pixel art. Approximate silhouette width-to-height 0.8:1. The broad interior glass wall must be genuinely transparent, with only a few restrained translucent highlights, so live colored liquid can be drawn BEHIND the beaker by the game. NO liquid, solid particles, lid, paper, funnel, stand, text, numbers, labels, UI, environment, dark backdrop or external shadow/glow. Exactly one empty beaker, full silhouette visible with small transparent padding. Genuine alpha 0 outside and in most of the clear interior.

## Implementation

- `src/ui/filterWorkshopUi.js`: apparatus, sample visuals, part cards, choices and result controls.
- `src/config/filterArtwork.js`: measured texture frames.
- `src/scenes/BootScene.js`: image loading and frames.
- `src/scenes/ScienceAdventureScene.js`: shared workshop skin, illustrated Help and result routing.
- `src/games/science/separationViews.js`: delegates Filter Forge rendering to its workshop module.
- `src/ui/magnetWorkshopUi.js`: reusable red/choice button palettes and selected-color preservation.
- The existing filtration rules, lesson progression and local saves remain the activity's state model.

## Verification

Production build and all ten existing science unit tests pass. The focused browser test follows the actual menu/world/lesson entry route on desktop and at a 390-pixel viewport. It checks assembly through clicks and drags, invalid drops, incomplete pouring, disabled early answers, wrong output, all three correct outputs, reset/retry scoring, modal state preservation, saved progress, re-entry, navigation and access to Game 9. Game 7's desktop regression checks the shared workshop controls.

Reviewed screenshots: [desktop](../screenshots/filter-workshop/desktop) and [narrow viewport](../screenshots/filter-workshop/mobile-width). Each contains the initial layout, Help, assembled apparatus, wrong output, sand residue, salt filtrate and completed activity.

```powershell
npm.cmd run build
node --test tests/unit/scienceLogic.node.js
npx.cmd playwright test tests/filter-workshop.spec.js --workers=1
npx.cmd playwright test tests/sieve-workshop.spec.js --project=desktop --workers=1
```
