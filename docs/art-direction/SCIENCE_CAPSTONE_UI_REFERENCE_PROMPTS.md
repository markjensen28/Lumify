# LUMIFY — Science Minigames 16–20: Capstone UI Reference Prompts

Prepared: 13 October 2026.

Topic: **Mixtures and Separation in Action**. These five approved activities extend the Science plan to twenty games. Games 16–19 are implemented from the supplied references; game 20 remains a planned design. See [the game proposal](../CURRICULUM_MINIGAME_PROPOSAL.md#fourth-topic-mixtures-and-separation-in-action--approved-planned) for mechanics, learning evidence, and curriculum mapping.

## How to use

Copy the **shared visual brief** and **one game prompt** into your image generator. Generate one complete reference screen per request, then save it using the suggested filename. These are illustrated gameplay UI mockups, not photographs or individual sprites. Use an opaque 16:9 canvas, ideally **1280×720** or **2560×1440**.

If the generator supports image attachments, supply the approved Minigame 3 parchment-header reference, a current [Science gameplay screenshot](../../screenshots/science-quarter/desktop), and suitable [existing tool sprites](../../public/assets/ui/science-quarter). Games 16 and 17 now have screenshots and asset prompts in [Mystery Sample Trail UI notes](../MYSTERY_SAMPLE_TRAIL_UI.md) and [Recovery Kit Quest UI notes](../RECOVERY_KIT_QUEST_UI.md); games 18–20 await the user's new prompts.

The same visual world and navigation continue from [games 6–15](SCIENCE_MINIGAME_UI_REFERENCE_PROMPTS.md). Each new game has three authored challenges and no timer. DAY 16–20 identifies the activity; it does not mean the quarter has twenty teaching days. The proposed optional Week 11 uses the existing Q1 targets.

Generated images guide composition and artwork. Rebuild text, controls, experiment states, and feedback in Phaser; do not use a flattened mockup as the interactive game.

## Shared visual brief — paste before every game prompt

```text
Create ONE complete gameplay UI reference image for LUMIFY: Lumi Adventures, a Grade 6 fantasy pixel-art educational game. Follow this shared brief and the game-specific prompt that follows it.

FORMAT: Landscape 16:9, composed on a 1280×720 logical canvas. Show the entire header, activity, results area, and bottom navigation. Opaque background. One coherent gameplay state. No collage, alternate screens, device frame, watermark, or external annotations.

ART STYLE: Match the established LUMIFY Science screens: polished 32-bit-inspired fantasy pixel art, crisp square pixels, deliberate pixel clusters, clear outlines, limited color ramps, and readable shading. Set the activity inside a warm volcanic-island workshop with timber benches, stone walls, copper details, and restrained shelves. Keep background contrast lower than the task. No photorealism, smooth vector illustration, 3D rendering, blur, or excessive decorative clutter.

HEADER: Match the approved Mixture Compare Cards / Minigame 3 parchment header. The dark header band is approximately y0–92. A compact dark brown plaque at x16–164, y10–82 shows DAY [NUMBER] above INVESTIGATION. A warm parchment plaque at x175–687, y10–82 contains the game title in a bold dark pixel font and its smaller one-line subtitle. Fit longer text inside the same plaque. Two dark plaques at x705–1089 show CHALLENGE [NUMBER]/3 and SCORE [VALUE]. A small golden star belongs only to the score plaque. No extra left-side emblem.

FIXED NAVIGATION: Top-right How to Play is a purple square '?' button centered at (1135,37), approximately 52×48. Immediately to its right, the Settings gear is centered at (1209,37), approximately 58×54. Bottom-left Back is a purple button with a golden left arrow centered at (46,678), approximately 62×56. Preserve these positions in all five references. Draw recognizable pixel icons; do not replace Settings with a large text button.

LAYOUT: A slim parchment mission strip sits around y108–156. Main gameplay fits within x16–1264, y164–634. Use a generous left investigation/workbench panel and a clear right results panel, with navy surfaces, warm gold or bronze edges, parchment labels, cyan section headings, purple controls, and green confirmed results. The game-specific diagram or apparatus should be the largest element. Short labels and observable materials explain the action.

CONTROLS: Group trial controls beside the relevant workbench. Group feedback, RESET, and CHECK RESULT near the bottom of the right results panel. Successful-challenge screens replace those controls with RETRY and NEXT CHALLENGE in the same positions; never show both sets together. The individual prompts below depict in-progress states, so use RESET and CHECK RESULT. Only show available trial actions, with selected and inactive states clearly distinguishable.

FOOTER: Beside Back, use a slim two-line summary within x103–1243, y646–710. First line is the game-specific summary. Second line: 'Three challenges. Explore, observe, and retry. No timer.' Keep long teaching notes, scientist portraits, and worked examples inside How to Play rather than covering the experiment.

SCIENCE: Clearly distinguish iron, copper, wood, sand, stones, salt, water, and saltwater whenever present. Iron responds to the magnet; not all metals do. A suitable sieve separates different particle sizes. Ordinary paper filtration retains insoluble sand while dissolved salt passes with water. Evaporation leaves salt and releases water as vapor; do not show it collecting liquid water. Decantation may carry sediment and leave liquid behind. A clear-looking recovered liquid is never labeled safe to drink. Keep requested products consistent with the apparatus and visible outputs.

READABILITY: Short, legible English text in the established pixel fonts. No overlapping labels or controls. Do not add a countdown, pause control, duplicate score, streak counter, scoreboard, courtroom audience, or reward panels. Evidence notes are concise and based on the depicted experiment. Free-written explanations are marked for teacher review rather than automatically graded as scientifically correct. Do not imply that one completed workshop restores all of Vulcan or unlocks other islands.
```

## 16 — Mystery Sample Trail

Suggested filename: `science-16-mystery-sample-trail-reference.png`

```text
GAME: DAY 16 — MYSTERY SAMPLE TRAIL
Subtitle: 'Observe a sample. Follow the evidence.'
Header: CHALLENGE 2/3; SCORE 25.
Mission: 'Investigate the settling workshop sample.'

Show a sand-and-water investigation after the sample has been left to rest. The large left panel contains a glass sample jar with a visible sand layer at the bottom and water above. Beside it is one enlarged observation inset showing sand grains; label it 'ENLARGED VIEW', not a microscope revealing dissolved particles. A smaller earlier-observation thumbnail shows the same jar after stirring, with grains suspended in the water. The main jar and thumbnail are observations of the same sample at different times, not two unrelated quiz cards.

At the left bench, group three trial controls: INSPECT, STIR SAMPLE, and LET IT REST. Show LET IT REST selected. Add a sample-taking spoon and shallow tray as supporting apparatus. Keep these large and recognizable, with no tasting action.

The right panel is an EVIDENCE NOTEBOOK containing two observed entries: 'Visible grains' and 'Grains settle when left to rest'. Below, show a concise conclusion area with 'Sand + water' and 'NON-UNIFORM' as the player's current selections, awaiting checking. Connect the entries to small observation icons. No green mastery seal or scientific-acceptance badge before CHECK RESULT.

Place feedback and RESET / CHECK RESULT together at the bottom of the notebook. Feedback: 'Use what you observed to describe the sample.'

Footer summary: 'Observe first. Describe the mixture using evidence.'

The core impression must be an active sample investigation and accumulated observations, not a memory grid, two-bin sorter, courtroom, or side-by-side multiple-choice quiz. The two components and settling behavior must be physically consistent.
```

## 17 — Recovery Kit Quest

Suggested filename: `science-17-recovery-kit-quest-reference.png`

```text
GAME: DAY 17 — RECOVERY KIT QUEST
Subtitle: 'Pack tools that match the recovery goal.'
Header: CHALLENGE 3/3; SCORE 50.
Mission: 'Recover sand and dry salt from sand + saltwater.'

The large left panel is an equipment-packing bench. Place the input jar prominently at its upper left, containing insoluble sand and saltwater. Label 'INPUT: SAND + SALTWATER'. Two product-goal seals show SAND and DRY SALT. Below, display one open kit with exactly two clearly numbered module slots. Slot 1 contains a complete FILTRATION module: funnel, paper, and receiving jar. Slot 2 contains an EVAPORATION module: dish and its station. Each is an equipment module, not merely a tool icon pretending to be a complete apparatus.

A compact equipment shelf beneath the kit shows the five available modules: MAGNET, SIEVE, FILTER, EVAPORATE, DECANT. FILTER and EVAPORATE are selected; the other three remain available. Allow visually obvious removal or replacement of a module. Put TRIAL KIT beneath the shelf.

Depict the state after the kit's trial, before final checking. The right results panel shows two small, clear apparatus pictures in order: filtration retains damp sand and sends saltwater into a receiver; evaporation of that saltwater leaves dry salt in a dish, with a small water-vapor trail. Label the trial outputs SAND and DRY SALT. Use short arrows; do not show evaporation collecting liquid water. Add 'KIT SLOTS: 2/2' as task information, not a second score.

Feedback: 'Filter out the sand. Evaporate the filtrate to recover salt.' Group RESET and CHECK RESULT below. The current challenge is awaiting CHECK RESULT, so no Next or completion trophy appears.

Footer summary: 'Choose a suitable kit for the products you need.'

Make equipment planning and the requested products the central mechanic. Do not turn the screen into a customer timetable, ingredient recipe, or unrelated inventory-management game.
```

## 18 — Separation Relay

Suggested filename: `science-18-separation-relay-reference.png`

```text
GAME: DAY 18 — SEPARATION RELAY
Subtitle: 'Carry the sample. Keep every useful output.'
Header: CHALLENGE 3/3; SCORE 50.
Mission: 'Recover iron, sand, and salt from one mixed sample.'

Depict checkpoint 2 of a three-checkpoint run. Across the upper part of the left panel, show a short progress path: 1 MAGNET complete, 2 FILTER active, 3 EVAPORATE pending. These are checkpoints in the current challenge, not extra challenges or a drag-to-build process network.

The active bench dominates the screen: sand mixed with saltwater is being separated by a paper filter and funnel over a receiving jar. The insoluble sand remains on the paper, labeled SAND (DAMP). The receiver contains SALTWATER, with dissolved salt not drawn as large visible crystals. A red magnet is parked at completed checkpoint 1. Its separate iron recovery tray visibly remains available from the earlier operation.

Near the receiver, show SELECT OUTPUT and a clear CARRY FILTRATE button. The liquid receiver is selected, indicating what will move to checkpoint 3. Include a small record of the original IRON + SAND + SALTWATER input so the player can account for the material. Do not clutter the screen with several simultaneous operation controls.

The right panel is the persistent RECOVERY RACK: IRON recovered, SAND recovered, SALT pending. Each entry has a real material sprite. Below, add one compact output note: 'The filtrate still contains dissolved salt.' Group RESET and CHECK RESULT at the bottom; CHECK RESULT is visibly inactive because salt recovery is not finished. Do not show a successful-challenge Next button during checkpoint 2.

Footer summary: 'Track what stays, what passes, and what needs another step.'

Show the learner operating and carrying actual outputs through checkpoints. Do not depict network wiring, a flat recipe list, or a fixed-answer quiz. Only iron was attracted to the magnet, sand is retained by paper, and the next evaporation step will recover salt while water leaves as vapor.
```

## 19 — Fair Test Arena

Suggested filename: `science-19-fair-test-arena-reference.png`

```text
GAME: DAY 19 — FAIR TEST ARENA
Subtitle: 'Compare methods using fair trials.'
Header: CHALLENGE 1/3; SCORE 0.
Mission: 'Which trial recovers liquid with less sand?'

The left panel is one paired experiment bench, not two decorative answer cards. At its top, show a single sand-and-water source sample being divided into equal portions, with a short shared label EQUAL STARTING SAMPLES. Both portions began with the same amount of sand and water and were allowed the same settling time. The only planned difference is the separation method.

Trial A is DECANTATION: a tilted jar pouring upper liquid into a receiver, with most sand staying behind and a little sediment visibly carried into the receiver. Trial B is FILTRATION: paper and funnel retain sand while liquid passes to a receiver. Both setups and outputs are large enough to inspect. Each trial has a compact RUN TRIAL control near its apparatus. Depict both trials as recorded, awaiting the player's conclusion.

The right results panel contains a simple two-row record with columns METHOD, COLLECTED LIQUID, and SAND CARRIED OVER. Row A shows 'Some sand'; row B shows 'No visible sand in this trial'. Use material thumbnails instead of invented engineering percentages. Under the table, show a choice labeled BEST FOR THIS GOAL, with FILTRATION selected, and a short linked evidence note: 'The filter retained the insoluble sand.'

Feedback: 'Choose using the recorded outputs.' Put RESET and CHECK RESULT together below. Do not call the collected liquid drinking water or claim that filtration removes all dissolved substances. Do not label decantation useless; it also recovered liquid, with a different visible result.

Footer summary: 'Keep inputs comparable. Choose using observed results.'

The picture must communicate comparison of actual trials and recorded evidence, not S14's repair-a-broken-machine interface or a multiple-choice paired-sample quiz. No stopwatch or competition scoreboard.
```

## 20 — Vulcan Workshop Revival

Suggested filename: `science-20-vulcan-workshop-revival-reference.png`

```text
GAME: DAY 20 — VULCAN WORKSHOP REVIVAL
Subtitle: 'Investigate. Recover. Restore one workshop.'
Header: CHALLENGE 2/3; SCORE 25.
Mission: 'Recover sand for the workshop courtyard repair.'

Set the left panel inside one local Vulcan workshop. In its background, show a workbench repaired during challenge 1 with recovered iron fasteners. The courtyard patch is still unfinished; the storage area for challenge 3 remains unrepaired. These are three repairs within one workshop, not the restoration of the whole island.

The foreground is the active investigation-to-recovery work area for stones, sand, and water. Show a source sample with all three components clearly labeled. A compact phase strip reads OBSERVE, SEPARATE, USE MATERIAL, with SEPARATE active. Place a suitable sieve for removing larger stones and a complete paper-filtration setup for retaining sand from water. The current authored run has removed the stones and retained damp sand on the filter. Show stones and liquid in their respective separate containers, preserving the material trail.

A recovered-sand tray is selected. Put APPLY RECOVERED SAND beside a small courtyard repair outline, showing where the material will be used. The material-use button becomes available only because the sand has actually been recovered. Do not imply that pressing a tool icon repairs the courtyard without processing the sample.

The right MISSION RECORD connects three concise facts: INITIAL MIXTURE — stones + sand + water; METHODS — sieving and filtration; RECOVERED PRODUCT — sand for the courtyard. Below, use a small explanation field with the prompt 'How does recovering sand help this workshop?' Leave the field ready for writing and include 'Explanation saved for teacher review'. Group RESET and CHECK RESULT near the bottom. No automatically awarded mastery badge appears.

Footer summary: 'Use recovered materials to complete a real workshop repair.'

Make the cumulative workshop repair and actual recovered material visible. No village token-placement map, customer schedule, standalone three-picture report, victory overlay, all-islands-unlocked message, or claim that recovered water is drinkable. The final capstone restores this single workshop after three challenges.
```

## Reference review checklist

- Generate one coherent screen for the correct game number; do not combine all five.
- Keep the same parchment header, Help, Settings gear, Back, and grouped result controls.
- Show the activity's distinct mechanic: evidence notebook, recovery kit, carried-output relay, fair trials, or workshop mission.
- Preserve the three-challenge structure; checkpoints and repair phases are parts of a challenge.
- Keep scientific components, requested products, apparatus, and outputs consistent.
- Make proposed or pending outcomes distinct from observed recovery.
- Use readable labels and generous apparatus space; keep tutorials in How to Play.
- Keep all five games untimed and mark free-written reasoning for teacher review.
- Treat references as design proposals. Document implementation and final assets separately when built.
