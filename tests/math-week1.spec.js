import { test, expect } from '@playwright/test';
import { mathWeekOneGames } from '../src/config/mathWeekOne.js';
import { parseFraction, mixedLabel, split, partCount } from '../src/games/math/fractions.js';
import { roundValue } from '../src/games/math/mathLogic.js';
import { ready, clickGame, selectIsland, startFromMenu } from './helpers/intro.js';

const state = page => page.evaluate(() => window.__TEST__.math);
const action = (page, key) => page.locator(`[data-focus-key="${key}"]`);
async function openDirect(page, day) {
  await page.goto('/?test=1'); await ready(page, 'MenuScene');
  await page.evaluate(day => window.__TEST__.commands.startMathGame(day), day);
  await ready(page, 'MathAdventureScene', 60000); await action(page, 'start').click();
}
const input = (page, field, value) => action(page, `input-${field}`).fill(String(value));
async function fillRound(page, round, index) {
  if (round.kind === 'bridge') {
    for (const source of [0, 1]) for (let i = 0; i < round.counts[source]; i++) await action(page, `piece-${source}`).click();
    await action(page, 'unchanged').selectOption(String(round.d));
  } else if (round.kind === 'mosaic') {
    const d = [24, 12, 24, 12][index]; await action(page, 'denominator').selectOption(String(d));
    for (const [i, amount] of [round.a, round.b].entries()) {
      const count = partCount(parseFraction(amount), d);
      if (index === 0 && i === 0) {
        const picker = page.getByRole('slider', { name: 'Select tiles on panel 1' });
        const { width, height } = await picker.boundingBox();
        await picker.click({ position: { x: 13 + (width - 26) * (count - 1) / d, y: height / 2 } });
        await picker.press('ArrowRight');
        await expect(picker).toHaveAttribute('aria-valuetext', `${count} of ${d} tiles`);
        await expect(action(page, 'input-equivalent0')).toHaveValue(String(count));
      } else await input(page, `equivalent${i}`, count);
      await action(page, `transfer-${i}`).click();
    }
    if (index === 0) await expect(page.getByText('Work mosaic · 8 + 6 tiles', { exact: true })).toBeVisible();
  } else if (round.kind === 'depot') {
    const d = [5, 4, 6, 6][index]; await action(page, 'denominator').selectOption(String(d));
    await action(page, 'load-0').click(); await action(page, 'load-1').click();
    if ((await state(page)).board.parts < d) await action(page, 'no-trade').click();
    else {
      if (index === 1) for (let i = 0; i < d; i++) await action(page, `parcel-${i}`).click();
      else { await input(page, 'group', d); await action(page, 'select-group').click(); }
      await action(page, 'trade').click();
    }
  } else if (round.kind === 'reservoir') {
    const d = [8, 4, 12, 6][index]; await action(page, 'denominator').selectOption(String(d)); await action(page, 'prepare').click();
    const delivery = split(parseFraction(round.b), d);
    if ((await state(page)).board.parts < delivery.parts) await action(page, 'water-trade').click();
    for (let i = 0; i < delivery.whole; i++) await action(page, 'water-tank-0').click();
    if (delivery.parts) { await input(page, 'drawCount', delivery.parts); await action(page, 'draw-group').click(); }
    await expect(page.locator('.math-delivery-jug')).toContainText(`${round.b} L / ${round.b} L`);
    await action(page, 'unit').selectOption('L');
  } else if (round.kind === 'route') {
    const map = page.locator('.math-route-map');
    for (const [index, id] of ['D', 'C', 'A'].entries()) {
      const stop = map.getByRole('button', { name: new RegExp(`^Station ${id},`) });
      await stop.click();
      await expect(stop).toHaveAccessibleName(new RegExp(`stop ${index + 1}$`));
    }
    await action(page, 'trial').click();
    const stops = await map.locator('.math-route-trial.valid line').evaluateAll(legs => legs.map(leg => [leg.getAttribute('x2'), leg.getAttribute('y2')].join(',')));
    expect(stops).toEqual(['73,76', '83,38', '17,38']);
    expect((await state(page)).records[round.id]).toBeUndefined();
    await action(page, 'delivery-op-+').click(); await action(page, 'balance-op--').click();
    await input(page, 'totalAnswer', '3 1/2'); await input(page, 'answer', '1 1/2'); await action(page, 'unit').selectOption('L'); return;
  } else {
    await action(page, 'operand-0').selectOption(round.a); await action(page, 'operand-1').selectOption(round.b);
    await action(page, `operator-${round.op}`).click(); await action(page, 'unit').selectOption(round.unit);
    if (round.regroup) {
      await action(page, 'denominator').selectOption('12');
      expect((await state(page)).board.op).toBe('-');
      await input(page, 'ledgerWhole', '2'); await input(page, 'ledgerParts', '15');
    }
  }
  if (round.explanation) await action(page, `explanation-${round.explanation}`).click();
  await input(page, 'answer', mixedLabel(roundValue(round)));
}

test('Numeric Ruins routes Week 1 and keeps the model through Help, Settings and Pause', async ({ page }, info) => {
  test.setTimeout(120000); const errors = []; page.on('pageerror', error => errors.push(error.message));
  await page.goto('/?test=1'); await ready(page, 'MenuScene'); await startFromMenu(page);
  await selectIsland(page, 'numeric-ruins'); await clickGame(page, 640, 578); await ready(page, 'IslandMapScene');
  await clickGame(page, 88, 640); await ready(page, 'QuarterDetailScene');
  expect(await page.evaluate(() => window.__TEST__.quarterMajorCount)).toBe(5);
  await clickGame(page, 430, 450); await expect.poll(() => page.evaluate(() => window.__TEST__.openModal)).toBe('major');
  await clickGame(page, 640, 435); // Close the week information panel.
  await expect.poll(() => page.evaluate(() => window.__TEST__.openModal)).toBeNull();
  await clickGame(page, 760, 500);
  await expect.poll(() => page.evaluate(() => window.__TEST__.openModal)).toBe('minigame-info-fraction-bridgeworks');
  await clickGame(page, 535, 527); await ready(page, 'MathAdventureScene', 60000); await action(page, 'start').click();
  await action(page, 'piece-0').click();
  for (const name of ['help', 'settings', 'pause']) {
    await action(page, name).click(); await expect(page.getByRole('dialog')).toBeVisible();
    expect((await state(page)).board.counts).toEqual([1, 0]);
    expect(await page.evaluate(() => window.__TEST__.paused)).toBe(true);
    if (name === 'settings') { await page.getByRole('checkbox', { name: 'Music', exact: true }).uncheck(); await page.getByRole('checkbox', { name: 'Music', exact: true }).check(); }
    await page.keyboard.press('Escape'); await expect(page.getByRole('dialog')).toHaveCount(0);
  }
  await action(page, 'undo').click(); expect((await state(page)).board.counts).toEqual([0, 0]);
  await page.screenshot({ path: info.outputPath('math-bridge-route.png') });
  await action(page, 'back').click(); await ready(page, 'QuarterDetailScene');
  await expect(page.locator('.english-overlay')).toHaveCount(0); expect(errors).toEqual([]);
});

for (const game of mathWeekOneGames) test(`${game.title} completes three challenges and the exit and saves its journal`, async ({ page }, info) => {
  test.setTimeout(120000); const errors = []; page.on('pageerror', error => errors.push(error.message));
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
  await openDirect(page, game.day);
  for (const [index, round] of game.rounds.entries()) {
    expect((await state(page)).roundId).toBe(round.id);
    expect(await page.locator('.english-workspace').evaluate(el => el.scrollTop)).toBe(0);
    await fillRound(page, round, index);
    if (game.kind === 'caravan' && round.kind === 'caravan') {
      await page.locator('.math-length-model').scrollIntoViewIfNeeded();
      await page.screenshot({ path: info.outputPath(`math-caravan-length-${index + 1}.png`) });
      if (round.exit) { await action(page, 'explanation-balance').scrollIntoViewIfNeeded(); await page.screenshot({ path: info.outputPath('math-caravan-exit-proof.png') }); }
    }
    if (index === 0 || round.kind === 'route') {
      await page.locator('.english-workspace').evaluate(el => { el.scrollTop = 0; });
      await page.screenshot({ path: info.outputPath(`math-${game.kind}${round.kind === 'route' ? '-route' : ''}.png`) });
      await page.locator('.english-workspace').evaluate(el => { el.scrollTop = el.scrollHeight; });
      await page.screenshot({ path: info.outputPath(`math-${game.kind}${round.kind === 'route' ? '-route' : ''}-bottom.png`) });
    }
    await action(page, 'check').click(); await expect.poll(async () => (await state(page)).phase).toBe('round-complete');
    if (game.kind === 'bridge' && index === 0) {
      await page.locator('.math-bridge-drop').scrollIntoViewIfNeeded();
      await page.screenshot({ path: info.outputPath('math-bridge-secured.png'), animations: 'disabled' });
    }
    await action(page, 'continue').click();
  }
  expect((await state(page)).phase).toBe('result'); expect((await state(page)).accuracy.percent).toBe(100);
  const saved = await page.evaluate(id => JSON.parse(localStorage.getItem('lumora-math-week1-v1'))[id], game.lessonId);
  expect(saved.completed).toBe(true); expect(Object.keys(saved.records)).toHaveLength(4);
  if (game.kind === 'caravan') { expect(saved.records['caravan-4'].first.explanation).toBe(true); expect(saved.records['caravan-4'].solution.explanation).toBe('balance'); }
  const download = page.waitForEvent('download'); await action(page, 'download').click(); expect((await download).suggestedFilename()).toContain(game.id);
  await page.screenshot({ path: info.outputPath(`math-${game.kind}-result.png`) });
  await action(page, 'back').click(); await ready(page, 'QuarterDetailScene');
  // All five lessons are reachable through their real quarter map nodes.
  const [x, y, scroll] = { 1: [760, 500, 0], 2: [640, 580, 0], 3: [790, 660, 0], 4: [670, 570, 170], 5: [820, 650, 170] }[game.day];
  await page.evaluate(scroll => window.__TEST__.commands.setQuarterScrollY(scroll), scroll);
  await clickGame(page, x, y); await expect.poll(() => page.evaluate(() => window.__TEST__.openModal)).toBe(`minigame-info-${game.id}`);
  await clickGame(page, 535, 527); await ready(page, 'MathAdventureScene', 60000);
  expect((await state(page)).day).toBe(game.day); expect(errors).toEqual([]);
});

test('each Math tutorial models its own worked quantities and operation', async ({ page }, info) => {
  test.setTimeout(120000);
  const expected = { bridge: ['1/6 + 2/6'], mosaic: ['1/2 = 3/6', '1/3 = 2/6', '3/6 + 2/6 = 5/6'], depot: ['3 whole crates + 5/4', '4 whole crates + 1/4'], reservoir: ['2 whole L + 1/4 L', '1 whole L + 5/4 L', '1 whole L + 2/4 L'], caravan: ['1/2 m + 1/4 m = 3/4 m'] };
  for (const game of mathWeekOneGames) {
    await page.goto('/?test=1'); await ready(page, 'MenuScene');
    await page.evaluate(day => window.__TEST__.commands.startMathGame(day), game.day); await ready(page, 'MathAdventureScene', 60000);
    const captions = await page.locator('.math-worked-model figcaption').allTextContents();
    for (const [i, text] of expected[game.kind].entries()) expect(captions[i]).toContain(text);
    await page.locator('.english-workspace').evaluate(el => { el.scrollTop = 0; });
    await page.screenshot({ path: info.outputPath(`math-tutorial-${game.kind}.png`) });
    await page.locator('.english-workspace').evaluate(el => { el.scrollTop = el.scrollHeight; });
    await page.screenshot({ path: info.outputPath(`math-tutorial-${game.kind}-bottom.png`) });
    expect((await state(page)).accuracy.total).toBe(0);
  }
});

test('a correct typed fraction cannot skip the model; worked examples mark support and Reset keeps first checks', async ({ page }) => {
  await openDirect(page, 1); await input(page, 'answer', '10/16'); await action(page, 'check').click();
  expect((await state(page)).phase).toBe('playing'); expect((await state(page)).records['bridge-1'].last.answer).toBe(true);
  const first = (await state(page)).accuracy;
  await action(page, 'reset').click(); await action(page, 'help').click(); await action(page, 'worked-example').click();
  expect((await state(page)).solutionCount).toBe(1);
  await fillRound(page, mathWeekOneGames[0].rounds[0], 0); await action(page, 'check').click();
  expect((await state(page)).phase).toBe('round-complete'); expect((await state(page)).accuracy).toEqual(first);
});

test('tablet workbench stays readable and touch drag has an equivalent tap action', async ({ browser }, info) => {
  test.setTimeout(60_000);
  const context = await browser.newContext({ viewport: { width: 768, height: 1024 }, hasTouch: true, deviceScaleFactor: 1 }); const page = await context.newPage();
  await openDirect(page, 1); await expect(page.locator('.math-root')).toHaveClass(/compact/);
  const checks = await page.locator('.math-root').evaluate(root => ({ width: root.getBoundingClientRect().width, overflow: root.scrollWidth > root.clientWidth, inputFont: getComputedStyle(root.querySelector('input')).fontSize }));
  expect(checks.width).toBe(768); expect(checks.overflow).toBe(false); expect(parseFloat(checks.inputFont)).toBeGreaterThanOrEqual(18);
  const piece = await action(page, 'piece-0').boundingBox(), rail = await page.locator('[data-math-drop="bridge"]').boundingBox();
  const session = await context.newCDPSession(page);
  const start = { x: piece.x + piece.width / 2, y: piece.y + piece.height / 2 }, end = { x: rail.x + rail.width / 2, y: rail.y + rail.height / 2 };
  await session.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ ...start, id: 1 }] });
  await session.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ ...end, id: 1 }] });
  await session.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
  expect((await state(page)).board.counts).toEqual([1, 0]);
  await page.waitForTimeout(310); await action(page, 'piece-0').tap(); expect((await state(page)).board.counts).toEqual([2, 0]);
  await page.screenshot({ path: info.outputPath('math-tablet.png') }); await context.close();
});
