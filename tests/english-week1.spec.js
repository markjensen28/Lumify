import { test, expect } from '@playwright/test';
import fs from 'node:fs/promises';
import { englishWeekOneGames } from '../src/config/englishWeekOne.js';
import { ready, clickGame, selectIsland, startFromMenu } from './helpers/intro.js';

const state = page => page.evaluate(() => window.__TEST__.english);
const action = (page, key) => page.locator(`[data-focus-key="${key}"]`);

async function openDirect(page, day) {
  await page.goto('/?test=1'); await ready(page, 'MenuScene');
  await page.evaluate(day => window.__TEST__.commands.startEnglishGame(day), day);
  await ready(page, 'EnglishAdventureScene', 60000);
  await action(page, 'start').click();
}

async function fillRound(page, round, { alternate = false } = {}) {
  if (round.repair) await action(page, `repair-${round.repair.answer}`).click();
  if (round.kind === 'phrase') {
    const phrase = alternate && round.acceptedPhrases[1] ? round.acceptedPhrases[1] : round.acceptedPhrases[0];
    for (const [index, word] of phrase.entries()) if (round.fixed?.[index] === undefined) await page.locator(`[data-pool-word="${word}"]`).click();
  } else {
    for (const id of round.targets) {
      if (round.position) await page.locator(`[data-word-id="${id}"][data-position="${round.position}"]`).click();
      else await page.locator(`.english-word-token[data-word-id="${id}"]`).click();
    }
    for (const event of round.events ?? []) {
      const word = round.words.find(word => word.word === event.word);
      await page.locator(`.english-word-token[data-word-id="${word.id}"]`).click();
      await page.locator(`[data-event-id="${event.id}"]`).click();
    }
  }
  if (round.sound) await action(page, `sound-${round.sound}`).click();
  await action(page, `reason-${round.reasonId}`).click();
}

test('Reading Island routes its first English day and preserves work through help, settings and pause', async ({ page }, info) => {
  test.setTimeout(120000);
  const errors = []; page.on('pageerror', error => errors.push(error.message));
  await page.goto('/?test=1'); await ready(page, 'MenuScene'); await startFromMenu(page);
  await selectIsland(page, 'reading-island'); await clickGame(page, 640, 578); await ready(page, 'IslandMapScene');
  await clickGame(page, 180, 595); await ready(page, 'QuarterDetailScene');
  expect(await page.evaluate(() => window.__TEST__.quarterMajorCount)).toBe(5);
  await clickGame(page, 760, 500);
  await expect.poll(() => page.evaluate(() => window.__TEST__.openModal)).toBe('minigame-info-english-soundscape');
  await clickGame(page, 535, 527); await ready(page, 'EnglishAdventureScene', 60000);
  await action(page, 'start').click();
  await page.locator('.english-word-token[data-word-id="w0"]').click();
  await action(page, 'help').click(); await expect(page.getByRole('dialog')).toBeVisible();
  expect((await state(page)).selected).toEqual(['w0']);
  await page.getByRole('button', { name: 'Resume game', exact: true }).click();
  await action(page, 'listen').click();
  await expect.poll(async () => (await state(page)).audioStatus).toBe('playing');
  await action(page, 'pause').click();
  await expect.poll(async () => (await state(page)).audioStatus).toBe('paused');
  const frozen = (await state(page)).audioTime;
  await page.waitForTimeout(250);
  expect((await state(page)).audioTime).toBeCloseTo(frozen, 1);
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).toHaveCount(0);
  await action(page, 'settings').click(); await page.getByRole('checkbox', { name: 'Narration', exact: true }).uncheck();
  await page.getByRole('button', { name: 'Resume game', exact: true }).click();
  await action(page, 'listen').click();
  expect((await state(page)).audioStatus).toContain('off');
  await action(page, 'settings').click(); await page.getByRole('checkbox', { name: 'Narration', exact: true }).check();
  await page.getByRole('button', { name: 'Resume game', exact: true }).click();
  expect((await state(page)).audioStatus).toBe('ready');
  expect((await state(page)).selected).toEqual(['w0']);
  await page.screenshot({ path: info.outputPath('english-studio.png') });
  await action(page, 'back').click(); await ready(page, 'QuarterDetailScene');
  await expect(page.locator('.english-overlay')).toHaveCount(0);
  expect(await page.evaluate(() => window.__TEST__.selectedIsland)).toBe('reading-island');
  expect(errors).toEqual([]);
});

test('four sound games validate every round and exit, including a valid alternate phrase', async ({ page }, info) => {
  test.setTimeout(180000);
  const errors = []; page.on('pageerror', error => errors.push(error.message));
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
  await openDirect(page, 1);
  for (const game of englishWeekOneGames.slice(0, 4)) {
    if (game.day > 1) {
      await action(page, 'back').click(); await ready(page, 'QuarterDetailScene');
      const position = { 2: [640, 580, 0], 3: [790, 660, 0], 4: [670, 570, 170] }[game.day];
      await page.evaluate(scroll => window.__TEST__.commands.setQuarterScrollY(scroll), position[2]);
      await clickGame(page, position[0], position[1]);
      await expect.poll(() => page.evaluate(() => window.__TEST__.openModal)).toBe(`minigame-info-${game.id}`);
      await clickGame(page, 535, 527); await ready(page, 'EnglishAdventureScene', 60000); await action(page, 'start').click();
    }
    for (const [index, round] of game.rounds.entries()) {
      expect((await state(page)).roundId).toBe(round.id);
      expect(await page.locator('.english-workspace').evaluate(area => area.scrollTop)).toBe(0);
      await fillRound(page, round, { alternate: true });
      if (index === 0) await page.screenshot({ path: info.outputPath(`english-${game.kind}.png`) });
      await action(page, 'check').click();
      await expect.poll(async () => (await state(page)).phase).toBe('round-complete');
      await action(page, 'continue').click();
    }
    expect((await state(page)).phase).toBe('result');
    expect((await state(page)).accuracy.percent).toBe(100);
    const saved = await page.evaluate(id => JSON.parse(localStorage.getItem('lumora-english-week1-v1'))[id], game.lessonId);
    expect(saved.completed).toBe(true);
  }
  expect(errors).toEqual([]);
});

test('wrong timeline evidence is revisable; a worked example resolves it without independent credit', async ({ page }) => {
  test.setTimeout(90000); await openDirect(page, 1);
  await page.locator('.english-word-token[data-word-id="w2"]').click();
  await page.locator('[data-event-id="bee"]').click(); await action(page, 'reason-sound').click();
  await action(page, 'check').click();
  expect((await state(page)).phase).toBe('playing');
  expect((await state(page)).feedback).toContain('evidence');
  await action(page, 'help').click(); await page.getByRole('button', { name: 'Inspect a worked example', exact: true }).click();
  await expect.poll(async () => (await state(page)).selected).toEqual(['w0']);
  await action(page, 'check').click();
  expect((await state(page)).phase).toBe('round-complete');
  expect((await state(page)).accuracy.percent).toBeLessThan(100);
});

test('airship supports dragging a word into a specific sail socket', async ({ page }) => {
  test.setTimeout(90000); await openDirect(page, 2);
  const source = await page.locator('[data-pool-word="silver"]').boundingBox();
  const target = await page.locator('[data-drop-slot="1"]').boundingBox();
  await page.mouse.move(source.x + source.width / 2, source.y + source.height / 2);
  await page.mouse.down(); await page.mouse.move(target.x + target.width / 2, target.y + target.height / 2, { steps: 8 }); await page.mouse.up();
  await expect.poll(async () => (await state(page)).slots[1]).toBe('silver');
  expect((await state(page)).phase).toBe('playing');
});

test('poetry draft saves all stanzas, invalidates edited annotations and exports pending-review work', async ({ page }, info) => {
  test.setTimeout(150000); await openDirect(page, 5);
  for (const round of englishWeekOneGames[4].rounds) {
    await fillRound(page, round); await action(page, 'check').click();
    expect((await state(page)).phase).toBe('round-complete'); await action(page, 'continue').click();
  }
  expect((await state(page)).phase).toBe('editor');
  const lines = ['Buzz! Bees wake beside the tree.', 'Bright birds bring berries.', 'A blue moon lights the room.', 'The boat hit the net.', 'Pages wait inside the tree.', 'We read beneath a silver sky.', 'Rain trails across the pale lake.', 'The branches frame our path.', 'A little bell welcomes us.', 'Our lanterns warm the night.', 'We share a page together.', 'The island sleeps in peace.'];
  for (let stanza = 0; stanza < 4; stanza++) {
    await action(page, `stanza-${stanza}`).click();
    for (let offset = 0; offset < 3; offset++) await page.getByRole('textbox', { name: `Poem line ${stanza * 3 + offset + 1}`, exact: true }).fill(lines[stanza * 3 + offset]);
  }
  const mark = async (line, device) => {
    await action(page, `stanza-${Math.floor(line / 3)}`).click();
    const input = page.getByRole('textbox', { name: `Poem line ${line + 1}`, exact: true });
    await input.evaluate(input => { input.focus(); input.setSelectionRange(0, input.value.length); input.dispatchEvent(new Event('select', { bubbles: true })); });
    await action(page, `mark-${device}`).click();
  };
  for (const [line, device] of ['Onomatopoeia', 'Alliteration', 'Assonance', 'Consonance'].entries()) await mark(line, device);
  await action(page, 'stanza-0').click(); await page.getByRole('textbox', { name: 'Poem line 1', exact: true }).fill('A quiet morning begins.');
  await expect(page.getByText(/UNPLACED after edit/)).toBeVisible();
  await page.getByRole('textbox', { name: 'Poem line 1', exact: true }).fill(lines[0]); await mark(0, 'Onomatopoeia');
  await page.getByRole('textbox', { name: 'Writer note', exact: true }).fill('I used Buzz to help the reader hear the bees around the library garden.');
  await expect.poll(async () => (await state(page)).draft.lines.filter(Boolean).length).toBe(12);
  const stored = await page.evaluate(() => JSON.parse(localStorage.getItem('lumora-poetry-draft-v1')));
  expect(stored.lines).toEqual(lines); expect(stored.annotations).toHaveLength(4);
  await page.locator('.english-workspace').evaluate(area => { area.scrollTop = 0; });
  await page.screenshot({ path: info.outputPath('english-poetry-editor.png') });
  await action(page, 'review').click(); await expect.poll(async () => (await state(page)).phase).toBe('review');
  await action(page, 'submit-poem').click(); await expect.poll(async () => (await state(page)).phase).toBe('result');
  await expect(page.getByText('Teacher review pending', { exact: true })).toBeVisible();
  const downloadEvent = page.waitForEvent('download'); await action(page, 'download').click(); const download = await downloadEvent;
  const report = await fs.readFile(await download.path(), 'utf8');
  expect(report).toContain(lines[11]); expect(report).toContain('teacher review pending');
  await page.locator('.english-workspace').evaluate(area => { area.scrollTop = 0; });
  await page.screenshot({ path: info.outputPath('english-poetry-submitted.png') });
  await page.reload(); await ready(page, 'MenuScene'); await page.evaluate(() => window.__TEST__.commands.startEnglishGame(5)); await ready(page, 'EnglishAdventureScene', 60000);
  expect((await state(page)).draft.lines).toEqual(lines); expect((await state(page)).draft.annotations).toHaveLength(4);
  await action(page, 'resume-poem').click();
  expect((await state(page)).phase).toBe('editor'); expect((await state(page)).accuracy.total).toBe(9);
});

test('touch selection fills a sail socket and keyboard activation chooses its sound', async ({ browser }, info) => {
  test.setTimeout(90000);
  const context = await browser.newContext({ viewport: info.project.use.viewport, hasTouch: true, baseURL: 'http://127.0.0.1:5173' });
  const page = await context.newPage();
  try {
    await openDirect(page, 2);
    await page.locator('[data-pool-word="silver"]').tap();
    expect((await state(page)).slots[1]).toBe('silver');
    await action(page, 'sound-s').focus(); await page.keyboard.press('Enter');
    expect((await state(page)).sound).toBe('s');
  } finally { await context.close(); }
});

test('tablet controls stay readable and phone captures show each primary mechanic', async ({ page }, info) => {
  test.skip(info.project.name !== 'desktop', 'One dedicated responsive evidence pass.');
  test.setTimeout(150000);
  await page.setViewportSize({ width: 768, height: 1024 });
  await openDirect(page, 4); await fillRound(page, englishWeekOneGames[3].rounds[0]);
  await expect(page.locator('.english-root')).toHaveClass(/compact/);
  const size = await page.locator('[data-word-id="w1"][data-position="end"]').boundingBox();
  expect(size.height).toBeGreaterThanOrEqual(36);
  expect(await page.locator('.english-reason').first().evaluate(node => parseFloat(getComputedStyle(node).fontSize))).toBeGreaterThanOrEqual(17);
  expect(await page.locator('.english-root').evaluate(node => Math.round(node.getBoundingClientRect().height))).toBe(1024);
  await page.locator('.english-workspace').evaluate(area => { area.scrollTop = 0; });
  await page.screenshot({ path: info.outputPath('english-tablet-after.png') });
  await page.setViewportSize({ width: 390, height: 844 });
  for (const game of englishWeekOneGames.slice(1, 4)) {
    await openDirect(page, game.day); await fillRound(page, game.rounds[0]);
    await page.locator('.english-workspace').evaluate(area => { area.scrollTop = 0; });
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    await page.screenshot({ path: info.outputPath(`english-${game.kind}-top.png`) });
  }
});
