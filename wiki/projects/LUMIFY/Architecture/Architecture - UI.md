---
date: 2026-10-10
type: architecture-module
project: "[[wiki/projects/LUMIFY]]"
module: ui
path: src/ui
scanned-commit: ""
tags: [architecture, lumify]
ai-first: true
---

## For future agent

This note describes reusable Phaser UI in [[wiki/projects/LUMIFY]] as inspected on 2026-10-10. It identifies the existing buttons, modal framing, and mini-game HUD that could carry later art direction without claiming a completed redesign.

<!-- @generated:start -->
## Role

`src/ui/ui.js` exports the current paper/cream/cyan color constants, Pixelify Sans text style, image coverage, button, back-arrow, modal, toggle-row, and toast helpers. `src/ui/minigameUi.js` supplies shared laboratory backdrops, HUD/feedback, drawn icons, and small effects used by games. These are Phaser display objects used by [[wiki/projects/LUMIFY/Architecture/Architecture - Scenes]], not a DOM component library. Source inspected as of 2026-10-10.

## Boundaries

The common UI makes the existing brown/cream/cyan identity reusable, but screen composition still varies by scene. There is no built-in Quill dialogue overlay, Library voice system, map cloud layer, all-eight-realm legend, or persistent restoration component. `docs/art-direction/LUMIFY_VISUAL_DIRECTION.md` specifies a possible shared visual language for future work. Validate text readability after Phaser `FIT` scales the 1280 × 720 canvas on a narrow device.

## Source pointers

`src/ui/ui.js`; `src/ui/minigameUi.js`; `src/styles.css`; `src/config/gameConfig.js`.
<!-- @generated:end -->
