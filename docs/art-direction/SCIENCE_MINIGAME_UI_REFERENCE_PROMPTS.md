# LUMIFY — Science Minigames 6–15: UI Reference Image Prompts

## How to use

The approved next block, games 16-20 under **Mixtures and Separation in Action**, has its own [Science Capstone UI Reference Prompts](SCIENCE_CAPSTONE_UI_REFERENCE_PROMPTS.md). This file continues to cover games 6-15.

Copy the **shared visual brief** below, followed by **one game prompt**, into your image generator. Generate one complete screen per request. Send the resulting image back with its game number so it can guide the UI revision.

These prompts describe **full-screen UI mockups**, with visible artwork, panels, labels, and controls. They are not requests for individual transparent sprites. Use an opaque background and a 16:9 canvas, ideally **1280×720** or **2560×1440**.

If reference-image attachments are supported, attach:

- Your approved **Minigame 3 header** reference for its parchment treatment and typography.
- The relevant current screen from [screenshots/science-quarter/desktop](../../screenshots/science-quarter/desktop).
- Relevant tool sprites from [public/assets/ui/science-quarter](../../public/assets/ui/science-quarter), especially the magnet, sieve, funnel, evaporating dish, iron nail, wood chip, pebble, and copper scrap.

The new images can improve the artwork and use of space. Preserve the actual mechanics, shared navigation positions, and readable controls. Keep the three-challenge structure. “DAY” identifies the activity; it is not a prescribed school-day schedule.

## Shared visual brief — paste before every game prompt

```text
Create ONE complete gameplay UI reference image for LUMIFY: Lumi Adventures, a Grade 6 educational fantasy pixel-art game. The game-specific instructions follow this brief.

FORMAT: Landscape 16:9, designed on a 1280×720 logical canvas. Show the entire screen, including the header and bottom navigation. Opaque background. No device frame, collage, alternate screens, watermark, or external annotation.

ART STYLE: Polished 32-bit-inspired fantasy pixel art. Crisp square pixels, deliberate pixel clusters, clean outlines, limited color ramps, expressive object silhouettes, and simple readable shading. Use a cozy fantasy science workshop with wooden shelves, stone walls, and restrained laboratory props. Darken the background so the activity and controls remain clear. Avoid photorealism, smooth vector art, 3D rendering, blur, and excessive ornament.

SHARED UI: Match the approved Mixture Compare Cards / Minigame 3 header. A dark header band fills the top 92 pixels. At the far left, a compact dark brown plaque contains DAY [NUMBER] above SEPARATION for games 6–10 or COMMUNITY for games 11–15. Its bounds are approximately x16–164, y10–82. Do not add an emblem or magnifying glass there.

A warm parchment title plaque occupies x175–687, y10–82, with a bold dark pixel-font title and a smaller one-line subtitle. Two dark counter plaques occupy x705–1089: CHALLENGE [NUMBER]/3 and SCORE [VALUE], with a small golden star only in the score plaque. Keep the title readable and fit longer titles within the same plaque.

FIXED NAVIGATION: A purple square '?' How to Play button is at the top right, centered at (1135,37), approximately 52×48. A matching purple Settings gear button is immediately to its right, centered at (1209,37), approximately 58×54. A purple Back button with a golden LEFT-pointing arrow is at the bottom left, centered at (46,678), approximately 62×56. Preserve these positions in every game.

Below the header, use a slim parchment mission strip around y108–156. Keep the main gameplay area within x16–1264, y164–634. Use dark navy panels, warm gold or bronze borders, parchment labels, cyan section headings, purple accents, and green confirmations. Give objects generous space and keep labels short. Use diagrams, arrows, material sprites, and observable outputs to explain the activity.

Keep trial controls near the apparatus or board. Put result checking and feedback in one consistent results panel. While playing, show RESET and CHECK RESULT together near the bottom of that panel. After a successful challenge, those same positions become RETRY and NEXT CHALLENGE. Do not show both sets simultaneously. Do not place Next in a separate floating container.

Along the bottom, beside Back, add one slim two-line activity summary within approximately x103–1243, y646–710. Use the game's short summary followed by 'Three challenges. Explore, observe, and retry. No timer.' Do not fill this area with extra cards.

These activities are untimed. Do not add a countdown, pause button, streak counter, duplicate score, score breakdown, courtroom audience, case-files button, or reward counter. Long instructions, trivia, and scientist tips belong inside How to Play. Do not leave a large tutorial banner on the gameplay screen.

Use short, legible English labels in a consistent pixel font. Controls should have clear spacing and distinct selected, available, and inactive states. Background art must not obscure buttons, text, apparatus, or outputs. Depict a single coherent gameplay state as specified below, not several phases at once.
```

## 6 — Magnet Sweep Rescue

Suggested filename: `science-06-magnet-sweep-reference.png`

```text
GAME: DAY 6 — MAGNET SWEEP RESCUE
Subtitle: 'Recover iron from a mixed sample.'
Header state: CHALLENGE 2/3; SCORE 25.
Mission: 'Recover iron. Copper stays behind.'

Make the main left panel a large shallow sample tray on a workshop bench. Show sand grains, silver-grey iron nails, brown wood chips, and orange copper scraps as recognizable individual pixel-art objects, with short labels where needed. Place a red horseshoe magnet with silver tips near one iron nail; that nail follows the magnet. Wood and copper remain where they were. Show the magnet as a movable tool, not a decorative header icon.

In the right observations panel, show a separate recovery tray holding one iron nail, with 'RECOVERED IRON: 1/3'. Leave clear space for short feedback: 'Iron follows the magnet. Copper and wood stay behind.' Below the left tray, show one large 'RELEASE TO TRAY' button. Add a compact control cue: 'Drag or tap. Arrow keys move; Space releases.'

Keep RESET and CHECK RESULT together at the bottom of the right panel. Bottom summary: 'Move the magnet. Recover iron. Observe what stays behind.'

Scientific accuracy: Only the iron is attracted. Do not depict copper, wood, or sand sticking to the magnet. Do not turn the activity into a two-bin classification sorter or a memory grid.
```

## 7 — Sieve Gate

Suggested filename: `science-07-sieve-gate-reference.png`

```text
GAME: DAY 7 — SIEVE GATE
Subtitle: 'Separate materials by particle size.'
Header state: CHALLENGE 1/3; SCORE 0.
Mission: 'Pass size-2 grains; retain size-6 stones.'

Make the large left panel an experiment bench with a wooden hand sieve and clearly visible metal mesh. Show small golden sand grains and larger grey pebbles above the sieve, with 'GRAINS: SIZE 2' and 'STONES: SIZE 6'. Below it, show an enlarged mesh diagram with an opening set to 4. The larger stones cannot fit; the smaller grains can. Make the relative sizes immediately understandable.

Place '- SMALLER' and '+ LARGER' buttons side by side near the enlarged mesh, followed by a larger 'RUN A BATCH' button below. Show two clear output areas in the right panel: 'PASSED THROUGH: SAND' with a sand pile, and 'RETAINED ON MESH: STONES' with pebbles. Feedback: 'Sand passed through. Larger stones stayed on the mesh.'

Keep RESET and CHECK RESULT together at the bottom of the results panel. Bottom summary: 'Choose an opening between the two particle sizes.'

Scientific accuracy: The opening must be larger than the small grains and smaller than the larger stones. The displayed size units are an enlarged teaching model. Avoid showing all particles passing through a fine mesh merely because the sieve is shaken.
```

## 8 — Filter Forge

Suggested filename: `science-08-filter-forge-reference.png`

```text
GAME: DAY 8 — FILTER FORGE
Subtitle: 'Build a working filtration apparatus.'
Header state: CHALLENGE 1/3; SCORE 0.
Mission: 'Find the sand recovered from sand and water.'

The left experiment panel shows a complete, physically readable filtration setup. A source glass containing sand and water sits to the left. At the center, a blue-tinted transparent funnel containing folded white filter paper sits above an open receiving jar. Arrange the funnel stem directly over the jar opening. Use a few small arrows to trace liquid from the source through the funnel into the jar.

Show sand retained inside the filter paper and liquid collected in the receiving jar. Label these outputs 'PAPER / RESIDUE' and 'JAR / FILTRATE'. Below the apparatus, show two compact placement tiles, 'RECEIVING JAR — PLACED' and 'FILTER FUNNEL — PLACED', and a 'POUR SAMPLE' button. Preserve enough room for dragging each part into its marked place in an unassembled state.

The right panel identifies 'DESIRED MATERIAL: SAND' and asks 'Where did it go?' Show two spaced answer buttons: 'ON PAPER' selected and 'IN LIQUID' unselected. Feedback: 'The insoluble sand stays on the paper.' Put RESET and CHECK RESULT together below.

Bottom summary: 'Build the apparatus. Follow each material to its output.'

Scientific accuracy: Insoluble sand stays on the paper. For a different saltwater challenge, dissolved salt would pass through with water. Do not depict paper filtration recovering dissolved salt, and do not label the collected liquid safe to drink.
```

## 9 — Salt Crystal Watch

Suggested filename: `science-09-salt-crystal-watch-reference.png`

```text
GAME: DAY 9 — SALT CRYSTAL WATCH
Subtitle: 'Observe evaporation and recover salt.'
Header state: CHALLENGE 1/3; SCORE 0.
Mission: 'Record how saltwater changes over time.'

Make a shallow white ceramic evaporating dish the large central object in the left panel. Show a middle stage: reduced saltwater remains inside the dish, with a few simple pale vapor wisps rising above it. Keep the liquid inside the dish's rim. Show 'SIMULATED TIME: STAGE 3/5' above the apparatus and 'Less liquid remains.' beneath it.

Place 'RECORD OBSERVATION' and 'ADVANCE TIME' side by side below the dish. The right observations panel contains a compact illustrated journal: an initial full dish marked 'START', the current partly filled dish marked 'MIDDLE', and an unfilled journal slot for 'END'. Do not simultaneously depict the current dish as both wet and completely dried.

Below the journal, ask 'RECOVERED IN THE DISH?' with 'SALT' and 'WATER' buttons. Leave room beneath these for feedback and the standard RESET / CHECK RESULT pair. No buttons or journal rows may overlap the feedback panel.

Bottom summary: 'Observe the start, middle, and end. Trace salt and water.'

Scientific accuracy: Water leaves as vapor; salt remains after evaporation finishes. Do not show a condenser or collected drinking water. Simulated stages are not a real-time countdown.
```

## 10 — Steady Pour

Suggested filename: `science-10-steady-pour-reference.png`

```text
GAME: DAY 10 — STEADY POUR
Subtitle: 'Separate liquid above settled sediment.'
Header state: CHALLENGE 1/3; SCORE 0.
Mission: 'Collect upper liquid after sand settles.'

Use two large readable vessels in the left panel. The source jar on the left contains liquid above a settled sand layer at the bottom. It is tilted gently by 20 degrees. The upright receiving jar on the right holds collected liquid, with no sand in it. A short pouring stream or arrow connects the source's lip to the receiver opening. Show 'SOURCE SAMPLE' and 'COLLECTED LIQUID' labels.

Depict a midway trial: source liquid 60%, collected liquid 40%, sediment still in the source. Keep the volume indicators consistent with those quantities. Put 'LET IT SETTLE', '- TILT', '+ TILT', and 'POUR A LITTLE' controls close to the apparatus, with enough separation to avoid accidental clicks.

The right panel shows settling progress, 'TILT: 20°', 'COLLECTED: 40%', and a clear clean-versus-sediment observation. A concise goal says 'Collect at least 60%. Leave at least 20% behind.' Keep RESET and CHECK RESULT below the feedback.

Bottom summary: 'Settle. Pour gently. Leave sediment and some liquid behind.'

Scientific accuracy: Settling and gentle partial pouring keep most sediment behind. Do not show the source being completely emptied with all sand magically retained. Collected liquid is not automatically safe to drink.
```

## 11 — Community Shift

Suggested filename: `science-11-community-shift-reference.png`

```text
GAME: DAY 11 — COMMUNITY SHIFT
Subtitle: 'Plan useful separation services.'
Header state: CHALLENGE 1/3; SCORE 0.
Mission: 'Serve the repair yard, builder, and salt maker.'

Make the main left panel a readable workshop scheduling board. Across the top, show three compact request cards with small material illustrations:
REPAIR YARD — Iron from iron + sand — 1 time slot.
BUILDING YARD — Sand from sand + stones — 2 time slots.
SALT MAKER — Salt from salt + water — 3 time slots.

Below the cards, show a spacious timetable with five numbered time-slot columns and five station rows: MAGNET, SIEVE, FILTER, EVAPORATE, DECANT. Add a small matching tool icon beside each station label. Time slots represent planning units, not a countdown.

Show colored booking bars placed into the appropriate station rows: repair at the magnet station for one slot; building at the sieve station for two slots; salt-making at the evaporation station for three slots. Label the bars JOB 1, JOB 2, and JOB 3. Leave other cells clearly available. Highlight the building-yard request and its booking consistently.

The right panel shows the selected customer's request, a small friendly villager, the desired product, and a concise benefit: 'Usable sand is recovered for building.' Add 'RUN THE SHIFT' beneath the timetable. Keep the standard RESET and CHECK RESULT pair in the right results panel.

Bottom summary: 'Choose suitable methods and schedule every community request.'

Preserve room for station names, bookings, and cell selection. Do not replace the timetable with multiple-choice answer cards or a classification-bin game.
```

## 12 — Recovery Circuit

Suggested filename: `science-12-recovery-circuit-reference.png`

```text
GAME: DAY 12 — RECOVERY CIRCUIT
Subtitle: 'Connect processes and recover useful components.'
Header state: CHALLENGE 1/3; SCORE 0.
Mission: 'Recover iron, sand, and water separately.'

Make the left panel a material-stream workboard with clear paths between input, process, and outputs. Show the current state after magnetic separation: iron has been recovered into one output card; sand and water remain together in a second output card. Illustrate the iron with nails and the remaining mixture with sand visibly settled inside a water glass. Highlight the mixed stream as the selected stream for the next process.

Include a compact process record: 'Iron + sand + water → Magnet → Iron | Sand + water'. Use arrows and small sprites so the record is understandable without a long paragraph. Beneath the streams, arrange five evenly spaced tool tiles: MAGNET, SIEVE, FILTER, EVAPORATE, DECANT. Each tile has its own recognizable tool image. The filter is the suitable next step for the selected sand-and-water stream.

In the right panel, show three recovery goals with material icons: 'Iron for repairs', 'Sand for reuse', and 'Separate liquid water'. Mark only the iron goal recovered in this midway state. Leave room for feedback and the standard RESET / CHECK RESULT pair.

Bottom summary: 'Choose a stream, apply a tool, and account for every component.'

Scientific accuracy: Display every component in an output. Filtration separates insoluble sand from water; a pure-water output must not still contain a sand layer. Dissolved salt requires evaporation in a later challenge, with water leaving as vapor rather than appearing as collected liquid. Do not depict filtration of dry powders as a valid separation route.
```

## 13 — Village Impact Board

Suggested filename: `science-13-village-impact-board-reference.png`

```text
GAME: DAY 13 — VILLAGE IMPACT BOARD
Subtitle: 'Choose services that help the community.'
Header state: CHALLENGE 1/3; SCORE 0.
Mission: 'Choose two services with the greatest useful recovery.'

The large left panel contains three generously spaced village-location cards. Each combines a small friendly resident, a mixture illustration, and a potential recovery amount:
REPAIR YARD — Iron + sand — 8 units.
BUILDING YARD — Sand + stones — 6 units.
SALT MAKER — Salt + water — 2 units.

Depict the magnet installed at the repair yard and the sieve installed at the building yard. Show their recovered products visually: iron nails and a usable sand pile. The salt maker remains without an installed service. Make these location cards feel like a small community planning board, not a courtroom audience or a decorative row of faces.

Place five compact tool-selection tiles beneath the locations: MAGNET, SIEVE, FILTER, EVAPORATE, DECANT. In the right panel, show 'SERVICE TOKENS: 0/2 AVAILABLE' and 'USEFUL RECOVERY: 14 UNITS'. Add a 'PREVIEW BENEFITS' button and short concrete feedback: 'Recovered iron can be reused for repairs. Usable sand is recovered for building.' Keep RESET and CHECK RESULT together at the bottom.

Bottom summary: 'Use two service tokens where suitable separation helps most.'

Scientific accuracy: Only suitable tools recover the requested product. The units are game quantities, not money, real measurements, or a separate reward currency. Keep one score in the shared header.
```

## 14 — Broken Separator Lab

Suggested filename: `science-14-broken-separator-lab-reference.png`

```text
GAME: DAY 14 — BROKEN SEPARATOR LAB
Subtitle: 'Investigate why separation failed.'
Header state: CHALLENGE 1/3; SCORE 0.
Mission: 'Sand and stones both pass through the sieve.'

Make the left panel a controlled-experiment bench. At the top, place two clearly separated comparison panels: 'FAILED BASELINE' and 'LATEST TEST'. The baseline shows an overly large sieve opening of 9, with both sand and stones passing. The latest test shows an opening of 4, with sand passing and stones retained. Use simple enlarged mesh diagrams and material sprites to show the difference.

Below, show the current sieve apparatus, particle-size labels 'GRAIN SIZE 2' and 'STONE SIZE 6', and the current 'OPENING: 4'. Put '- SMALLER' and '+ LARGER' beside the mesh control and 'RUN CONTROLLED TEST' beneath it. The player changes one variable at a time; avoid a crowded collection of unrelated sliders.

The right panel contains a short test log: 'BASELINE: FAILED', followed by 'TEST 1: WORKING — Changed: opening'. Use small result icons and a clearly highlighted changed-variable label. Add feedback: 'The smaller opening recovers sand for the building yard.' Keep RESET and CHECK RESULT together below the test feedback.

Bottom summary: 'Change one variable. Test it. Explain the recovered benefit.'

For this reference image, depict the sieve challenge only. Do not combine it with the later evaporation-method and decanting trials. Do not illustrate a magnet as the solution to separating sand from stones.
```

## 15 — Lumi Field Report

Suggested filename: `science-15-lumi-field-report-reference.png`

```text
GAME: DAY 15 — LUMI FIELD REPORT
Subtitle: 'Explain how separation helped a community.'
Header state: CHALLENGE 1/3; SCORE 0.
Mission: 'Report how sieving helps a building yard.'

The left panel is a visual reporting workboard. Across its upper area, show three large numbered panels: '1. BEFORE', '2. PROCESS', and '3. AFTER'. Place a sand-and-stones sample in BEFORE, a wooden sieve in PROCESS, and recovered fine sand in AFTER. Keep the pictures large and their captions short. Highlight AFTER as the currently selected panel.

Beneath these panels, show a compact image bank with five selectable picture tiles: sand + stones, sieve, usable sand, magnet, and oil + water. The first three are appropriate report pictures; the other two are alternatives. Add a small 'DOWNLOAD SAVED REPORTS' button below the image bank, inside the same panel.

The right panel is a roomy writing area titled 'YOUR FIELD REPORT'. Add the case heading 'SAND FOR BUILDING' and one short cue: 'Explain the material, method, and community benefit.' Below it, provide a large parchment text-entry box, at least 140 pixels tall, with the visible explanation: 'Sieving removes larger stones from the sand. The building yard can reuse the recovered fine sand.' Show a small character counter beneath the box, without crowding it.

At the bottom of the right panel, show a concise review status, RESET, and 'SAVE REPORT' in the usual Check Result position. Show 'Saved reports need teacher review' as a short note. Do not label the explanation automatically perfect or scientifically accepted merely because it has been typed. Do not add a separate presentation panel, scientist speech banner, trophy, or score breakdown that reduces the writing space.

Bottom summary: 'Show the mixture, process, and outcome. Explain who benefits.'

Scientific accuracy: The before sample contains both sand and stones, the process uses a sieve, and the recovered output is sand. Preserve this sequence. This is a reporting activity, not another mixture-classification quiz.
```

## Optional — illustrated How to Play reference

Copy the shared brief and this prompt if you also want a reference for the common help popup. Generate it separately from the ten gameplay screens.

```text
Create ONE full-screen LUMIFY How to Play modal reference for DAY 6 — MAGNET SWEEP RESCUE. Keep the underlying game's fixed header and bottom-left Back visible but dimmed and inactive.

Place a centered dark navy popup, approximately 1120×580 on the 1280×720 screen, with a warm gold border and the heading HOW TO PLAY. Use three equally spaced illustrated steps with short captions:
1. INSPECT — Sand containing iron nails, wood chips, and copper scraps.
2. SWEEP — A red magnet attracting an iron nail while wood and copper remain.
3. RECOVER — Iron nails released into a separate recovery tray.

Below the steps, use a compact green scientist-note panel with our friendly goggle-wearing scientist sprite and this short tip: 'Iron is attracted. Sand, wood, and copper are not. Not every metal is magnetic.'

At the bottom center, place one clear GOT IT button. Favor large figures and short text. Do not turn the popup into a long instruction sheet, and do not move Help, Settings, or Back to different positions.
```

## Reference review checklist

- One full screen per image, with the correct game number and activity.
- Parchment header consistent with Minigame 3; no left-side emblem.
- Help and Settings at the same top-right positions, Back at the same bottom-left position.
- Buttons and text clear of panel borders and each other.
- One score, one challenge counter, no timer or pause.
- Main mechanic visible through apparatus, diagrams, streams, timetable, or report panels.
- Scientific components and outputs match the selected challenge.
- Quick summary below; longer tips inside How to Play.

These are visual references for later implementation. Generated lettering can be corrected when rebuilding the UI; actual controls, game text, scientific rules, and interaction remain implemented in Phaser.
