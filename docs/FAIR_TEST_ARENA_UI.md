# Fair Test Arena — Science Game 19

Implemented 13 October 2026 from the supplied reference. Play **Vulcan Caverns → Quarter 1 → Mixtures and Separation in Action → fourth lesson**. Game 20 and all additional Q2–Q4 lessons remain empty placeholders.

The reference's equal starting samples, two apparatus bays, Run Trial buttons, recorded comparison table, method choice, and evidence panel are implemented as separate Phaser objects. Shared Help, Settings gear, Back, Reset/Retry, challenge/score header, and untimed play continue from the earlier games.

## Controls and comparison goals

1. **Split Equally** prepares two equal portions from one source supply. Both trials keep the listed starting conditions equal.
2. **Run Trial** records the actual outputs of each apparatus. Both trials must run before choosing a method or evidence.
3. Choose **A / B** under Best For This Goal, then open **Choose Evidence** and select a supporting observation. Escape closes the evidence menu. Check Result evaluates the chosen product and evidence against the recorded trials.

Running a trial again clears the previous method/evidence decision. Reset starts a new comparison; Retry replaces the completed challenge's score. Help and Settings preserve the samples and block experiment actions behind their modal.

| Challenge | Equal input | What differs | Goal and observed result |
| --- | --- | --- | --- |
| 1 | Sand + water; same settling time and collected liquid amount | Decantation / filtration | Less sand in the collected liquid. This authored decanting trial carries some sand; the filter retains insoluble sand. |
| 2 | Same sand/stones amounts and particle sizes | Sieve openings 3 / 9 | Collect sand without stones. Opening 3 passes size-2 sand and retains size-6 stones; opening 9 passes both. Sizes are illustrative. |
| 3 | Saltwater with the same concentration and amount | Filtration / evaporation | Recover dry salt. Dissolved salt passes through paper in solution; evaporation leaves salt in the dish while water leaves as vapor. |

No result is recorded until its trial runs. Completion ranks the actual recorded product rather than an A/B answer key; tied best products can accept either trial when its selected evidence supports the goal. This does not claim a universal winner across all samples, procedures, or goals.

## Scientific model and artwork

Amounts are illustrative component units, not measured experimental yields. The source supply is divided in half for each trial. Every output includes an inventory, including sediment left behind, damp filter residue, retained stones, saltwater filtrate, and uncollected vapor. Each trial conserves its own portion. The two liquid-recovery trials collect the same water amount (80% of each starting portion), making sediment carryover directly comparable. Decantation's small carryover is an authored pouring result; gentle decantation can perform differently in other trials. Game 10 remains the detailed adjustable decanting simulation.

Clear liquid is not declared safe to drink. Dissolved salt is not drawn as visible grains. Evaporation does not produce collected liquid water. Evidence is selected from authored statements and is saved; there is no automatic judgment of open-ended writing. Alignment: `S6MT-Id-f-2`.

No new generated assets were needed. Reused the workshop backdrop, Steady Pour glass jars and pour stream, Filter Forge stand/funnel/beaker, Sieve Gate frame, Salt Crystal Watch apparatus, and existing sand, stones, salt, and recovery-tray artwork. Contents and comparison states are rendered separately; original PNGs remain unchanged. The [existing full-screen reference prompt](art-direction/SCIENCE_CAPSTONE_UI_REFERENCE_PROMPTS.md) remains available.

## Saving and verification

Completed records use `lumify-science-q1-v1`, lesson `q1-m4-l4`. They retain equal portions, both trial inputs/outputs, selected method/evidence, and unsuccessful/successful answer history. A fresh visit starts a new comparison.

Pure checks cover source division, per-trial conservation, equal liquid collection, both observed trials being required, every evidence/method combination, tied best outcomes, unequal-input rejection, and rerun invalidation. Playwright follows the real menu/map/lesson route, runs all three comparisons, checks wrong choices and evidence, tests menu Escape and Help/Settings guards, retries scores, reads saved results, and checks Back and the Game 20 placeholder on desktop and narrow viewports. Games 16–18 receive regression checks.

```powershell
npm.cmd run build
node --test tests/unit/*.node.js
npx.cmd playwright test tests/fair-test.spec.js tests/mystery-sample.spec.js tests/recovery-kit.spec.js tests/separation-relay.spec.js --workers=2
```

Previews: [reference comparison](../screenshots/fair-test/desktop/reference-comparison.png), [sieve comparison](../screenshots/fair-test/desktop/sieve-comparison.png), [salt comparison](../screenshots/fair-test/desktop/salt-comparison.png), [instructions](../screenshots/fair-test/desktop/help.png), and [narrow viewport](../screenshots/fair-test/mobile-width/reference-comparison.png).

Verification: production build passed; all 36 pure checks passed; all eight browser checks for Games 16–19 passed across desktop and narrow viewports. After one visual correction batch, both Game 19 browser checks passed again with no browser errors. The Impeccable detector reported no findings. Reviewed the initial, comparison, evidence-menu, instructions, and completed states, including portrait letterboxing of the existing landscape canvas. Vite remains available at `http://127.0.0.1:5173/`.
