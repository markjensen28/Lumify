# Recovery Kit Quest — Science Game 17

Implemented 13 October 2026 from the supplied reference. Play **Vulcan Caverns → Quarter 1 → Mixtures and Separation in Action → second lesson**. [Game 18](SEPARATION_RELAY_UI.md) and [Game 19](FAIR_TEST_ARENA_UI.md) occupy the third and fourth lessons; Game 20 and all added Q2–Q4 slots remain empty.

The reference's equipment bench, wooden-lidded input jar, product goals, two-slot portable kit, five available modules, trial-result columns, and grouped Reset/Check controls are implemented in Phaser. The kit case is generated artwork; the apparatus, text, contents, selections, and results remain separate interactive objects. The shared Help, Settings gear, Back, challenge/score header, and untimed play continue from the previous games.

## Player controls

- Tap an available module to pack it. Tap it again, or tap its packed slot, to remove it.
- Pack at most two distinct modules. A full case explains how to remove a module.
- **Swap Order** reverses a two-module kit.
- **Trial Kit** applies modules in the packed order to the remaining mixed sample. Its outputs show what was recovered and what stayed behind.
- **Check Result** requires a trial of the current kit, every requested product, and the smallest suitable equipment set. Changing the kit invalidates the current trial and requires a fresh trial.
- Reset starts a fresh challenge; Retry replaces a completed challenge's score rather than awarding it twice. Help and Settings preserve the current kit and block experiment actions behind the modal.

## Authored challenges and scientific model

| Challenge | Input | Requested products | Smallest suitable kit |
| --- | --- | --- | --- |
| 1 | Iron + sand | Iron | Magnet |
| 2 | Fine sand + larger pebbles | Fine sand | Sieve |
| 3 | Sand + saltwater | Sand and dry salt | Filtration → evaporation |

Each module includes the required supporting apparatus. Filtration includes paper, a support stand, and a receiving jar. The third case shows damp sand on the paper and saltwater in the receiving jar; evaporating that filtrate leaves dry salt, while water leaves as vapor. Evaporating the original sample first leaves sand and salt mixed in the dish, so it does not satisfy the goal. Dissolved salt is never drawn as a visible pile in liquid.

Decantation is an imperfect option for these goals: some liquid stays with sediment, and this discrete kit trial does not model a full recovery using it. Game 10 remains the detailed decantation simulation. Sieve sizes here are authored so fine sand passes and larger pebbles are retained. Filtered water is not declared safe to drink.

The trial engine operates on actual component outputs rather than a hardcoded successful tool-selection picture. Both outputs remain accounted for, and previously recovered products are not fed into later modules. Alignment: `S6MT-Id-f-2`.

## Saving and verification

Completed records use the existing browser-local Science save under `q1-m4-l2`. Each record includes the kit, current trial outputs, and earlier trial plans/results from the same challenge, so an unsuccessful order and a revised order remain distinguishable. A new practice session begins with an empty kit.

Pure tests cover all one- and two-module plans, component conservation, required trials, minimality, capacity, removal, order changes, and trial invalidation. Playwright checks the real map entry, Help/Settings guards, unsuitable kits, full slots, removal, all three recoveries, wrong-order revision, retry scoring, saved progress, Back, and the remaining Game 20 placeholder on desktop and narrow screens.

Screenshots: [reference trial](../screenshots/recovery-kit/desktop/reference-trial.png), [iron recovery](../screenshots/recovery-kit/desktop/iron-recovery.png), [sand recovery](../screenshots/recovery-kit/desktop/sand-recovery.png), [wrong order](../screenshots/recovery-kit/desktop/wrong-order.png), [instructions](../screenshots/recovery-kit/desktop/help.png), and [narrow screen](../screenshots/recovery-kit/mobile-width/reference-trial.png).

## Generated asset and prompt

Project asset: [equipment-case.png](../public/assets/ui/science-quarter/recovery-kit/equipment-case.png), 1774×887, transparent background. Generated with the built-in image-generation tool. The original remains at `C:/Users/rotse/.codex/generated_images/01a133af-746e-77b1-a00a-633e094ae818/exec-c6e323cb-810d-4673-8f1c-11a6960c3852.png`.

```text
One isolated game sprite: open horizontal portable equipment case, two EMPTY equal side-by-side compartments lined in dark navy felt, warm bronze and gold metal reinforced wooden rim, two little golden latches along front, slightly front-facing isometric perspective showing interior. Crisp rich 32-bit fantasy pixel art, warm medieval science workshop aesthetic, dark outlines, deliberately square pixel clusters. Wide 2:1 silhouette centered and fully visible. No tools, no labels, no text, no surrounding scene, no ground plane or shadow outside case. Truly transparent background and padding. Interior dark opaque navy so game can place separate apparatus sprites in the two compartments. Production game asset, not a UI mockup.
```

Reused artwork: Science workshop backdrop; Game 16 specimen jar; magnet, sieve, iron nails, pebbles, sand, salt; Filter Forge stand/funnel/beaker; Salt Crystal Watch evaporation apparatus; and Steady Pour jar.
