# Shared minigame navigation

All five minigames use `src/ui/minigameNavigation.js` for these controls. Positions are logical coordinates on the 1280 × 720 game canvas.

| Control | Position | Size | Reference |
| --- | --- | --- | --- |
| Back | Bottom left, (46, 678) | 62 × 56 | Minigame 3 |
| How to Play | Top right, (1135, 37) | 52 × 48 | Minigame 2 |
| Settings | Top right, (1209, 37) | 58 × 54 | Minigame 2 |

The controls have matching purple frames, consistent icons and full-size hit areas. Game headers reserve the top-right control area; main content and footer actions leave the bottom-left area clear.

## Cleanup

- Minigame 1 retains its original 4 × 3 card board and card faces. Its Day 1/title/timer/score header now matches the other minigames. The four-set progress display and feedback have their own space.
- Minigame 2 keeps Hint, removes Pause and its P shortcut, and has a bottom summary beside Hint.
- Minigame 3 removes Hint, Pause and the P shortcut. Help and Settings preserve the selected answer. A bottom summary explains the compare-and-submit task.
- Minigame 4 removes Case Files, the case-reward counter, audience and reaction bar. Evidence uses the whole right column with taller cards and larger labels. Next Case/Finish and Retry share the verdict panel. The footer contains a short task summary.
- Minigame 5 removes the preview, scientist instruction panel, and score breakdown. Current creativity and total scores sit beside each other in the header. The creation name and mission sit beside the trophy/rewards below the ingredient shelf and mixing station, while the description form extends downward with larger fields. Next Mission/Finish and Retry share the rewards panel; a short summary occupies the footer.

## Shared header

`src/ui/minigameHeader.js` applies Minigame 3's parchment title, brown day panel, and counter frames to all five games. The day panel contains only the day and a short text detail, with no decorative icon. The title lane, counter lane, and navigation lane stay in the same places. Each game supplies its own title and real counters.

## Illustrated help

`src/ui/minigameHelp.js` uses a shared three-step layout with game-specific figures: matching cards, sorting bins, sample comparisons, evidence cards, mixing ingredients, the scientist and trophy. The Quick Tip panel compares actual uniform/non-uniform sample sprites. Court case tips remain available here.

Timers stop while Help or Settings is open. Closing either overlay preserves the active cards, choices, recipe, and score. Back returns to the quarter lesson map.

## Verification and previews

`tests/minigame-navigation.spec.js` enters all five games through the normal lesson flow, checks identical control positions, verifies both overlays preserve selections and freeze timers, and uses Back to return to the lesson map. Existing Court and Invent controls tests cover the affected footer and result flows.

Current previews: `screenshots/minigame-navigation/minigame-N-navigation.png` and `minigame-N-illustrated-help.png` (N = 1–5).
