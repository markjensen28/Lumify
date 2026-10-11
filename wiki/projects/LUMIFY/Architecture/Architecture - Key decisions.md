---
date: 2026-10-10
type: adr
decision: "No commit-derived architecture decisions available in this workspace"
status: proposed
related-projects: ["[[wiki/projects/LUMIFY]]"]
scanned-commit: ""
tags: [adr, decision, architecture, lumify]
ai-first: true
---

## For future agent

This note records the evidence limit for architecture decisions in [[wiki/projects/LUMIFY]] as of 2026-10-10. The local workspace has no Git metadata, so source code reveals current structure but cannot establish why earlier developers chose it; the current visual-direction decision is documented separately.

<!-- @generated:start -->
## Verifiable current structure

- The entry point is `src/main.js`, and scenes are registered in `src/config/gameConfig.js` (as of 2026-10-10, source inspection).
- Content and locks are static in `src/config/content.js`, while `src/systems/assessmentFlow.js` routes games to a shared `AssessmentScene` (as of 2026-10-10, source inspection).
- The deterministic architecture scan returned `git: {}` and no `scanned-commit`; therefore it supplies **no commit-derived design rationale**. These observations are not labeled accepted architectural decisions.

## Pending or separate choices

The proposed central Library map, eight-realm visual hierarchy, and UI style live in `docs/art-direction/LUMIFY_VISUAL_DIRECTION.md` and a separate [[wiki/decisions/2026-10-10 - LUMIFY visual direction]] note. They have not been implemented in code. Exact map layout, mobile treatment, and final asset palette remain design review choices.
<!-- @generated:end -->
