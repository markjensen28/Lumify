import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { englishWeekOneGames, ENGLISH_AUDIO_CLIPS } from '../../src/config/englishWeekOne.js';
import { mathWeekOneGames } from '../../src/config/mathWeekOne.js';
import { initialEnglishState, englishAction, checkEnglishRound, englishAccuracy, normalizeEnglishDraft, poemSubmissionIssues, annotationIsPlaced, buildPoemReport } from '../../src/games/english/englishLogic.js';
import { islandCurricula, vulcanQuarterDetails } from '../../src/config/content.js';

const act = (game, state, type, value) => englishAction(game, state, { type, value });
function answer(game, state, phrase) {
  const round = game.rounds[state.round];
  let next = { ...state, phase: 'playing', selected: [...round.targets], reason: round.reasonId,
    sound: round.sound ?? null, repair: round.repair?.answer ?? null,
    positions: Object.fromEntries(round.targets.map(id => [id, round.position])),
    mappings: Object.fromEntries((round.events ?? []).map(event => [event.id, round.words.find(word => word.word === event.word).id])),
  };
  if (round.kind === 'phrase') next.slots = [...(phrase ?? round.acceptedPhrases[0])];
  return next;
}

test('only the five first-week days in each subject become games; later weeks stay placeholders', () => {
  assert.equal(englishWeekOneGames.length, 5);
  assert.equal(new Set(englishWeekOneGames.map(game => game.lessonId)).size, 5);
  for (const id of ['reading-island', 'numeric-ruins']) {
    for (const [q, quarter] of Object.entries(islandCurricula[id].quarters)) {
      assert.equal(quarter.majors.length, 5);
      assert.equal(quarter.majors.flatMap(major => major.lessons).length, 25);
      for (const major of quarter.majors) for (const lesson of major.lessons) {
        const game = [...englishWeekOneGames, ...mathWeekOneGames].find(game => game.lessonId === lesson.id);
        assert.equal(lesson.placeholder, !game);
        if (game) assert.equal(lesson.title, game.title);
      }
      if (id === 'reading-island' && q === 'q1') assert.equal(quarter.majors[0].placeholder, false);
    }
  }
  assert.equal(vulcanQuarterDetails.q1.majors.flatMap(major => major.lessons).length, 20);
});

test('every authored round has valid exact evidence; article/device co-occurrence is deliberate', () => {
  for (const game of englishWeekOneGames) for (const [index, round] of game.rounds.entries()) {
    const state = answer(game, { ...initialEnglishState(game), round: index });
    assert.equal(checkEnglishRound(round, state).correct, true, round.id);
    for (const target of round.targets) {
      assert.ok(round.words.some(word => word.id === target));
      assert.equal(checkEnglishRound(round, { ...state, selected: state.selected.filter(id => id !== target) }).correct, round.kind === 'phrase', round.id);
    }
    assert.equal(checkEnglishRound(round, { ...state, reason: 'letters' }).correct, false);
  }
  const festival = englishWeekOneGames[4].rounds[0];
  assert.equal(festival.words.find(word => word.id === festival.targets[0]).word, 'buzz');
});

test('timeline event swaps fail even with the correct evidence set and explanation', () => {
  const game = englishWeekOneGames[0], round = game.rounds[2];
  const state = answer(game, { ...initialEnglishState(game), round: 2 });
  const swapped = { ...state, mappings: { break: state.mappings.pond, pond: state.mappings.break } };
  assert.equal(checkEnglishRound(round, swapped).checks.events, false);
  assert.equal(checkEnglishRound(round, swapped).checks.evidence, true);
});

test('meaningful alternate phrases pass; matching initials in nonsense order do not', () => {
  const game = englishWeekOneGames[1], round = game.rounds[2];
  const base = { ...initialEnglishState(game), round: 2 };
  assert.equal(checkEnglishRound(round, answer(game, base, ['Blue', 'birds', 'balance', 'berries'])).correct, true);
  assert.equal(checkEnglishRound(round, answer(game, base, ['berries', 'birds', 'Bright', 'balance'])).correct, false);
  const first = act(game, act(game, initialEnglishState(game), 'start'), 'place', { index: 0, word: 'sway' });
  assert.equal(first.slots[0], 'Seven');
});

test('wrong sound or wrong sound location fails independently of word spelling', () => {
  const echo = englishWeekOneGames[2], round = echo.rounds[1];
  const state = answer(echo, { ...initialEnglishState(echo), round: 1 });
  assert.equal(checkEnglishRound(round, { ...state, sound: 'ay' }).checks.sound, false);
  const thread = englishWeekOneGames[3], t = thread.rounds[0];
  const full = answer(thread, initialEnglishState(thread));
  assert.equal(checkEnglishRound(t, { ...full, positions: Object.fromEntries(t.targets.map(id => [id, 'start'])) }).correct, false);
  const exit = thread.rounds[3];
  assert.equal(exit.targets.length, 2);
  assert.equal(checkEnglishRound(exit, answer(thread, { ...full, round: 3 })).correct, true);
});

test('incomplete exploration is not graded; retries and worked examples never inflate independent accuracy', () => {
  const game = englishWeekOneGames[0];
  let state = act(game, initialEnglishState(game), 'start');
  state = act(game, state, 'check'); assert.equal(englishAccuracy(state).total, 0);
  state = { ...answer(game, state), reason: 'letters' };
  state = act(game, state, 'check'); assert.equal(englishAccuracy(state).correct, 2);
  state = act(game, state, 'solution'); state = act(game, state, 'check');
  assert.equal(state.phase, 'round-complete'); assert.deepEqual(englishAccuracy(state), { correct: 2, total: 3, percent: 67 });
  state = act(game, state, 'continue'); state = act(game, state, 'solution'); state = act(game, state, 'check');
  assert.equal(englishAccuracy(state).correct, 2); assert.equal(englishAccuracy(state).total, 6);
});

test('poem revisions detach changed evidence; annotation claims never establish literary correctness', () => {
  const game = englishWeekOneGames[4];
  let state = { ...initialEnglishState(game), phase: 'editor' };
  state = act(game, state, 'poem-line', { index: 0, text: 'Buzz! Bright bees bring books.' });
  state = act(game, state, 'annotate', { device: 'Onomatopoeia', line: 0, start: 0, end: 4 });
  assert.equal(annotationIsPlaced(state.draft, state.draft.annotations[0]), true);
  const snapshot = structuredClone(state);
  state = act(game, state, 'poem-line', { index: 0, text: 'Quiet bees rest.' });
  assert.equal(annotationIsPlaced(state.draft, state.draft.annotations[0]), false);
  assert.equal(snapshot.draft.lines[0], 'Buzz! Bright bees bring books.');
  assert.ok(poemSubmissionIssues(state.draft).some(issue => issue.includes('unplaced')));
});

test('submission requires twelve lines, four placed intentions and a note; exported text stays literal', () => {
  const game = englishWeekOneGames[4];
  let state = { ...initialEnglishState(game), phase: 'editor' };
  assert.equal(act(game, state, 'review-poem').phase, 'editor');
  const lines = ['Buzz! Bees circle the bloom.', 'Bright birds bring berries.', 'A blue moon lights the room.', 'The boat hit the net.', '<script> is only written text.', 'Books wait beneath the tree.', 'We read beside the garden.', 'A silver path leads home.', 'The flowers greet the rain.', 'Our lanterns warm the night.', 'We share a page together.', 'The island sleeps in peace.'];
  for (const [index, text] of lines.entries()) state = act(game, state, 'poem-line', { index, text });
  for (const [line, device] of ['Onomatopoeia', 'Alliteration', 'Assonance', 'Consonance'].entries()) state = act(game, state, 'annotate', { line, device, start: 0, end: lines[line].length });
  state = act(game, state, 'poem-note', 'I used sound words to help the reader hear the garden.');
  assert.equal(poemSubmissionIssues(state.draft).length, 0);
  state = act(game, state, 'review-poem'); assert.equal(state.phase, 'review');
  state = act(game, state, 'submit-poem'); assert.equal(state.phase, 'result'); assert.equal(state.draft.status, 'submitted');
  assert.ok(buildPoemReport(state).includes('teacher review pending'));
  assert.ok(buildPoemReport(state).includes('<script> is only written text.'));
  const restored = normalizeEnglishDraft(JSON.parse(JSON.stringify(state.draft)));
  assert.equal(poemSubmissionIssues(restored).length, 0);
});

test('all referenced art and 106 narration clips exist with valid WAV headers', () => {
  const names = [...englishWeekOneGames.map(game => game.backdrop), 'word-lantern'];
  for (const name of names) assert.ok(fs.statSync(`public/assets/english-week1/${name}.png`).size > 1000);
  assert.equal(ENGLISH_AUDIO_CLIPS.length, 106);
  for (const clip of ENGLISH_AUDIO_CLIPS) {
    const bytes = fs.readFileSync(`public/assets/english-week1/audio/${clip.key}.wav`);
    assert.equal(bytes.toString('ascii', 0, 4), 'RIFF'); assert.equal(bytes.toString('ascii', 8, 12), 'WAVE');
    assert.ok(bytes.length > 1000, clip.key);
  }
});

test('a saved poem resumes its completed model work; a malformed analysis record cannot skip it', () => {
  const game = englishWeekOneGames[4];
  let state = act(game, initialEnglishState(game), 'start');
  for (const _ of game.rounds) {
    state = answer(game, state); state = act(game, state, 'check'); state = act(game, state, 'continue');
  }
  assert.equal(state.phase, 'editor');
  state = act(game, state, 'poem-line', { index: 0, text: 'Buzz! A bee wakes up.' });
  const saved = { ...state.draft, analysisRecords: state.records, analysisSupport: { assistance: ['hint'], hintCount: 1, solutionCount: 0 } };
  const restored = act(game, initialEnglishState(game, saved), 'resume-poem');
  assert.equal(restored.phase, 'editor'); assert.equal(englishAccuracy(restored).total, 9); assert.equal(restored.hintCount, 1);
  const broken = { ...saved, analysisRecords: { 'e5-r1': { resolved: true } } };
  assert.equal(act(game, initialEnglishState(game, broken), 'resume-poem').phase, 'tutorial');
});
