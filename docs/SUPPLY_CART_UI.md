# Supply Cart UI reference

Minigame 2 now follows the supplied Sort the Supply Cart reference: the shared parchment
title header from Minigame 3, compact progress bar, physical sorting bins, a conveyor
with parchment item cards, and a persistent use-check sidebar. Text, scores,
timer, progress segments and feedback are live Phaser objects.

## Generated artwork

`public/assets/ui/supply-cart/` contains five transparent PNGs:

| Asset | Native canvas | Purpose |
| --- | --- | --- |
| bin-blue.png | 164 × 112 | Uniform sorting bin |
| bin-green.png | 164 × 112 | Non-uniform sorting bin; matching blue-bin geometry |
| conveyor.png | 448 × 88 | Empty belt underneath the draggable item cards |
| item-card.png | 64 × 60 | Blank parchment card face |
| guide.png | 80 × 88 | Lab guide in the instructions and feedback |

Built-in image generation used the supplied reference and LUMIFY pixel-art
style. Generated masters and exact prompts are in `output/imagegen/supply-cart/`.
Exports use nearest-neighbor reduction and binary alpha for clear pixel edges.
The existing ingredient/mixture PNGs remain the item illustrations.

## Controls and progression

- Drag the highlighted item into a bin, or select it and click a bin.
- Choose its everyday use on the right; sorting and use scores remain +10/+5.
- The top question-mark button opens How to Play. The lab guide, three-step
  instructions and quick tip live there; the timer stops while it is open.
- Progress counts 12 items. Six waiting items appear on the conveyor at once;
  finishing an item brings the next one into view. Streak reflects consecutive
  correct use answers. Duplicate bottom counters have been removed.
- Pause and the P shortcut are removed. A short game summary fills the footer beside Hint.
- Three hints are available per run; their modal freezes the timer too.
- Settings changes the existing music/SFX preferences and freezes the timer.
- The left arrow returns to the lesson map. Result and assessment flow continue
  through the existing shared modal system.

The shared `src/ui/minigameHelp.js` also supplies top question-mark buttons and
game-specific instructions for minigames 1, 3, 4 and 5. Escape closes help and
returns to the current activity. Opening help does not consume a hint.

## Navigation cleanup

See `MINIGAME_NAVIGATION.md` for the shared Back, Help and Settings positions, common parchment header, and illustrated help layout. The day panel has no decorative icon. Current navigation previews are in `screenshots/minigame-navigation/`.
