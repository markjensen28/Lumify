# Science Court reference UI

Minigame 4 follows the supplied courtroom reference with gold and wood frames, a purple case banner, parchment decision and defense panels, a central sample and clue clipboard, a spacious three-column evidence grid, an inline judge verdict with Retry and Next Case / Finish, and a compact bottom task summary.

The supplied judge and mixture sprites are reused. The laboratory display from Minigame 3 sits behind the exhibit. The audience and reaction bar were removed to make room for taller evidence cards and larger labels.

## Interaction

- Classification and evidence cards update the defense fields.
- The defense dropdowns can also select classification and evidence. Duplicate evidence is blocked, and the original two-card or two-to-three-card limits apply.
- Submit produces an inline accepted, partial, or objection verdict. Retry clears the active case; Next Case advances after a verdict. Finish opens the existing final result and assessment flow.
- Settings controls music and SFX and offers Exit. The top question button opens How to Play.
- The original scoring remains: ten classification points, up to ten evidence points per case, a hundred total credibility points, and eighty required to win.
- Case progress and total credibility stay in the header. Case Files, the case-reward counter, and duplicate footer case buttons are removed; the footer contains a short task summary.

## Generated assets

Generated using the built-in image_gen tool and saved to `public/assets/ui/science-court/`:

- `panel-frame.png`: dark walnut panel with bronze corners and a fine gold rim, reused with Phaser nine-slice sizing.
- `audience.png`: five students in the gallery.
- `scales.png`: gold balance-scales emblem.
- `magnifier.png`: cyan and gold magnifying glass for classification and evidence.

Exact prompts are in `output/imagegen/science-court/prompts.md`. Runtime text, hit zones, highlights, check marks, and simple glyphs remain separate from generated artwork.

## Verification

- `tests/smoke.spec.js`: objection, retry, five accepted cases including three evidence cards, final result, assessment, and return.
- `tests/court-controls.spec.js`: defense dropdowns, evidence cap, help/settings preservation and partial-verdict actions, inline verdict, and the Shampoo reference preview.

## Navigation cleanup

See `MINIGAME_NAVIGATION.md` for the shared Back, Help and Settings positions, common parchment header, and illustrated help layout. The day panel has no decorative icon. Current navigation previews are in `screenshots/minigame-navigation/`.
