# Science Game 14: Broken Separator Lab

Updated from the supplied reference on 12 October 2026.

## Layout

The left experiment bench compares a permanent **Failed Baseline** with the **Latest Test**. Each panel shows recorded settings, an illustrated process and its observed output. The lower bench contains the current controls: sieve opening, separation method, or settling and tilt. **Run Controlled Test** records a trial; changing settings alone does not change the displayed evidence.

The right **Test Log** compares the baseline with a recorded trial. Previous/next controls browse older trials while the Latest Test panel stays on the newest observation. A scientist panel explains the next action or the restored community benefit. Reset/Check Result and Retry/Next Challenge share its bottom row.

The parchment header, warm laboratory, navy experiment panels, purple controls, green Check Result, lower-left Back button and summary footer follow the shared Science layout. Examples and scientific notes are in illustrated How to Play.

| Navigation | Center on the 1280 × 720 canvas |
| --- | --- |
| How to Play | 1135, 37 |
| Settings | 1209, 37 |
| Back | 46, 678 |

## Experiments

| Challenge | Failed baseline | Controlled repair | Useful outcome |
| --- | --- | --- | --- |
| 1 | Opening 9 lets size-2 grains and size-6 stones pass | Change only the opening, then test an opening greater than 2 and no greater than 6 | Sand passes while stones stay on the mesh; sand can be reused for building |
| 2 | Paper filtration does not recover dissolved salt | Change only the method to evaporation, then test | Salt remains as a useful product; water leaves as vapor and is not collected as liquid |
| 3 | Unsettled sample poured at 40° carries sediment | Test sufficient settling first; keep settling unchanged and test a gentle 10–30° tilt next | Upper liquid pours while settled sand stays behind |

Each trial records its complete settings and changed variable. Several clicks adjusting the same setting still change one variable. Changing two settings before a trial is rejected without adding a test-log entry. Reverting one pending setting lets the player proceed with a single-variable trial. Reinstating settings from the latest successful trial restores the already-observed evidence.

The diagrams illustrate controlled outcomes rather than laboratory fluid physics. Mesh sizes are enlarged model units. A separate liquid is not automatically safe to drink. There is no timer.

Help and Settings preserve pending changes and recorded trials. Completing a challenge locks experiment controls, while the test log remains inspectable. Retry replaces the current challenge score. All three challenges save to lesson `q1-m3-l4`.

## Artwork

No new generated artwork was necessary. This update reuses the previously generated laboratory, transparent sieve frame, pebble, filter funnel and beaker, evaporation apparatus, glass jar and scientist. Existing sand and salt sprites supply the recovered materials.

The sieve grid, falling grains, output arrows, water surfaces, suspended sediment, vapor and status badges are live Phaser graphics. Grid spacing follows the recorded opening. Pouring reuses the Game 10 jar geometry so liquid surfaces stay level during tilting. Dissolved salt is not depicted as visible grains in the solution.

## Implementation

- `src/ui/brokenSeparatorUi.js`: baseline/latest diagrams, experiment controls, browsable test log, scientist feedback, results and illustrated Help.
- `src/games/science/scienceLogic.js`: baseline settings, observed output descriptions, recorded-setting comparisons and controlled-test validation.
- `src/ui/decantWorkshopUi.js`: exports the existing jar and pour-stream renderers for reuse.
- `src/scenes/ScienceAdventureScene.js`: Game 14 workshop skin, fitted mission, Help and results.
- `src/games/science/communityViews.js`: routes Game 14 to its new renderer.
- `tests/broken-separator.spec.js`: real menu/map entry, modal preservation, immutable records, rejected two-variable trials, log browsing, all three repairs, Retry scoring, persistence, reentry and Game 15 access.
- `tests/unit/scienceLogic.node.js`: recorded-settings, undo, limits and controlled-test contracts.

## Verification

```powershell
npm.cmd run build
node --test tests/unit/scienceLogic.node.js tests/unit/decantGeometry.node.js
npx.cmd playwright test tests/broken-separator.spec.js --workers=1
```

Screenshots are saved in `screenshots/broken-separator/desktop` and `screenshots/broken-separator/mobile-width`. The fixed game canvas scales to a narrow viewport.

The production build and all 17 separation/geometry checks passed. The complete Game 14 browser flow passed on desktop and a narrow viewport with no page or console errors. Reviewed screenshots include a successful sieve repair, pending changes, older trial evidence, recovered salt, a rejected two-variable change, settling alone and the final gentle-pour repair. Diagram output spacing and Help examples were adjusted to keep sprite silhouettes clear of text.
