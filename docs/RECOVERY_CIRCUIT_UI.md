# Science Game 12: Recovery Circuit

Updated from the supplied reference on 12 October 2026.

## Layout

The left circuit board connects a process input to its separation tool and two outputs using gold arrows. Select an available stream to process it; a gold outline marks the selection. After a process, the diagram shows that process's input and both outputs. Selecting a recovered product in the goals panel lets players revisit its parent process. Consumed intermediate streams are labeled **Processed** and cannot be selected for another operation.

Below the diagram, a visual process record preserves the input, tool and both outputs of the two separation steps. Five tool cards use the shared workshop artwork. Selecting a card previews a choice; **Apply Tool** executes it. Changing the selected stream clears the previous tool choice.

The right panel groups recovery goals with Pending/Recovered status, the selected stream and chosen next tool, feedback, and Reset/Check or Retry/Next controls. Water vapor uses **Accounted** and **Not collected** labels. The footer summarizes the activity.

The warm laboratory, parchment title, navy/gold frame, purple controls and Pixelify Sans reuse the shared design. Examples and science notes are in illustrated How to Play.

| Navigation | Center on the 1280 × 720 canvas |
| --- | --- |
| How to Play | 1135, 37 |
| Settings | 1209, 37 |
| Back | 46, 678 |

## Scientific interactions

| Challenge | Input | Recovery goal | Example valid sequence |
| --- | --- | --- | --- |
| 1 | Iron + sand + water | Separate iron, sand and liquid water | Magnet, then filter the sand-and-water output; alternatively filter first and apply a magnet to the iron-and-sand residue |
| 2 | Stones + sand + water | Separate stones, sand and liquid water | Sieve, then filter the sand-and-water output; filtering then sieving the dry residue also works |
| 3 | Sand + salt + water | Separate sand and salt; account for water vapor | Filter insoluble sand, then evaporate the saltwater output |

Every operation retains both outputs. Unsuitable operations do not consume or change the stream. A singleton output needs no further separation. Dissolved salt is not illustrated as visible grains in saltwater and passes through paper filtration with the water. Evaporation leaves solid material and releases vapor; it does not collect liquid water. Decanting is deliberately not accepted as perfect separation of these sand-and-water streams; its partial recovery is practiced in Game 10.

There is no timer. Help and Settings preserve streams and the pending tool choice. Completed circuits allow inspecting recovered products, while Apply Tool and tool selection remain locked. Retry replaces a challenge score without adding duplicate points. All three challenges save to lesson `q1-m3-l2`.

## Artwork

Generated with the built-in image generation tool:

| Project file | Mode | Use |
| --- | --- | --- |
| public/assets/ui/science-quarter/recovery-circuit/water-drop.png | Generate, transparent background | Liquid-water product and recovery-goal icon |

The original remains in the Codex generated-images directory. The project PNG measures 1254 × 1254 pixels with genuine alpha (corner alpha 0). Measured visible bounds are `[234, 104, 787, 1072]`; runtime trimming removes padding without changing the file.

The existing empty beaker, magnet, sieve, funnel, evaporation apparatus, jar, nails, pebbles, sand, salt, laboratory, panel frame and scientist were reused. Water contents and vapor cues are live Phaser graphics; material sprites are composed from each stream's actual parts. These images explain component tracing, not fluid physics.

### Final generation prompt

Create exactly one standalone water droplet icon sprite for LUMIFY: Lumi Adventures, a 2D fantasy pixel-art educational game. A single plump bright blue water drop, pointed at top and rounded at bottom, slightly three-quarter volume with crisp white highlight clusters on upper left, cyan middle and deep navy outline and lower-right shading. Authentic handcrafted 32-bit-inspired fantasy pixel art, deliberate square pixel clusters, clean outlines, limited blue/cyan/white color ramps. Native design detail approximately 64x64 pixels, strong readable silhouette, no smooth gradients, no excessive anti-aliasing, consistent pixel sizes. Centered one isolated water drop occupying 80 percent of canvas. Genuine fully transparent PNG background with alpha 0 outside the silhouette. No text, labels, watermark, separate splash droplets, container, floor shadow, environment, colored or checkerboard backdrop, 3D rendering or blurry edges. Match polished retro fantasy laboratory educational game sprites.

## Implementation

- `src/ui/recoveryCircuitUi.js`: live circuit diagram, material compositions, visual process record, tool selection, recovery goals, results, and illustrated Help.
- `src/games/science/scienceLogic.js`: queued tool choice, explicit application and parent-stream IDs in process records; existing separation rules and direct tool-action API are retained.
- `src/config/recoveryCircuitArtwork.js`: measured drop frame.
- `src/scenes/BootScene.js`: loads the workspace asset.
- `src/scenes/ScienceAdventureScene.js`: shared workshop skin and Game 12 Help/results.
- `src/games/science/communityViews.js`: routes Game 12 to its new renderer.
- `tests/science-quarter.spec.js`: broad quarter flow now clicks Apply Tool after choosing a Game 12 tool.
- `tests/recovery-circuit.spec.js`: actual menu/map/lesson entry, pending choices, modal preservation, unsuitable tools, wrong evaporation route, all three challenges, both valid Game 12 challenge-1 orders, component conservation, completed-product inspection, Retry scoring, persistence, reentry, and Game 13 access.

## Verification

```powershell
npm.cmd run build
node --test tests/unit/scienceLogic.node.js tests/unit/decantGeometry.node.js
npx.cmd playwright test tests/recovery-circuit.spec.js --workers=1
```

Previews are saved in `screenshots/recovery-circuit/desktop` and `screenshots/recovery-circuit/mobile-width`.

Results: production build passed; all 15 separation/geometry unit checks passed; the complete Game 12 browser flow passed on desktop and a narrow viewport with no page or console errors. Reviewed screenshots include pending choices, connected branches, alternative process order, final vapor accounting and illustrated Help. The final Help note was shortened to keep its title and explanation separated.

