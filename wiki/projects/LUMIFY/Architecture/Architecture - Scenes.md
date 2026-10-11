---
date: 2026-10-10
type: architecture-module
project: "[[wiki/projects/LUMIFY]]"
module: scenes
path: src/scenes
scanned-commit: ""
tags: [architecture, lumify]
ai-first: true
---

## For future agent

This note maps the `src/scenes` module of [[wiki/projects/LUMIFY]] as observed on 2026-10-10. It identifies where a future world-map or narrative presentation would meet the current game, without implying those features already exist.

<!-- @generated:start -->
## Role and current flow

Eleven Phaser scenes are registered in `src/config/gameConfig.js`. `BootScene` loads art and enters `MenuScene`; Start enters `IslandSelectScene`, then Vulcan's `IslandMapScene`, then `QuarterDetailScene`. Only lesson IDs `q1-m1-l1` through `q1-m1-l5` dispatch to the five Science scenes: `MixMatchScene`, `SupplyCartScene`, `MixtureDetectiveScene`, `ScienceCourtScene`, and `InventMixScene`. Their post-game path can start the shared `AssessmentScene`, which returns to the quarter path. `src/config/content.js` supplies the static content and island/quarter data; `src/systems/assessmentFlow.js` handles the game-to-assessment handoff. This is verified from source as of 2026-10-10.

## Dependencies and boundaries

Scenes import Phaser, [[wiki/projects/LUMIFY/Architecture/Architecture - Config]], [[wiki/projects/LUMIFY/Architecture/Architecture - UI]], and in relevant places [[wiki/projects/LUMIFY/Architecture/Architecture - Systems]]. They use `this.scene.start(...)` to move between screens and transient parameters for return location/results. Current `IslandSelectScene` draws three island PNGs and a large lock for Numeric and Reading. There is no Grand Library hub, eight-realm selector, Quill, dialogue scene, restoration display state, persistent student progression, or records scene in this module. The proposed art direction at `docs/art-direction/LUMIFY_VISUAL_DIRECTION.md` would change presentation and assets around this flow; it does not describe current code.

## Source pointers

`src/scenes/BootScene.js`; `src/scenes/MenuScene.js`; `src/scenes/IslandSelectScene.js`; `src/scenes/IslandMapScene.js`; `src/scenes/QuarterDetailScene.js`; five named mini-game scene files; `src/scenes/AssessmentScene.js`; `LUMIFY_GAME_SIDE_AUDIT.md`.
<!-- @generated:end -->
