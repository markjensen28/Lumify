# Lumi Adventures

A Phaser 3 browser learning game set in Lumora. Subject islands lead to four
quarters, topic/week routes, daily activities, and assessments. Existing content
includes Science, English, and Mathematics. Krae introduces the world through
an opening cinematic, library dialogue, a world-intro video, and world dialogue.

## Current island presentation

The user selected the original muted pixel-art floating-island visual direction.
Keep the newer subject islands and existing game features. Use a depth carousel:
the centered island is largest; neighboring islands shrink and dim. Start at
the unlocked Grand Library. Support arrows, keyboard, dragging/swiping, and
tapping a neighbor to focus it. Enter
through the centered island or its nameplate. Preserve selection on return.

Eight destinations: Numeric Ruins (Mathematics), Vulcan Caverns (Science),
Reading Island (English), Hibla Archipelago (Filipino), Hearthwork Terraces
(EPP), Tala Crossroad (Araling Panlipunan), Concord Grove (Edukasyon sa
Pagpapakatao), and the Grand Library knowledge hub. Akashic Archives and
Unknown Island do not appear in selection.

Science, English, Mathematics, and the Grand Library are initially unlocked.
Every island supports a full-color normal state and a darkened, mist-covered locked state
with a lock symbol. Locks must prevent entry. Do not invent lessons or change
access as part of visual work. The runtime registry may override an island's
default lock state through `islandUnlocks`.

After Krae's library dialogue, fade to white and play
`public/assets/video/world-intro-browser.mp4` (the H.264 playback copy of the
supplied HEVC `world-intro.mp4`). Fade into Krae's world dialogue over the
same Grand Library-centered carousel used for selection, with no selection
controls or empty viewing pause. After the dialogue, fade to white again and
reveal the interactive selector. Returning from an island preserves selection.

Each subject's quarter-map terrain and landmarks should repeat its island's
visual identity. The four locked subject maps are prepared for future content;
the Grand Library retains its hub role. Current curriculum and minigame
behavior are outside this visual change.

## Constraints

Preserve the intro cinematic, both Krae dialogue sequences, settings, music,
and current scene navigation. The existing game is a 1280 x 720 canvas using
Phaser Scale.FIT; narrow displays show fewer carousel neighbors. Respect
reduced-motion preferences. Keep all delivered art inside public/assets and
record generation prompts in docs/floating-island-assets.json.

## English Q1 Week 1 activities

Five English games are available in Reading Island: Soundscape Studio,
Alliteration Airship, Vowel Echo Cavern, Consonance Threadworks, and Poetry
Lantern Festival. They use the first-week sound-device and poetry focus from
the saved Math/English plan, with bundled narration, exact authored evidence
checks, reversible attempts, and an original-poem editor. The poem is saved
locally with intended sound-effect annotations for human review; the game does
not automatically grade creative writing quality.

English activity controls are accessible HTML over the Phaser environment.
Desktop UI follows the game's canvas; phone-width activity screens use a
readable full-viewport layout with a scrolling work area. Global navigation,
intro dialogue, music settings, and subject-return behavior remain available.

Math and English quarter metadata now reserves five weekly topic containers;
the fifth topic is explicitly unassigned. Math and English Q1 Week 1 each have
five daily games. With twenty existing Science activities, the implemented
release scope is thirty games. See docs/MATH_ENGLISH_Q1_WEEK1_MINIGAME_PLAN.md,
docs/ENGLISH_WEEK1_ASSETS.json, and docs/MATH_WEEK1_ASSETS.json.

## Math Q1 Week 1 activities

Numeric Ruins offers Fraction Bridgeworks, Mosaic Converter, Whole-Trade Depot,
Reservoir Rescue, and Caravan Supply Planner. Exact rational arithmetic checks
both the learner's model and their answer, with three challenges and an exit
check per day. Equivalent fractions, non-minimal shared units up to 48 parts,
all-whole-to-part subtraction, and every feasible station route are accepted.
Hints and worked examples are recorded separately from independent checkpoints.
Completed journals save locally and can be downloaded as plain text.

The activities extend the accessible English workbench frame, with native
keyboard/tap input, optional bridge-piece dragging, reversible model actions,
help, settings, pause, and subject-aware return. Five generated environment
backdrops connect the mechanics to Numeric Ruins' mossy sandstone world;
mathematical areas, lengths, and units are drawn accurately in code.
