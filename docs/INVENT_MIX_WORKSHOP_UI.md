# Invent-a-Mix workshop UI

Minigame 5 follows the supplied Day 5 workshop reference at the game's native 1280 × 720 resolution.

## Layout and controls

- Shared Day 5/header design from Minigame 3, with current creativity score and total score side by side.
- Creation number, custom creation name and mission in a lower panel beside the trophy/rewards.
- Twelve ingredient slots per mission. Click to toggle an ingredient or drag it into the central cup; select up to three ingredients.
- Lab-window mixing station, generated empty/filled cup artwork and mixing status.
- Expanded parchment form with a keyboard-editable name (25 characters), classification buttons, and larger appearance/use dropdowns.
- Inline results with a generated trophy. Preview and scientist instruction panels are removed; visual instructions remain in How to Play.
- Retry for incomplete answers and Next Mission/Finish after presentation, grouped inside the rewards panel. A compact game summary occupies the footer. The repeated score-category strip is removed; scoring itself is unchanged.
- Top question button opens How to Play. Gear opens music/SFX settings. Escape closes overlays; Escape/Enter leaves the name field.

The paired header counters show the current creation (45 maximum) and the total across all three creations (135 maximum). The existing scoring, retry and post-game assessment flow are preserved.

## Artwork

Generated transparent PNGs live in `public/assets/ui/invent-workshop/`:

- `empty-cup.png`
- `energy-cup.png`
- `trophy.png`

Prompts: `output/imagegen/invent-workshop/prompts.md`.

The interface reuses the supplied ingredient sprites, `detective-sample-stage` backdrop and `court-panel-frame` frame. Snack ingredients remain visibly separate, and the paint mission retains its oil/water layer evidence. Incorrect recipes display their selected ingredients rather than the intended finished drink.

## Verification

- `tests/invent-controls.spec.js`: drag into the cup, selection cap, name length/editing, help while typing, dropdown cancel/selection, settings/help state preservation and inline rewards.
- `tests/smoke.spec.js` workshop scenario: partial score, retry, three perfect creations, total 135 and final assessment navigation.

Preview: `screenshots/invent-workshop-reference.png`.

Navigation now follows `docs/MINIGAME_NAVIGATION.md`; the decorative inventor-level badge was removed to reserve room for the shared controls.
