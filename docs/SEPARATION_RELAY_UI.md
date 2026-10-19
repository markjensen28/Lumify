# Separation Relay — Science Game 18

Implemented 13 October 2026 from the supplied reference. Play **Vulcan Caverns → Quarter 1 → Mixtures and Separation in Action → third lesson**. [Game 19](FAIR_TEST_ARENA_UI.md) now occupies the fourth lesson; Game 20 and the additional Q2–Q4 lessons remain empty placeholders.

The reference's warm workshop, specimen jar, checkpoint strip, central apparatus, selectable output, Carry Filtrate button, and product recovery rack are separate Phaser objects. The interface retains shared Help, Settings gear, Back, challenge/score display, Reset/Retry, and untimed play.

## Controls and challenges

Choose one of five tools, then operate it. Pure solids automatically remain in the recovery rack; liquid water is kept and water vapor is accounted for. Select a mixed output and use **Carry Sample / Carry Filtrate** before operating another tool. If two mixed outputs exist, both remain available. Switching branches puts the current carried sample back into the pending outputs. Check Result enables only when every requested solid is separate and no mixture remains pending.

| Challenge | Input | Requested products | Example route |
| --- | --- | --- | --- |
| 1 | Iron + sand | Iron and sand | Magnet |
| 2 | Stones + sand + water | Stones and sand; track water | Sieve → carry → filter |
| 3 | Iron + sand + saltwater | Iron, sand, dry salt | Magnet → carry → filter → carry filtrate → evaporate |

Scientifically workable alternative orders count. Filtering first in challenge 2 leaves mixed stones/sand to sieve. In challenge 3 it leaves both mixed iron/sand residue and saltwater filtrate: the learner can carry either branch first, then return to the other. Recovery uses actual output components rather than matching a prescribed sequence.

The discrete model tracks components, not quantitative yield or moisture content. Insoluble solids remain on filter paper; dissolved salt passes with water and is never pictured as visible grains in solution. Evaporation removes water as uncollected vapor. Heating the original sand/saltwater mixture leaves mixed solids, not purified salt. Decantation is imperfect and does not fully recover these products in this activity; Game 10 provides its detailed simulation. Sieve mesh is authored to retain stones and pass sand. Filtered liquid is not labeled safe to drink. Alignment: `S6MT-Id-f-2`.

## Artwork

No new generation was needed. Reused the existing workshop backdrop, Game 16 empty glass jar, magnet, sieve, iron, pebbles, sand, salt, recovery tray, Filter Forge apparatus, Salt Crystal Watch apparatus, and Steady Pour jar. Contents, badges, selection borders, labels, and state feedback are rendered independently. Original image files remain unchanged. The [existing reference-screen prompt](art-direction/SCIENCE_CAPSTONE_UI_REFERENCE_PROMPTS.md) remains available for future design work.

## Saving and verification

Completed records use `lumify-science-q1-v1`, lesson `q1-m4-l3`. They preserve every operation's actual input and both outputs, recovered products, and water accounting. Retry replaces the challenge score; a fresh visit starts a new practice sample.

Pure tests cover conservation at each operation and carry, both branch processing orders, switching samples, incompatible methods, required carry selection, and premature evaporation. Browser tests enter through the real map and cover all three challenges, disabled actions, Help/Settings guards, alternate routes, both pending branches, Retry scoring, saved progress, Back, and the Game 20 placeholder at desktop and narrow widths. Games 16 and 17 also receive browser regression checks.

```powershell
npm.cmd run build
node --test tests/unit/*.node.js
npx.cmd playwright test tests/separation-relay.spec.js tests/recovery-kit.spec.js tests/mystery-sample.spec.js --workers=2
```

Previews: [reference filtration step](../screenshots/separation-relay/desktop/reference-filter.png), [two pending branches](../screenshots/separation-relay/desktop/two-branches.png), [instructions](../screenshots/separation-relay/desktop/help.png), and [narrow viewport](../screenshots/separation-relay/mobile-width/reference-filter.png).

Verification: production build passed; all 30 unit checks passed; all six browser checks for Games 16–18 passed across desktop and narrow viewports with no browser errors. After the visual review's label/feedback refinements, both Game 18 browser checks and all unit checks passed again. The Impeccable detector reported no findings. Reviewed desktop and narrow screenshots; the existing fixed landscape canvas fits within portrait screens with letterboxing.
