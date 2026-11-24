import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { mathWeekOneGames } from '../../src/config/mathWeekOne.js';
import { fraction, parseFraction, add, subtract, equal, mixedLabel, split, partCount } from '../../src/games/math/fractions.js';
import { initialMathState, mathAction, mathChecks, mathAccuracy, routeValues, roundValue } from '../../src/games/math/mathLogic.js';
import { islandCurricula, vulcanQuarterDetails } from '../../src/config/content.js';
import { englishWeekOneGames } from '../../src/config/englishWeekOne.js';
import { persistMathResult, readMathProgress } from '../../src/systems/mathProgress.js';

const act = (g, s, type, value) => mathAction(g, s, { type, value });
function solve(game, previous, { d, route = ['A', 'C', 'D'], allWholes = false } = {}) {
  let s = previous;
  const r = game.rounds[s.round], a = parseFraction(r.a), b = r.b ? parseFraction(r.b) : null;
  const action = (type, value) => { s = act(game, s, type, value); };
  const input = (field, text, index) => action('input', { field, text: String(text), index });
  if (r.kind === 'bridge') {
    for (const source of [0, 1]) for (let i = 0; i < r.counts[source]; i++) action('bridge-piece', { source });
    action('unchanged', String(r.d));
  } else if (r.kind === 'mosaic') {
    d ??= [12, 12, 24, 12][s.round]; action('denominator', d);
    [a, b].forEach((v, i) => { input('equivalent', partCount(v, d), i); action('transfer', i); });
  } else if (r.kind === 'depot') {
    d ??= [5, 4, 6, 6][s.round]; action('denominator', d); action('load', 0); action('load', 1);
    if (s.board.parts < d) action('no-trade');
    while (s.board.parts >= d) { input('group', d); action('select-group'); action('trade'); }
  } else if (r.kind === 'reservoir') {
    d ??= [8, 4, 12, 6][s.round]; action('denominator', d); action('prepare');
    const deliver = split(b, d);
    if (allWholes) { action('water-trade', 'all'); input('drawCount', partCount(b, d)); action('draw', 'group'); }
    else {
      while (s.board.parts < deliver.parts) action('water-trade', 'one');
      for (let i = 0; i < deliver.whole; i++) action('draw', 'whole');
      if (deliver.parts) { input('drawCount', deliver.parts); action('draw', 'group'); }
    }
    action('unit', 'L');
  } else if (r.kind === 'route') {
    route.forEach(id => action('station', id)); action('delivery-op', '+'); action('balance-op', '-'); action('unit', 'L');
    const values = routeValues(r, s.board); input('totalAnswer', mixedLabel(values.total)); input('answer', mixedLabel(values.remaining));
    return s;
  } else {
    action('operand', { index: 0, amount: r.a }); action('operand', { index: 1, amount: r.b }); action('operator', r.op); action('unit', r.unit);
    if (r.regroup) { d ??= 12; action('denominator', d); const whole = Math.floor(a.n / a.d) - 1; input('ledgerWhole', whole); input('ledgerParts', partCount(subtract(a, fraction(whole)), d)); }
    // A shared-unit change clears the operand model; put it back explicitly.
    action('operand', { index: 0, amount: r.a }); action('operand', { index: 1, amount: r.b }); action('operator', r.op); action('unit', r.unit);
  }
  if (r.explanation) action('explanation', r.explanation);
  input('answer', mixedLabel(roundValue(r))); return s;
}

test('fraction parser accepts exact equivalents and rejects malformed or unsafe input', () => {
  for (const value of ['1 1/2', '3/2', '1500000/1000000']) assert.ok(equal(parseFraction(value), fraction(3, 2)));
  for (const value of ['', '1/0', '1 1/0', '2/3/4', 'Infinity', '1e9', '9999999999', '2+3', '1.5', '-1 1/2']) assert.equal(parseFraction(value), null, value);
  assert.deepEqual(add(fraction(1, 3), fraction(1, 4)), fraction(7, 12));
  assert.deepEqual(subtract(parseFraction('4 1/6'), parseFraction('2 3/4')), fraction(17, 12));
  assert.ok(equal(parseFraction('9999999/9999998'), parseFraction('9999999/9999998')));
});

test('five Math activities complete the intended thirty-game scope, with bundled artwork', () => {
  const math = islandCurricula['numeric-ruins'].quarters.q1.majors[0];
  assert.equal(math.placeholder, false); assert.equal(mathWeekOneGames.length, 5);
  assert.equal(vulcanQuarterDetails.q1.majors.flatMap(m => m.lessons).length + englishWeekOneGames.length + mathWeekOneGames.length, 30);
  for (const game of mathWeekOneGames) {
    assert.equal(math.lessons.find(l => l.id === game.lessonId).placeholder, false);
    assert.equal(game.rounds.length, 4); assert.equal(game.rounds[3].exit, true);
    assert.ok(fs.existsSync(`public/assets/math-week1/${game.backdrop}.png`));
  }
});

for (const game of mathWeekOneGames) test(`${game.title}: all three authored challenges and exit check are solvable`, () => {
  let state = act(game, initialMathState(game), 'start');
  for (const round of game.rounds) {
    state = solve(game, state); const checks = mathChecks(round, state.board);
    assert.deepEqual(Object.keys(checks), round.checkpoints);
    assert.ok(Object.values(checks).every(check => check.ok), JSON.stringify(checks));
    state = act(game, state, 'check'); assert.equal(state.phase, 'round-complete'); state = act(game, state, 'continue');
  }
  assert.equal(state.phase, 'result'); assert.equal(mathAccuracy(state).percent, 100);
});

test('correct bridge answer cannot bypass a wrong model or a changed piece size', () => {
  const game = mathWeekOneGames[0]; let s = act(game, initialMathState(game), 'start');
  s = act(game, s, 'input', { field: 'answer', text: '5/8' }); s = act(game, s, 'check'); assert.equal(s.phase, 'playing');
  s = solve(game, s); s = act(game, s, 'denominator', 16);
  for (const source of [0, 1]) for (let i = 0; i < [2, 3][source]; i++) s = act(game, s, 'bridge-piece', { source });
  s = act(game, s, 'check'); assert.equal(s.records['bridge-1'].last.pieces, false);
});

test('mosaic validates both individual conversions, and accepts non-minimal shared units', () => {
  const game = mathWeekOneGames[1]; let s = act(game, initialMathState(game), 'start');
  s = solve(game, s, { d: 24 }); assert.ok(Object.values(mathChecks(game.rounds[0], s.board)).every(c => c.ok));
  s = act(game, s, 'select-tiles', { index: 0, count: 7 });
  assert.equal(s.board.equivalents[0], '7'); assert.equal(s.board.transferred[0], false);
  assert.equal(mathChecks(game.rounds[0], s.board).conversions.ok, false);
  s = act(game, s, 'undo'); assert.equal(s.board.equivalents[0], '8'); assert.equal(s.board.transferred[0], true);
  s = solve(game, act(game, initialMathState(game), 'start'));
  for (const [index, text] of ['3', '4'].entries()) { s = act(game, s, 'input', { field: 'equivalent', index, text }); s = act(game, s, 'transfer', index); }
  const checks = mathChecks(game.rounds[0], s.board); assert.equal(checks.answer.ok, true); assert.equal(checks.conversions.ok, false);
});

test('whole-crate trades are atomic and never double-count the selected parcels', () => {
  const game = mathWeekOneGames[2]; let s = { ...initialMathState(game), phase: 'playing', round: 1 };
  s = act(game, s, 'denominator', 4); s = act(game, s, 'load', 0); s = act(game, s, 'load', 1);
  assert.equal(s.board.whole, 3); assert.equal(s.board.parts, 5);
  s = act(game, s, 'input', { field: 'group', text: '3' }); s = act(game, s, 'select-group'); s = act(game, s, 'trade');
  assert.equal(s.board.whole, 3); assert.equal(s.board.parts, 5);
  s = act(game, s, 'input', { field: 'group', text: '4' }); s = act(game, s, 'select-group'); s = act(game, s, 'trade');
  assert.equal(s.board.whole, 4); assert.equal(s.board.parts, 1); assert.deepEqual(s.board.selected, []);
  const duplicate = act(game, s, 'trade'); assert.equal(duplicate.board.whole, 4); assert.equal(duplicate.board.parts, 1);
});

test('reservoir accepts conversion of every whole, preserves water, and prevents overdraw', () => {
  const game = mathWeekOneGames[3]; let s = { ...initialMathState(game), phase: 'playing', round: 2 };
  s = solve(game, s, { d: 24, allWholes: true });
  assert.ok(Object.values(mathChecks(game.rounds[2], s.board)).every(c => c.ok));
  assert.equal(s.board.whole, 0); assert.ok(s.board.parts > s.board.d);
  const before = structuredClone(s.board); s = act(game, s, 'draw', 'part'); assert.deepEqual(s.board, before);
  assert.ok(equal(add(fraction(s.board.parts, s.board.d), s.board.delivered), parseFraction('4 1/6')));
});

test('caravan accepts every feasible station set and visit order, rejects inadequate reserves', () => {
  const game = mathWeekOneGames[4], permutations = ids => ids.flatMap((a, i) => ids.filter((_, j) => j !== i).map(b => [a, b, ids.find(c => c !== a && c !== b)]));
  for (const ids of [['A', 'B', 'C'], ['A', 'C', 'D'], ['B', 'C', 'D']]) for (const route of permutations(ids)) {
    const s = solve(game, { ...initialMathState(game), phase: 'playing', round: 2 }, { route });
    assert.ok(Object.values(mathChecks(game.rounds[2], s.board)).every(c => c.ok), route.join(''));
  }
  let s = solve(game, { ...initialMathState(game), phase: 'playing', round: 2 }, { route: ['A', 'B', 'D'] });
  s = act(game, s, 'trial'); assert.equal(s.board.trial.valid, false); assert.deepEqual(s.records, {});
  assert.equal(mathChecks(game.rounds[2], s.board).route.ok, false);
  s = act(game, s, 'station', 'D'); assert.equal(s.board.trial, null);
});

test('caravan cut ledger accepts an all-parts equivalent and requires correct units', () => {
  const game = mathWeekOneGames[4]; let s = solve(game, { ...initialMathState(game), phase: 'playing', round: 1 });
  s = act(game, s, 'input', { field: 'ledgerWhole', text: '0' }); s = act(game, s, 'input', { field: 'ledgerParts', text: '39' });
  assert.ok(Object.values(mathChecks(game.rounds[1], s.board)).every(c => c.ok));
  s = act(game, s, 'unit', 'L'); assert.equal(mathChecks(game.rounds[1], s.board).unit.ok, false);
});

test('caravan exit requires the conservation explanation independently of correct arithmetic', () => {
  const game = mathWeekOneGames[4], round = game.rounds[3];
  let s = solve(game, { ...initialMathState(game), phase: 'playing', round: 3 });
  s = act(game, s, 'explanation', 'add-order');
  const checks = mathChecks(round, s.board); assert.equal(checks.answer.ok, true); assert.equal(checks.explanation.ok, false);
  s = act(game, s, 'check'); assert.equal(s.phase, 'playing');
  s = act(game, s, 'explanation', 'balance'); s = act(game, s, 'check'); assert.equal(s.phase, 'round-complete');
  assert.equal(s.records[round.id].first.explanation, false); assert.equal(s.records[round.id].solution.explanation, 'balance');
});

test('edits, undo, retries and support never inflate independent first-check accuracy', () => {
  const game = mathWeekOneGames[0]; let s = act(game, initialMathState(game), 'start');
  s = act(game, s, 'check'); const first = mathAccuracy(s);
  s = solve(game, s); s = act(game, s, 'undo'); s = act(game, s, 'reset'); s = solve(game, s); s = act(game, s, 'check');
  assert.equal(s.phase, 'round-complete'); assert.deepEqual(mathAccuracy(s), first);
  s = act(game, s, 'continue'); s = act(game, s, 'hint'); s = solve(game, s); s = act(game, s, 'check');
  assert.equal(s.records['bridge-2'].supported, true); assert.ok(Object.values(s.records['bridge-2'].first).every(v => v === false));
});

test('completion persists and corrupt or unavailable storage fails gracefully', () => {
  const store = new Map(); globalThis.localStorage = { getItem: key => store.get(key), setItem: (key, value) => store.set(key, value) };
  const game = mathWeekOneGames[0]; let s = act(game, initialMathState(game), 'start');
  for (let i = 0; i < 4; i++) { s = solve(game, s); s = act(game, s, 'check'); s = act(game, s, 'continue'); }
  assert.equal(persistMathResult(game, s), true); assert.equal(readMathProgress()[game.lessonId].completed, true);
  localStorage.getItem = () => '{broken'; assert.deepEqual(readMathProgress(), {});
  localStorage.setItem = () => { throw new Error('blocked'); }; assert.equal(persistMathResult(game, s), false);
  delete globalThis.localStorage;
});
