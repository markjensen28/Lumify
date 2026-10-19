# Mixture Compare Cards

Minigame 3 follows the supplied reference: parchment header, large green and blue sample cards, a purple question panel, round progress, scientist feedback, detective badge, and a bottom task summary. The existing LUMIFY scientist replaces the reference robot. Existing mixture sprites remain the source of the sample illustrations.

Answers are selected first, then submitted. Sample cards can select their matching answer too. Correct answers stay highlighted while the player reads feedback and chooses NEXT. Five questions and the final comparison retain the original scoring and three-mistake limit. The header streak counts consecutive correct answers and resets after a mistake.

The top question button opens How to Play. Help and Settings freeze the timer and preserve the answer selection. Hint, Pause, and the P shortcut have been removed. Escape dismisses these overlays without leaving the activity.

## Generated artwork

Generated using the built-in image_gen tool:

- `public/assets/ui/mixture-detective/sample-stage.png`: empty window and wooden laboratory display behind each sample.
- `public/assets/ui/mixture-detective/detective-badge.png`: gold and blue magnifying-glass achievement badge with alpha transparency.

The complete generation prompts are saved in `output/imagegen/mixture-detective/prompts.md`. Text, hit areas, selection states, and stepped panel borders are rendered by Phaser.

## Verification

- `tests/smoke.spec.js`: five question rounds, wrong-answer recovery, final comparison, result, assessment return, and help.
- `tests/detective-controls.spec.js`: select before submit, overlay timer freeze, blocked background input, selection preservation, absence of pause/hint controls, running timer after P, and streak reset.

## Navigation cleanup

See `MINIGAME_NAVIGATION.md` for the shared Back, Help and Settings positions, common parchment header, and illustrated help layout. The day panel has no decorative icon. Current navigation previews are in `screenshots/minigame-navigation/`.
