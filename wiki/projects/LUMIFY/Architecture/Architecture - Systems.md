---
date: 2026-10-10
type: architecture-module
project: "[[wiki/projects/LUMIFY]]"
module: systems
path: src/systems
scanned-commit: ""
tags: [architecture, lumify]
ai-first: true
---

## For future agent

This note describes the two current support systems of [[wiki/projects/LUMIFY]], inspected on 2026-10-10. They route a completed mini-game to an assessment and expose test state; they do not persist learner progress or implement the proposed restoration model.

<!-- @generated:start -->
## Role and data flow

`src/systems/assessmentFlow.js` looks up a lesson assessment in `src/config/content.js`, chooses the `START FT` or `START ST` label, and starts `AssessmentScene` with the lesson/location and transient mini-game result/score. If no assessment exists, it returns to `QuarterDetailScene`. `src/systems/testSeam.js` activates a browser testing state/command seam only for `?test=1`; scenes call its ready/state helpers so Playwright can inspect or direct deterministic flows. These are verified from source as of 2026-10-10.

## Boundaries

Neither file is a saved progress database, student identity layer, LMS integration, or narration engine. The assessment remains reachable after a mini-game loss through existing result actions, so a future story gate cannot assume victory is required. See [[wiki/projects/LUMIFY/Architecture/Architecture - Scenes]] and `docs/lore/LUMIFY_NARRATIVE_INTEGRATION_PLAN.md`.

## Source pointers

`src/systems/assessmentFlow.js`; `src/systems/testSeam.js`; `tests/smoke.spec.js`; `LUMIFY_GAME_SIDE_AUDIT.md`.
<!-- @generated:end -->
