# Vulcan Workshop Revival — Science Game 20

Implemented 13 October 2026 from the user's reference. Play **Vulcan Caverns → Quarter 1 → Mixtures and Separation in Action → fifth lesson** (`q1-m4-l5`). All twenty Q1 lessons are now playable. The added Q2–Q4 lessons remain empty.

## Mission and reference

The existing parchment header, navy/gold frames, cyan section titles, purple controls, gear icon, help, and back navigation carry the supplied visual family. The left workboard contains three workshop regions and the Observe → Separate → Use Material sequence. Each region switches between generated damaged/restored artwork when its actual recovered material is applied. Completed repairs remain visible during the following challenges. The right mission record shows the initial mixture, methods actually used, recovered product, a real writing field, and grouped Reset/Check controls.

The reference's large workshop panorama is presented as three adjacent region views within the game's 1280×720 frame. The lower bench displays the input, recent methods, and selectable live outputs. There is an explicit Apply Tool control and an Apply Material control. The result panel's target product is dimmed until recovered; the bench shows the actual available outputs. The game stays untimed and uses the established scaled landscape canvas in a narrow browser viewport.

## Three linked repairs

| Repair | Prepared sample | Recovery and use |
| --- | --- | --- |
| Workbench | Iron + sand | Magnetic separation recovers iron fasteners for the workbench brackets; unused sand remains accounted for. |
| Courtyard | Stones + sand + water | Sieving and paper filtration recover usable sand. Sieve/filter and filter/sieve orders work when the correct output is processed. Stones and liquid remain separate. |
| Storage | Sand + saltwater | Filtration retains damp sand and passes dissolved salt with water. Evaporation of the filtrate leaves dry salt and releases water as vapor. Both sand and salt must exist before restocking their separate stores. |

Observe records visible components and the preparation evidence for each non-uniform sample. Dissolved salt is identified by the preparation record, not by invented visible crystals. Both separation outputs stay in inventory; applying a recovered product transfers it to the repair rather than duplicating it. Premature evaporation preserves mixed sand/salt in the dish and directs the player to reset. Clear liquid is not labeled drinking water.

Each repair needs a 20–180 character explanation. The automated check validates observation, recovery, application, and writing completeness. It does **not** judge the explanation's meaning or award automatic mastery. `reviewRequired: true` is saved on every record and the activity. The JSON download includes input materials, actual method history, products used, unused outputs, repair progress, and the original explanation.

Reset/Retry clears only the current repair and its current score, retaining earlier saved repairs. Help and Settings hide the writing field and preserve all state. Back returns to the original map scroll position and removes the DOM field. A fresh replay starts with a damaged workshop; saved reports remain available in browser storage. Storage failures are reported in the session.

## Generated artwork

Built-in image generation was used, without CLI/API fallback. Final project asset: [repair-regions.png](../public/assets/ui/science-quarter/workshop-revival/repair-regions.png). The original remains at `C:/Users/rotse/.codex/generated_images/01a133af-746e-77b1-a00a-633e094ae818/exec-82e9580a-e4cb-4c49-a24f-66613ae4180a.png`.

Measured PNG: **1536×1024, opaque RGB**, three 512×512 columns and two rows, no gutters. Top row: damaged workbench/courtyard/storage. Bottom row: restored counterparts. BootScene creates matching central crops from the measured source dimensions. Existing transparent apparatus/material sprites supply the experiments. The generated image contains no interface labels; all game text remains live Phaser/DOM text.

Exact generation prompt:

> Create a production pixel-art sprite atlas for a fantasy educational game, landscape canvas exactly 1536 x 1024, split into EXACTLY 3 equal columns and 2 equal rows (each tile 512x512), no gutters or borders. SIX square scene tiles. No text, no numbers, no letters, no UI, no people. Warm amber lanterns, dark blue stone walls, rich brown wood, green small plants, precise chunky pixels and crisp edges, same cozy Vulcan alchemy workshop style. All six tiles are seen frontally with mild isometric depth. TOP ROW = three areas needing repair, BOTTOM ROW = exactly matching repaired variants of the same three areas. Left column: a broken wooden workbench with loose detached metal corner brackets and a sagging table, bottom counterpart restored level sturdy workbench with attached iron brackets and neatly arranged tools. Middle column: stone courtyard inside workshop, central broad patch of broken uneven stones and holes, arched blue-night window in back, bottom counterpart level neatly repaired tan sand-and-stone courtyard paving; identical lighting and architecture. Right column: damaged empty wooden storage shelves with loose boards and open spilled sacks, bottom counterpart neatly reinforced organized shelves with a large closed tan sand sack and a sealed white salt jar, no food symbols. EACH tile needs the main repair subject visible large, full scene extends to edges, consistent viewpoint top and bottom. Keep all content within its own exact 512 square cell. This atlas is used to flip each region from needing repair to restored in a playable game. Pixel illustration only, not painterly or realistic.

## Implementation and verification

- `src/games/science/workshopRevivalLogic.js`: observations, conserved output streams, product transfers, repair gates, and explanation completeness.
- `src/ui/workshopRevivalUi.js`: live mission, workshop artwork, selectable outputs, help, and results.
- `src/scenes/ScienceAdventureScene.js`: shared scene, native writing field, linked repair progression, local records, and JSON export.
- `src/config/scienceQuarterGames.js`: lesson registration and integrated Q1 competency metadata.
- `src/scenes/BootScene.js`: generated atlas load and matched region frames.

Verification commands:

```powershell
node --test tests/unit/*.node.js
npm.cmd run build
npx.cmd playwright test tests/workshop-revival.spec.js tests/fair-test.spec.js --workers=2
```

Browser checks use the real menu/world/island/quarter route on desktop and narrow viewports. They cover all three repairs, output selection, alternative process order, premature evaporation, Retry score replacement, earlier-repair preservation, modal writing protection, local saved explanations, JSON download, and scene teardown. Captures include initial, observed, help, courtyard recovery, all applied repairs, and the finished workshop. The neighbor Game 19 is included as a regression check. Predecessor tests now expect Game 20's live preview instead of an empty placeholder.

Previews: [desktop](../screenshots/workshop-revival/desktop) and [narrow viewport](../screenshots/workshop-revival/mobile-width).

The final source and artwork consistency pass confirmed that this extension reuses the adjacent Vulcan games' navy/gold panels, parchment fields, pixel typography, controls, and shared navigation. It retains the 760/472 workboard/record split and the established 1280×720 FIT canvas. The review fix batch fitted the courtyard's initial-mixture label, separated the help illustration from its instructions, and preserved damp solids through filter→sieve as well as sieve→filter. The production build and all 41 unit tests passed after those changes. The first browser batch passed all four Game 20/Game 19 desktop/narrow checks; final Game 20 confirmations passed on both viewports. The finish review returned **ship**, scoring all three named fixes resolved against sixteen refreshed captures; this is a verdict on those fixes, not a claim of pixel-exact reference fidelity. The PNG provenance scan reported one raster and zero missing prompts. Missing root product/design documents are pre-existing and were left unchanged.
