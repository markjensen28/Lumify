---
name: Lumi Adventures — Island World
description: Muted retro pixel-art floating islands and their subject quarter maps.
colors:
  paper: "#ffdca6"
  paper-light: "#fff2c9"
  paper-edge: "#9e6b47"
  control-ink: "#263c49"
  nameplate: "#3b4d4b"
  nameplate-edge: "#ffe2ab"
  subject-text: "#eef0d5"
  gold: "#ffd76a"
  quarter-center: "#fff2a7"
  quarter-edge: "#6f4524"
  quarter-ink: "#4b3527"
  locked-tint: "#596878"
  mist-tint: "#b6c7cd"
  lock-backing: "#182b37"
  english-paper: "#fff2d2"
  english-ink: "#332b21"
  english-edge: "#99734c"
  english-control: "#f7e6c2"
  english-selected: "#315749"
  english-selected-text: "#fff7df"
  english-accent: "#235d61"
  english-focus: "#257b80"
  english-writing-paper: "#fffbed"
  english-writing-edge: "#a89062"
  english-muted: "#685a41"
  english-success: "#dce8cd"
  english-retry: "#f5e1be"
  english-pending: "#e4d2aa"
  english-header: "rgb(27 48 43 / 96%)"
  english-workspace: "rgb(255 242 210 / 97%)"
  english-workspace-edge: "#a28254"
  math-workspace: "rgb(255 246 219 / 98%)"
  math-ochre: "#ba762e"
  math-teal: "#287e7d"
  math-model-paper: "#f6edcf"
  math-model-edge: "#695c40"
  math-model-ink: "#55492f"
  math-piece-ochre: "#efca91"
  math-piece-teal: "#cce4d7"
  math-ledger-paper: "#d6e8db"
  math-ledger-ink: "#244c43"
  math-inventory-paper: "#e4e8cb"
  math-inventory-ink: "#314932"
typography:
  display:
    fontFamily: '"ArcadeClassic", "Lower Pixel", monospace'
    fontSize: "48px"
    fontWeight: 400
    letterSpacing: "1px"
  title:
    fontFamily: '"ArcadeClassic", "Lower Pixel", monospace'
    fontSize: "38px"
    fontWeight: 400
    letterSpacing: "1px"
  body:
    fontFamily: '"Lower Pixel", monospace'
    fontSize: "20px"
    fontWeight: 400
    letterSpacing: "0px"
  subject:
    fontFamily: '"Lower Pixel", monospace'
    fontSize: "21px"
    fontWeight: 400
  quarter-label:
    fontFamily: '"Lower Pixel", monospace'
    fontSize: "22px"
    fontWeight: 400
  hint:
    fontFamily: '"Lower Pixel", monospace'
    fontSize: "16px"
    fontWeight: 400
  english-heading:
    fontFamily: '"ArcadeClassic", "Lower Pixel", monospace'
    fontSize: "36px"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "1px"
  english-section:
    fontFamily: '"ArcadeClassic", "Lower Pixel", monospace'
    fontSize: "27px"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "1px"
  english-body:
    fontFamily: '"Lower Pixel", monospace'
    fontSize: "21px"
    fontWeight: 400
    lineHeight: 1.35
  english-control:
    fontFamily: '"Lower Pixel", monospace'
    fontSize: "21px"
    fontWeight: 400
    lineHeight: 1.25
  english-input:
    fontFamily: '"Lower Pixel", monospace'
    fontSize: "20px"
    fontWeight: 400
    lineHeight: 1.3
  english-compact-heading:
    fontFamily: '"ArcadeClassic", "Lower Pixel", monospace'
    fontSize: "27px"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "1px"
  english-compact-body:
    fontFamily: '"Lower Pixel", monospace'
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.35
  math-heading:
    fontFamily: '"ArcadeClassic", "Lower Pixel", monospace'
    fontSize: "34px"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "1px"
  math-caption:
    fontFamily: '"Lower Pixel", monospace'
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.35
  math-measured-copy:
    fontFamily: '"Lower Pixel", monospace'
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1.35
  math-inventory:
    fontFamily: '"Lower Pixel", monospace'
    fontSize: "24px"
    fontWeight: 400
    lineHeight: 1.35
  math-model-label:
    fontFamily: '"Lower Pixel", monospace'
    fontSize: "14px"
    fontWeight: 400
  math-answer:
    fontFamily: '"Lower Pixel", monospace'
    fontSize: "21px"
    fontWeight: 400
    lineHeight: 1.2
rounded:
  frame: "6px"
  modal: "8px"
  english-control: "5px"
  english-workspace: "7px"
  english-field: "3px"
  math-field: "4px"
spacing:
  status-inline: "12px"
  status-block: "4px"
  english-control-inline: "15px"
  english-control-block: "7px"
  english-workspace-inline: "20px"
  english-workspace-block: "17px"
  english-gap: "12px"
  math-model-gap: "15px"
components:
  carousel-arrow:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.control-ink}"
    rounded: "{rounded.frame}"
    width: "66px"
    height: "66px"
  carousel-arrow-hover:
    backgroundColor: "{colors.paper-light}"
  selection-nameplate:
    backgroundColor: "{colors.nameplate}"
    textColor: "{colors.paper-light}"
    typography: "{typography.title}"
    rounded: "{rounded.frame}"
    width: "510px"
    height: "92px"
  entry-status:
    backgroundColor: "{colors.nameplate}"
    textColor: "{colors.paper-light}"
    typography: "{typography.body}"
    padding: "4px 12px"
  quarter-node:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.quarter-ink}"
    typography: "{typography.quarter-label}"
    size: "66px"
  english-button:
    backgroundColor: "{colors.english-control}"
    textColor: "{colors.english-ink}"
    typography: "{typography.english-control}"
    rounded: "{rounded.english-control}"
    padding: "7px 15px"
  english-button-primary:
    backgroundColor: "{colors.english-selected}"
    textColor: "#fff8df"
    typography: "{typography.english-control}"
    rounded: "{rounded.english-control}"
    padding: "7px 15px"
  english-evidence-choice:
    backgroundColor: "{colors.english-selected}"
    textColor: "{colors.english-selected-text}"
    typography: "{typography.english-control}"
    rounded: "{rounded.english-control}"
  english-writing-field:
    backgroundColor: "{colors.english-writing-paper}"
    textColor: "{colors.english-ink}"
    typography: "{typography.english-input}"
    rounded: "{rounded.english-field}"
    padding: "7px 10px"
  math-equal-parts-rail:
    backgroundColor: "{colors.math-model-paper}"
    textColor: "{colors.math-model-ink}"
    typography: "{typography.math-caption}"
  math-conservation-ledger:
    backgroundColor: "{colors.math-ledger-paper}"
    textColor: "{colors.math-ledger-ink}"
    typography: "{typography.math-measured-copy}"
    padding: "10px 13px"
  math-length-model:
    backgroundColor: "{colors.math-model-paper}"
    textColor: "{colors.english-ink}"
    typography: "{typography.math-caption}"
  math-answer-field:
    backgroundColor: "{colors.english-writing-paper}"
    textColor: "{colors.english-ink}"
    typography: "{typography.math-answer}"
    rounded: "{rounded.math-field}"
    padding: "7px 10px"
---

# Design System: Lumi Adventures — Island World

## Overview

**Creative North Star: "Islands of Lumora"**

The island selector and subject quarter maps use the user-selected original muted retro pixel-art world. Tangible floating landforms sit in a sage sky with ivory clouds, earthy rocky undersides, recognizable subject landmarks, and warm light from the upper left. Preserve the simple, readable silhouettes and visible pixel clusters.

This document covers the current island selector, its settings overlay, the subject quarter-map presentation, and the reviewed English Q1 Week 1 activity surface plus the scoped Math Q1 Week 1 extension described below. It does not establish a visual standard for other curriculum or unreviewed minigames, or the retained cinematic and Krae dialogue screens. Island asset provenance and prompts live in `docs/floating-island-assets.json`.

The English extension carries Reading Island's muted pixel-art materials into five distinct task environments with a quiet parchment workbench. Native HTML controls and writing fields sit over Phaser artwork; sound evidence, reversible choices, and clear feedback lead the interface. Six generated PNG assets and 106 bundled Microsoft Zira Desktop en-US WAV recordings are recorded in `docs/ENGLISH_WEEK1_ASSETS.json`. These scoped additions do not replace the island-world tokens or establish styling for other English weeks; Week 5 remains reserved metadata.

The Math extension carries Numeric Ruins' moss and sandstone into five fraction-operation environments. The English workbench supplies the native accessible frame while exact SVG areas, lengths, and conserved-unit ledgers make each model tangible. Five generated backdrops and their prompts are recorded in `docs/MATH_WEEK1_ASSETS.json`. The implemented release contains five Math games, five English games, and twenty Science activities: thirty games in total. The Math follow-up verdict is SHIP for the four scored fixes, with its review scope recorded below.

**Key Characteristics:**
- Floating subject landscapes with distinct silhouettes and shared material character.
- Largest, brightest selection at the center; smaller, dimmer neighbors recede.
- Separate parchment-edged nameplates and crisp pixel typography.
- Darkened artwork, moving mist, and a separate lock glyph communicate locked destinations.
- English activities pair muted environmental artwork with a parchment workbench, green evidence selections, and a visible teal keyboard-focus ring.
- English task controls retain native sizing in the compact phone and tablet layout, with a scrolling work area and persistent actions.
- Math uses exact equal-part SVG geometry, fixed original units, ochre and teal quantities, and visible conservation ledgers.
- Math keeps the accessible native workbench and records support separately from first-submission checkpoints.

## Colors

The palette combines soft environmental greens and ivory with warm parchment controls, dark slate information surfaces, and earthen edges. Frontmatter values describe runtime UI colors; sky, cloud, soil, and landmark colors remain authored within the raster assets.

### Primary
- **Parchment:** `paper`, `paper-light`, and `paper-edge` define the normal control fill, light hover/text tone, and warm outline. `control-ink` keeps control marks dark.
- **Quarter Gold:** `gold`, `quarter-center`, `quarter-edge`, and `quarter-ink` distinguish the circular quarter markers from the terrain.

### Neutral
- **Deep Sage Slate:** `nameplate` provides the separate information surface; `nameplate-edge` frames it and `subject-text` supplies the smaller subject line.
- **Clouded Lock:** `locked-tint` darkens the original art, `mist-tint` colors the foreground mist, and `lock-backing` supports the light lock glyph. Keep the original island recognizable beneath the treatment.

### English activity roles

These roles are scoped to the reviewed English activity surface. `english-paper`, `english-workspace`, and `english-workspace-edge` create the quiet parchment task area; `english-header` anchors the title over scenery. `english-control`, `english-edge`, and `english-ink` distinguish actionable controls from the environment. `english-selected` with `english-selected-text` marks selected evidence, sound choices, stanza tabs, and primary actions. Selection is also conveyed by pressed or selected state, labels, and filled slots.

`english-focus` supplies the keyboard outline; `english-accent` supplies the text-selection highlight and writing caret. `english-writing-paper` and `english-writing-edge` separate editable text from read-only manuscript paper. `english-success`, `english-retry`, and `english-pending` distinguish resolved work, revision feedback, and teacher-review status; accompanying text always explains the state. `english-muted` is supporting copy, never the main task prompt.

### Math activity roles

These roles extend the same workbench only for Math Q1 Week 1. `math-workspace` is the warmer task paper. `math-ochre` and `math-teal` distinguish quantities on exact rails, fixed-area panels, and route marks; `math-piece-ochre` and `math-piece-teal` identify their supply controls. `math-model-paper`, `math-model-edge`, and `math-model-ink` carry the unfilled whole, equal divisions, and small SVG endpoint labels.

`math-inventory-paper` with `math-inventory-ink` supports whole-and-part counts. `math-ledger-paper` with `math-ledger-ink` supports delivered water and retained-length accounting. Math reuses the English control, selected, focus, writing-paper, success, and retry roles. Captions, quantities, pressed states, and feedback identify every mathematical role without relying on color.

## Typography

ArcadeClassic supplies the world heading and island titles, with Lower Pixel and monospace fallbacks. Lower Pixel supplies subject names, instructions, status text, and quarter labels. Both shipped fonts use regular weight; emphasis comes from scale, placement, color, and pixel shadows.

The world heading uses `display`; the centered nameplate uses `title`, shrinking only when its measured width exceeds 475 canvas pixels. The map title is the heading helper's rounded 39px output. `body` is used for the subtitle and entry status, `subject` for the nameplate subject, `quarter-label` for quarter markers, and `hint` for the drag/keyboard instruction. These are logical canvas sizes, not minimum mobile text sizes.

For English activities, ArcadeClassic remains reserved for the game heading and section headings (`english-heading`, `english-section`). Lower Pixel supplies task prompts, explanations, evidence, native controls, and writing (`english-body`, `english-control`, `english-input`). Task prompts use a 1.3 line height and no letter spacing. Compact mode uses `english-compact-heading` and `english-compact-body`; native writing fields also become 18px. Supporting labels range from 13px character counts to 19px desktop subtitles; keep them subordinate to the prompt. Do not shrink the entire English workbench into the island shell's small mobile text.

Math inherits the workbench fonts and native control hierarchy. Its desktop title uses `math-heading`; compact titles reuse `english-compact-heading`. `math-caption` labels model figures and measured-unit controls, `math-measured-copy` supports water ledgers and select values, and `math-inventory` emphasizes whole-and-part totals (22px in compact mode). `math-answer` keeps native rational-answer fields readable. `math-model-label` is subordinate SVG scale copy; visible captions and native quantity labels must carry the same unit information because SVG endpoints scale down on phones. Task prompts remain Lower Pixel at the English task size, with tabular numerals across the Math workbench.

## Layout

The retained game shell is a 1280 × 720 canvas using Phaser Scale.FIT and CENTER_BOTH. The world heading is centered near the top; islands occupy the middle; the separate nameplate sits at (640, 578), with arrows on each side and entry status below it. Island art fits within a 500 × 420 logical-pixel box without distorting its aspect ratio. Transparent source margins are cropped through named texture frames rather than resampling the master.

The first neighbors sit 355 logical pixels from center; subsequent positions add 215 pixels. At displayed canvas widths below 700px, fewer distant neighbors are visible. The layout remains the same canvas composition rather than changing to a stacked mobile page. Mobile letterboxing and very small scaled text are retained-shell limitations, not desirable design rules or a mobile readability target.

Quarter maps fill the canvas with matching subject terrain and landmarks. A translucent dark top band supports the title and back arrow; content-defined circular quarter markers sit over the terrain. The Grand Library retains its library backdrop and hub role. Do not infer new quarter positions or lesson content from this visual system.

### English workbench layout

At displayed canvas widths of 1100px or greater, the English interface follows the canvas bounds and scales its 1280 × 720 logical workbench with them. At the intended 1280 × 720 desktop size, a 106px header and 70px footer frame the main area. The main grid uses a 330px field-note column, a flexible parchment work area, and a 20px gap. The work area scrolls vertically without horizontal overflow; environmental narrative stays mainly to its left.

Below a displayed canvas width of 1100px, including tablets and phones, the English surface fills the browser viewport without a scale transform. The header stacks, the decorative field-note column is hidden, the workbench becomes one scrolling column, and footer actions wrap into a full-width row. Word lanterns and consonant tiles use three columns; event slots stack; phrase sockets use two columns; explanation choices stack. The decorative sound-thread line is hidden while selected words and explicit sound-position controls retain the evidence. Compact word targets and writing fields are at least 42px high, sound-position anchors are 37px high, and primary footer actions are at least 45px high. Keep the primary task mechanics reachable through work-area scrolling. The earlier tiny tablet rendering is a resolved defect, not a design precedent.

### Math workbench layout

Math shares the English 1280 × 720 frame, header, footer, scrolling task area, and the compact threshold based on displayed canvas width. Desktop narrows the environmental progress column to 300px and uses a 13px work-area gap. The model owns the broad right workbench; scenery stays mainly at left. Models and lower answer controls remain reachable through vertical work-area scrolling.

Below 1100px, Math fills the viewport with native-sized controls, hides the decorative column, and retains persistent footer actions. Mosaic panels stack; route stations use two columns; supply and model controls wrap. Mosaic zoom intentionally expands a panel to at least 900px within its own horizontal scrolling region, with Fit panels restoring the overview. Parcels become at least 44px square, rational inputs remain at least 42px high, and length sources keep a common full-row scale. Desktop, phone, and tablet evidence uses 1280 × 720, 390 × 844, and 768 × 1024 respectively.

## Elevation & Depth

Depth is primarily spatial: the centered island uses scale 1, its immediate neighbors 0.57, and second neighbors 0.28. Alpha falls by 0.22 per relative position; neighbors also sit lower and behind the selection. Keep the island's rocky underside and upper-left material lighting as part of the illustration.

Controls add a hard offset black shadow at (6, 8) with 0.28 alpha, a warm four-pixel outline, and a thin inner light stroke. Quarter nodes use a gold halo at 0.18 alpha and a hard shadow at (5, 7) with 0.34 alpha. These are pixel-game layers, not blurred card elevation.

Carousel movement lasts 460ms with Cubic.Out easing. Idle islands bob by five logical pixels; locked mist drifts horizontally by thirteen. Foreground cloud strips drift 35 pixels with Sine.inOut, yoyoing over 13–17.8 seconds. Reduced-motion mode removes the bob, mist drift, and cloud drift and makes carousel movement immediate. Pointer hover scales controls modestly; quarter markers grow to 1.12.

English workbench depth comes from opaque or nearly opaque parchment, dark environmental bands, and crisp borders rather than new blurred card shadows. Controls transition background and border color over 120ms. A resolved round briefly restores backdrop alpha from 0.8 to 1 over 450ms. Reduced-motion preferences remove the control transitions and skip that round-confirmation tween.

Math keeps that flat parchment depth. Secured unit rails reveal over 850ms, and Quill crosses the completed bridge over 1400ms. Both use cubic-bezier(.16, 1, .3, 1). Opening a native Math dialog pauses these animations and Phaser tweens; model actions are blocked while it is open. Reduced-motion preferences remove the Math animations. The success model and its explanatory text remain visible without motion.

## Shapes

Use crisp pixel-rendered raster silhouettes for islands and clouds. The game enables pixelArt, roundPixels, disabled antialiasing, and pixelated canvas rendering. UI frames have gently softened corners (`frame`); settings panels and the lock backing use `modal`. Quarter markers remain circular. Keep nameplates and locks as runtime UI layers separate from the island artwork.

English workspaces use `english-workspace`, controls and evidence tiles use `english-control`, and native writing fields use `english-field` corner tokens. Event and sail destinations have dashed borders until filled; a solid border and changed fill reinforce placement. Keep language, controls, labels, and feedback separate from the generated backdrop and transparent lantern art.

Math inherits the workbench and button corners; rational-answer fields use `math-field`. Model rails and mosaics use exact rectangular SVG divisions, whole crates and litres remain distinct outlined units, and supply parcels remain separate controls. `math-model-gap` spaces the worked-example and measured-length figure groups. Render mathematical geometry in code and keep labels, numerals, and controls separate from environmental art.

## Components

### Carousel navigation

Parchment arrow controls flank the nameplate. They brighten and scale to 1.03 on hover, compress to 0.98 on press, and move the selection on release. Small square position markers use full alpha and scale 1.4 for the selected destination, versus alpha 0.35 at rest. Navigation also supports left/right keys, dragging/swiping, and tapping a neighboring island to focus it. Selection is remembered on return.

### Selection nameplate and entry status

The dark slate nameplate has a warm three-pixel edge, a centered island title, and a smaller subject line. It stays separate from the art and enters the centered destination when available. The status line below it says ENTER ISLAND or LOCKED · COMING SOON; an attempted locked entry replaces that line with mist feedback. Enter/Space and the centered island also request entry. Locks must continue to block access.

### Island states

Normal state shows the full-color master with no mist or lock. Locked state applies the configured blue-gray tint, shows mist at 0.72 alpha, and adds the light lock on a dark backing. Both states exist for every destination; the registry can override default access. The presentation must not invent lessons or change unlock rules.

### Quarter markers

Gold circular markers have a warm dark outline, pale center, centered quarter label, halo, and offset shadow. Hover grows the marker to 1.12; selecting it follows the existing quarter route. Empty maps use the existing coming-soon message rather than fabricated activities.

### Settings overlay

The existing settings dialog dims the world with a black overlay, uses a dark panel with nested parchment/brown borders, and retains MUSIC/SFX toggles and BACK/EXIT parchment controls. This supporting overlay does not define a new game-wide dialog system.

Sidecar previews are self-contained HTML/CSS translations of these Phaser visuals. Preview focus selectors mirror hover for inspection; the canvas currently uses global navigation keys and does not implement DOM focus rings for individual controls.

### English activity controls

English controls are native buttons, fieldsets, selects, inputs, textareas, and modal dialogs layered over Phaser. Standard buttons use warm paper, a two-pixel earthen edge, and a 43px minimum height at desktop scale. Hover lightens the paper and darkens the border; press darkens the fill. Selected evidence and sound controls use green with pale text and `aria-pressed`; primary progression actions use the same green family. Native keyboard focus uses a three-pixel teal outline offset by three pixels. Disabled controls reduce opacity to 0.64. Preserve keyboard focus across rerenders and keep pointer/tap alternatives to dragging.

Line, word, and sound recordings can be replayed freely. Help, Pause, and Settings open native dialogs; opening a dialog pauses narration and closing it resumes the recording when appropriate. Narration has an independent setting alongside Music and Sound effects. Visible status explains unavailable recordings or storage. Transcripts, hints, and worked examples remain available and are identified as support; objective result copy distinguishes independent checkpoints from completion with support. There is no countdown.

### English task modes

- **Soundscape Studio:** select onomatopoeic evidence, then tap or drag it into ordered event destinations. A chosen word is explicitly identified as ready to place; removing evidence remains available.
- **Alliteration Airship:** tap supplies into the next empty sail socket or drag to a chosen socket, preserve given words, remove placed tiles, select the opening sound, and explain the meaningful phrase.
- **Vowel Echo Cavern:** select matching word lanterns, compare their recordings and vowel samples, then explain the shared vowel sound. Lantern brightness and green labels reinforce the selected state.
- **Consonance Threadworks:** select word evidence and explicit Start, Middle, or End sound anchors, choose the consonant sound, and explain the connection. The compact view preserves the anchors even when its decorative thread is hidden.
- **Poetry Lantern Festival:** inspect three authored model lines, then compose twelve original lines across four three-line stanzas. Theme choice, stanza tabs, editable lines, span annotations, writer note, manuscript review, and submission each have a clear state.

### English poem editor and review

Writing uses labeled native text fields with visible character counts, a teal caret, and normal text selection; Phaser global key capture is disabled while this surface is active. Learners select a span and mark an intended sound device. Editing a marked line invalidates any span that no longer matches its saved quote; the annotation is visibly marked UNPLACED and must be reattached or removed before submission. Structure checks require all twelve lines, placed intentions for all four devices, and a writer note. They do not judge whether the poem successfully achieves a literary effect.

Drafts, analysis progress, and intentions save on this device. Continue saved poem is available after its model analysis is resolved. Download draft and Download poem export literal plain text, including intentions, support used, and review status. A storage failure replaces the saved confirmation with a download instruction. Submitted work clearly says **Teacher review pending** and remains revisable; no automated literary-quality grade is implied.

### English review boundary

The initial review disposition was FIX. The scoped follow-up verdict is SHIP after resolving tablet readability and supplying top-of-workspace phone captures for Airship, Cavern, and Threadworks. Desktop and mobile evidence in `.impeccable/review/english/{desktop,mobile}` covers all five games plus the poem editor and submission; `.impeccable/review/english/tablet-after.png` records the corrected compact tablet presentation. The scoped verdict is in `.impeccable/review/english/fix-verdict.md`. The user-pinned pixel world and saved mechanics plan are the visual authorities; there is no separate approved minigame comp or quality-bar card. Offline pronunciation and classroom content still need human review.

### Math workbench controls

Math extends the existing native buttons, selects, text inputs, fieldsets, focus treatment, dialogs, and resize behavior. Keyboard and tap operate every model; bridge dragging is optional. Preserve focus and work-area scroll through rerenders. Undo and Reset model reverse model changes while keeping submitted checkpoint records. Help, Pause, and Settings remain reachable above the workbench; dialogs pause motion, trap focus through the shared native lifecycle, and block model actions. Math settings retain Music and Sound effects.

### Math model modes

- **Fraction Bridgeworks:** place the ordered ochre and teal equal pieces on a fixed whole rail, optionally drag a piece, remove extras, and identify the unchanged original unit. On success the rail is secured and Quill crosses the completed section; the confirmation remains understandable with reduced motion.
- **Mosaic Converter:** both source panels retain the same-sized whole and their original shaded areas while a shared grid changes. Enter equivalent numerators, transfer tile groups, and show addition or removal on the work rail. A proposed numerator never redraws the original area. Zoom panels supports fine grids without shrinking the native answer controls.
- **Whole-Trade Depot:** unload each mixed-number load, inspect an outlined whole crate to reveal its equal parts, select parcels, and exchange exactly one whole's worth in an atomic trade. The inventory conserves value. When loose parts are below one whole, No exchange needed is an explicit action.
- **Reservoir Rescue:** keep whole litres separate from loose measures and the delivery jug. Exchange one or all wholes for equal parts, then draw whole litres or measured groups without exceeding the order. The visible ledger preserves reservoir plus delivered water equals starting water.
- **Caravan Supply Planner:** choose story quantities, the operation, and metres or litres. Rope and ribbon sources use the same 4 m full-row scale with metre marks and exact shared subdivisions. The selected operator drives the join or retained-length preview, including an incorrect choice; subtraction also shows cut plus retained equals starting length. A regrouped starting-length ledger is required for the ribbon challenge. The route requires exactly three distinct stops, at least 3 1/2 L delivered, and at least 1 L retained from 5 L; any feasible order is accepted. An unscored trial previews both totals. The later rope exit separately requires the conservation explanation, Used rope + rope left = starting rope, as an explicit checkpoint.

Each day's opening diagram matches its authored worked example: bridge 1/6 + 2/6, mosaic 1/2 + 1/3 repartitioned into sixths, depot 1 3/4 + 2 2/4 traded into 4 1/4, reservoir 2 1/4 L minus 3/4 L with its exchange, and caravan 1/2 m + 1/4 m. Keep the illustrated unit and quantities aligned with the adjacent text.

### Math support and completed journal

Each game has three challenges and an exit check. Exact rational checks validate the model and answer; equivalent and improper fractions are accepted. Shared units may use supported non-minimal denominators up to 48 parts, whole-to-part exchanges may convert all available wholes, and every feasible route is accepted. Specific feedback identifies the failed model, unit, equation, conservation, or answer check.

Hints and inspected worked examples are recorded as support. First-submission checkpoints stay separate from corrected completion; Undo and Reset model do not erase them. Results show independent checkpoints and attempts alongside completed challenges, then save the completed journal on this device. Download journal exports plain text with answers, checkpoint records, attempts, hints, and worked examples. Storage failure replaces the save confirmation with a download instruction. A completed journal does not imply every checkpoint was independent.

### Math review boundary

The initial finish-review disposition in `.impeccable/review/math/finish-review.md` was FIX. The scoped follow-up verdict in `.impeccable/review/math/fix-verdict.md` is SHIP: same-scale Caravan lengths, the stored exit conservation-explanation checkpoint, all five authored tutorial models, and scoped Math documentation are resolved. The reviewer identified no fix-batch regressions in the supplied evidence. This verdict covers those four scored fixes and does not constitute a new full-surface review.

Evidence in `.impeccable/review/math/{desktop,mobile}` covers all five games at the top and bottom of the workbench, results, the route, and the secured bridge; `.impeccable/review/math/desktop/math-tablet.png` records the compact tablet layout. Updated tutorial diagrams and the Caravan length and exit-explanation confirmations are in `.impeccable/review/math/fixes/{desktop,mobile}`. Five Numeric Ruins backdrops live in `public/assets/math-week1`; `docs/MATH_WEEK1_ASSETS.json` records each generation prompt and source, and the shipping PNG scan found five embedded prompts with none missing. Mathematical units are rendered in code. The pinned world and `docs/surfaces/math-week1.md` are the visual authority; there is no new visual direction or separate approved Math comp. The single detector pass in `.impeccable/review/math-detector.json` reported 32 advisory findings (20 palette, 11 type, one radius); it did not establish a different aesthetic.

## Do's and Don'ts

### Do:
- **Do** preserve muted pixel clusters, earthy floating undersides, and warm upper-left light.
- **Do** repeat each island's subject identity in its quarter-map terrain and landmarks.
- **Do** keep the centered selection dominant and the nameplate separate from the artwork.
- **Do** preserve the normal/locked distinction and reduced-motion behavior.
- **Do** keep the English workbench's native controls, visible focus, green evidence states, and compact layout below a displayed canvas width of 1100px.
- **Do** keep the five English modes mechanically distinct and separate intended poem annotations from teacher judgment.
- **Do** keep Math whole units, shaded areas, and measured lengths exact and visibly conserved; same-scale comparisons must use the same original unit.
- **Do** retain native Math controls, specific feedback, optional dragging, visible focus, and separate support and independent-checkpoint records.

### Don't:
- **Don't** replace the chosen world with a glossy remaster or a different illustration style.
- **Don't** bake names, locks, or navigation UI into the island master artwork.
- **Don't** canonize mobile letterboxing or small scaled text as readability goals.
- **Don't** extend this document's scope beyond the English and Math Q1 Week 1 surfaces into other unreviewed minigame or dialogue styling.
- **Don't** treat saved or structurally complete poems as automatically graded literary mastery.
- **Don't** bake mathematical quantities into backdrop art, stretch a whole to fit an answer, or present supported Math completion as independent mastery.
