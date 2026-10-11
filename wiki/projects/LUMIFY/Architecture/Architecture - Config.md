---
date: 2026-10-10
type: architecture-module
project: "[[wiki/projects/LUMIFY]]"
module: config
path: src/config
scanned-commit: ""
tags: [architecture, lumify]
ai-first: true
---

## For future agent

This note maps the static configuration module of [[wiki/projects/LUMIFY]], verified on 2026-10-10. It is the current source of realm status and lesson/assessment IDs; any later unlock system would require new state beyond this file.

<!-- @generated:start -->
## Role

`src/config/gameConfig.js` sets a 1280 × 720 Phaser canvas, `FIT` scaling, centered display, pixel rendering, and registration of eleven scenes. `src/config/content.js` defines the three current islands with hardcoded `unlocked` values: Vulcan true, Numeric and Reading false. It defines four Vulcan quarter nodes, lesson structures, five Q1 Mixtures game configurations, and assessment data. These facts are verified from source as of 2026-10-10.

## Dependencies and boundaries

`gameConfig.js` imports Phaser and the scene classes; `src/main.js` constructs the game with this object. `content.js` is imported by navigation, game, and assessment scenes and by the assessment-flow helper. Its lock booleans are static configuration, not a reward or mastery calculation. Five future realms named in `docs/lore/LUMIFY_LORE_V2.md` have no entry here. The proposed all-eight visual map and name-hiding policy in `docs/art-direction/LUMIFY_VISUAL_DIRECTION.md` are **not implemented**. The active scene topology is summarized in [[wiki/projects/LUMIFY/Architecture/Architecture - Overview]].

## Source pointers

`src/config/gameConfig.js`; `src/config/content.js`; `src/main.js`; `package.json`.
<!-- @generated:end -->
