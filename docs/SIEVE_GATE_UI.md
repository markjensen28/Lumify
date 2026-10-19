# Science Game 7: Sieve Gate

Updated from the supplied Sieve Gate UI reference on 12 October 2026.

## Layout and requested cleanup

The main activity uses the same laboratory, parchment header, purple controls, gold/navy result panel and shared navigation positions as Game 6. A large wooden sieve sits between a grain crate and a stone sack. Its wire mesh spacing changes with the opening value. Both output trays show the observed result of the last batch.

The enlarged mesh example and particle-size tip are **inside How to Play**, not on the main bench. This leaves room for the actual sieve and its controls.

- Main screen: current objective, samples and size labels, sieve, opening value, Smaller/Larger, Run a Batch, both output trays, feedback and Reset/Check or Retry/Next.
- How to Play: three short steps, a visual opening-4 example where size-2 grains pass and a size-6 stone stays, the scientist's particle-size tip, and the explanation that sizes are an enlarged model rather than millimeter measurements.
- Footer: short activity summary, three challenges, no timer.

### Design choices

Palette and Pixelify Sans typography reuse Game 6: navy #101B30, parchment #E9CF98, timber #5C350F, gold #F5C554, purple #4C2294 and green #256020. Cyan identifies outputs. The sieve is the main illustration; the right panel keeps both outputs and checking controls together.

```text
DAY / TITLE / CHALLENGE / SCORE / ? / SETTINGS
                current objective
crated grains | adjustable sieve | stone sack | passed tray
             mesh opening                    | retained tray
          smaller / larger                   | feedback
             run a batch                     | reset / check
BACK | short activity summary
```

| Navigation control | Center on the 1280 × 720 canvas |
| --- | --- |
| How to Play | 1135, 37 |
| Settings | 1209, 37 |
| Back | 46, 678 |

## Assets

Generated with the built-in image generation tool, using the supplied images as visual references. PNGs were inspected for alpha transparency and dimensions. Originals remain in the Codex generated-images directory; selected project copies are below.

| Project path | Mode | Use |
| --- | --- | --- |
| public/assets/ui/science-quarter/sieve-workshop/sieve-frame.png | Generate | Wooden hoop; its transparent center receives the live mesh |
| public/assets/ui/science-quarter/sieve-workshop/grain-crate.png | Generate | Input grains |
| public/assets/ui/science-quarter/sieve-workshop/stone-sack.png | Generate, then edit | Input stones |

Reused Game 6's laboratory and recovery-tray images, the existing pebble and sand-mound sprites, the scientist guide and the existing panel frame. Button text, mesh wires, grains, outputs and the Help diagram remain live Phaser objects.

Measured texture frames remove transparent padding at runtime. General sand-mound uses a Sieve-specific frame so its pile is readable in a tray without changing its appearance in other minigames. No Python image editing or raster cleanup was performed.

### Generation prompts

#### sieve-frame

Mode: generate. Transparent background: true. Input images: both supplied references, used for style and object perspective.

Reference images role: fantasy pixel-art style and sieve perspective only, never reproduce the UI. Generate ONE standalone empty wooden sieve FRAME for LUMIFY Sieve Gate. Three-quarter overhead view of a broad circular wooden hoop with visible thick front face, elliptical silhouette approximately 2:1 width to height. Warm honey-brown staves, readable dark grain and crisp highlights, a few steel bands with rivets on the outside. The central opening is completely EMPTY and genuinely transparent: no wire mesh, no bed, no sand, no stones. The game will draw adjustable wire mesh underneath this frame. Match the supplied handcrafted fantasy pixel art with deliberate square pixel clusters, clean outlines, limited color ramps, no photorealism or 3D render. One isolated centered frame, entire silhouette visible, about 90% of a wide horizontal canvas. Genuine alpha 0 both outside the frame and throughout the central opening. No text, labels, table, environment, extra objects or shadows outside the object.

#### grain-crate

Mode: generate. Transparent background: true. Input images: both supplied references, used for style and object perspective.

Reference images role: style and the left grain container only. Generate ONE standalone sample supply prop: a small rustic wooden crate tipped toward the viewer, filled with golden sand grains and spilling a short mound of sand onto its immediate front. Three-quarter overhead view, recognizable square crate, warm timber and yellow-gold grains. Fine grain clusters, with a few slightly larger cubical granules for clarity. The crate and its connected spilled sample form one isolated sprite. Authentic handcrafted LUMIFY fantasy pixel art, crisp square clusters and limited color ramps, match the reference, no smooth painting or 3D. Entire object fits in canvas, centered at 85% occupancy. Genuine transparent PNG alpha 0 outside the sprite. No sieve, stones, magnet, text, labels, UI, table, background or extra decorative objects.

#### stone-sack

Mode: generate. Transparent background: true. Input images: both supplied references, used for style and object perspective.

Reference images role: style and the right stone container only. Generate ONE standalone sample supply prop: a modest open tan burlap sack lying on its side, filled with rough cool-grey pebbles, with a few chunky pebbles spilling immediately out of its mouth. Three-quarter overhead view facing down-left, wide open mouth with dark interior, restrained cloth folds, grey stone pixel clusters with light upper-left highlights. Sack and its connected spilled sample form one isolated sprite. Match the attached polished handcrafted LUMIFY fantasy pixel art, crisp deliberate square pixel clusters, limited color ramps, no blurry antialiasing or smooth 3D. Entire silhouette visible, 85% canvas occupancy. Genuine transparent PNG alpha 0 outside the sprite. No sieve, sand, text, labels, UI, table, background or extra objects.

#### Stone sack revision

Mode: edit. Transparent background: true. Input: the initially generated stone-sack.png.

Edit target: the supplied stone sack sprite. Keep the sack, its opening, the grey pebbles, their arrangement and the crisp handcrafted fantasy pixel art unchanged. Remove ALL ambient glow, smoky haze and cast shadow around the outside silhouette. Every pixel outside the sack and stones must be completely transparent alpha 0, with no backdrop or halo. Restore crisp opaque pixel clusters inside the object, with no unnecessary semi-transparent painting. Exactly one isolated sack of stones on genuine transparent background. No text, labels or additional objects.

## Behavior preserved

- Three challenges: grains/stones of sizes 2/6, 3/7 and 4/8.
- Opening controls range from 1 to 10. A particle passes only when it is smaller than the opening.
- Changing the opening clears the last batch's outputs. Run a new batch to inspect the new result.
- Too large: both materials pass. Too small: both stay on the mesh. A successful separation passes the grains and retains the stones.
- Check Result requires a successful observed batch. Retry replaces the previous challenge score; completion saves lesson progress.
- Help and Settings preserve experiment state and block background controls.
- The enlarged example illustrates the rule; it is not a separate activity or a second main-screen mesh.

## Verification

Final results: production build passed, all 10 Science unit tests passed, and all 4 focused Game 6/Game 7 Playwright tests passed across desktop and narrow viewports. The existing bundle-size advisory remains.

- Production build and the Science unit suite.
- Focused Playwright flow on desktop and a 390-pixel-wide viewport: real menu/map/lesson entry, fixed navigation, illustrated Help, modal state preservation, invalid batches, minimum opening, result invalidation, reset, all three challenges, retry scoring, saved progress, revisit and entry into Game 8.
- Game 6 regression on both viewports because the workshop skin and scene routing are shared.
- Unit coverage for the size boundaries, including equal-size particles and clearing old observations.
- Screenshots checked for main-screen layout, Help layout and both output trays.

### Saved screenshots

Each viewport's screenshots are under screenshots/sieve-workshop/desktop or screenshots/sieve-workshop/mobile-width:

- initial.png
- how-to-play.png
- opening-too-large.png
- opening-too-small.png
- separated.png
- completed.png

As in the other games, a narrow portrait viewport fits the existing 16:9 canvas; it does not use a separate portrait layout.

