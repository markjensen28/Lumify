---
date: 2026-10-10
updated: 2026-10-10
type: project
status: active
tags: [project, lumify, game, education, narrative-design, art-direction]
repo: D:/NEW CAPS/PhaserGame
ai-first: true
---

## For future agent
[[wiki/projects/LUMIFY|LUMIFY]] is an active Grade 6 fantasy learning game project, as documented on 2026-10-10. This note points to the current lore and visual-direction specifications and distinguishes proposed presentation from the audited Phaser prototype. Check the source files before treating any proposed map, character, or restoration feature as implemented.

## Overview

- **Purpose:** A web-based learning game in which a learner helps the fantasy world [[docs/lore/LUMIFY_LORE_V2|Lumora]] remember through curiosity and understanding. The current project sources are in `D:/NEW CAPS/PhaserGame`.
- **Narrative basis:** The [[docs/lore/LUMIFY_LORE_V2|V2 lore bible]] establishes independent student instances of Lumora, the Grand Library, the Fading, eight Knowledge Realms, and Quill as a young origami paper-fox apprentice Spellkeeper (as of 2026-10-10; `docs/lore/LUMIFY_LORE_V2.md`). The root `LUMIFY_World_and_Lore_Design.md` mirrors that V2 lore as of this update.
- **Visual basis:** [[docs/art-direction/LUMIFY_VISUAL_DIRECTION|Visual Direction]] specifies a compact, **ocean-grounded** eight-realm map centered on the Grand Library, detailed fantasy pixel art, mist for the two near unavailable realms, dark clouds for five distant future realms, and a coherent Library-inspired UI (as of 2026-10-10; `docs/art-direction/LUMIFY_VISUAL_DIRECTION.md`). [[docs/art-direction/LUMIFY_ASSET_AND_MUSIC_PROMPTS|Asset and music prompts]] turn that direction into copy-ready generation requests. The user-supplied image is a composition and atmosphere reference, not an asset to copy.
- **Implementation boundary:** The audited Phaser prototype has three island illustrations, playable Science content in Vulcan Caverns, and locked Numeric Ruins and Reading Island. It has no eight-realm map, Grand Library hub, Quill presentation, dialogue, restoration state, or durable student progression in the supplied code (as of 2026-10-10; `LUMIFY_GAME_SIDE_AUDIT.md`, `src/scenes/IslandSelectScene.js`, `docs/lore/LUMIFY_NARRATIVE_INTEGRATION_PLAN.md`). The five additional realms are worldbuilding for later releases.

## Current design direction

- First-view map: the Grand Library and all eight realm silhouettes are visible; only the Library and active Vulcan Caverns have player-facing names in this chapter (as proposed on 2026-10-10; `docs/art-direction/LUMIFY_VISUAL_DIRECTION.md`).
- Access hierarchy: Vulcan is available from the start; Numeric and Reading are near but unavailable under light mist; Hibla Archipelago, Tala Crossroads, Concord Grove, Hearthwork Terraces, and Rhythm Shoals are distant future regions under darker cloud (as proposed on 2026-10-10; `docs/art-direction/LUMIFY_VISUAL_DIRECTION.md`).
- Narrative reason: the Library can currently verify the Vulcan thread as a stable first route. The map's mist and clouds express weakened knowledge paths in the Library chart, not literal permanent storms over inhabited places (as proposed on 2026-10-10; `docs/lore/LUMIFY_LORE_V2.md`, `docs/art-direction/LUMIFY_VISUAL_DIRECTION.md`).
- Source-code scope for this refinement: documentation only. No game features or art assets were implemented in the 2026-10-10 visual-direction session (source: `docs/art-direction/LUMIFY_VISUAL_DIRECTION.md` and the user request).

## Source documents

- `docs/art-direction/LUMIFY_VISUAL_DIRECTION.md` - proposed world map, art language, UI, access-state, audio, accessibility, and production brief.
- `docs/art-direction/LUMIFY_ASSET_AND_MUSIC_PROMPTS.md` - copy-ready generation sheet for grounded-coast map layers, Quill, UI, Vulcan screens, and three realm BGM tracks.
- `docs/lore/LUMIFY_LORE_V2.md` - current narrative specification.
- [[LUMIFY_World_and_Lore_Design]] - root lore copy, synced to V2 on 2026-10-10.
- `docs/lore/LUMIFY_NARRATIVE_INTEGRATION_PLAN.md` - proposed story integration points and implementation boundaries.
- [[docs/lore/LUMIFY_LORE_REFINEMENT_REPORT]] - reasons for the V1-to-V2 lore changes and the 2026-10-10 visual addendum.
- [[docs/lore/LUMIFY_LORE_V1_ARCHIVE]] - preserved original lore for historical comparison; its rules are not current canon.
- [[LUMIFY_GAME_SIDE_AUDIT]] - prior technical and gameplay audit; verify against source before new implementation.
- `C:/Users/rotse/.codex/attachments/61b19ce0-52b9-4430-9095-910697488810/Pasted text.txt` - user-supplied visual brief for the 2026-10-10 session.

## Architecture

[[wiki/projects/LUMIFY/Architecture/Architecture - Overview|Architecture overview]] records the 2026-10-10 deterministic code scan and links scene, config, system, and UI module notes. It has no Git commit anchor because this workspace lacks Git metadata.

## Recent Activity

- 2026-10-10: [[wiki/logs/2026-10-10 - LUMIFY|Visual direction and lore refinement log]].

## Key Decisions

- [[wiki/decisions/2026-10-10 - LUMIFY visual direction|Visual direction decision]] records the user-requested map and interface direction. Final map placement, accessible narrow-screen treatment, and timing of later realm-name reveals remain open design approvals (as of 2026-10-10; `docs/art-direction/LUMIFY_VISUAL_DIRECTION.md`).
