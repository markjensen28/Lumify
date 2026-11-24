import { expect, test } from '@playwright/test';
import { clickGame, ready, selectIsland, startFromMenu } from './helpers/intro.js';
import { islandCurricula } from '../src/config/content.js';

test('eight floating islands browse, wrap, and keep locked destinations inaccessible', async ({ page }, testInfo) => {
  test.setTimeout(90000);
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
  await page.goto('/?test=1');
  await ready(page, 'MenuScene');
  await startFromMenu(page);
  const initial = await page.evaluate(() => window.__TEST__.state());
  expect(initial.worldBackground).toBe('floating-sky');
  expect(initial.islandPositions).toHaveLength(8);
  expect(initial.islandPositions.map(island => island.id)).not.toContain('unknown');
  expect(initial.islandPositions.map(island => island.id)).not.toContain('akashic-archives');
  expect(initial.islandPositions.filter(island => island.unlocked).map(island => island.id))
    .toEqual(['numeric-ruins', 'vulcan-caverns', 'reading-island', 'grand-library']);
  expect(initial.selectedIsland).toBe('grand-library');
  const center = initial.islandPositions.find(island => island.id === initial.selectedIsland);
  expect(center.scale).toBe(1);
  expect(initial.islandPositions.filter(island => island.visible && island.id !== center.id).every(island => island.scale < center.scale)).toBe(true);
  await page.screenshot({ path: testInfo.outputPath('floating-carousel.png') });

  for (const island of initial.islandPositions.filter(island => !island.unlocked)) {
    await selectIsland(page, island.id);
    expect(await page.evaluate(() => window.__TEST__.islandEntryAvailable)).toBe(false);
    await clickGame(page, 640, 332);
    expect(await page.evaluate(() => window.__TEST__.sceneKey)).toBe('IslandSelectScene');
    expect(await page.evaluate(() => window.__TEST__.lockedFeedback)).toBe(island.id);
  }
  await selectIsland(page, 'grand-library');
  await page.screenshot({ path: testInfo.outputPath('open-library.png') });
  await page.keyboard.press('ArrowRight');
  await expect.poll(() => page.evaluate(() => window.__TEST__.selectedIsland)).toBe('numeric-ruins');
  await page.keyboard.press('ArrowLeft');
  await expect.poll(() => page.evaluate(() => window.__TEST__.selectedIsland)).toBe('grand-library');
  await clickGame(page, 52, 48);
  await expect.poll(() => page.evaluate(() => window.__TEST__.openModal)).toBe('settings');
  await page.keyboard.press('ArrowRight');
  expect(await page.evaluate(() => window.__TEST__.selectedIsland)).toBe('grand-library');
  await page.keyboard.press('Escape');
  await expect.poll(() => page.evaluate(() => window.__TEST__.openModal)).toBeNull();
  expect(errors).toEqual([]);
});

test('all open islands retain four quarters and return to their carousel selection', async ({ page }, testInfo) => {
  test.setTimeout(90000);
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('/?test=1');
  await ready(page, 'MenuScene');
  await startFromMenu(page);
  for (const id of ['vulcan-caverns', 'reading-island', 'numeric-ruins']) {
    await selectIsland(page, id);
    await clickGame(page, 640, 578);
    await ready(page, 'IslandMapScene');
    expect(await page.evaluate(() => window.__TEST__.worldBackground)).toBe(id + '-map');
    expect(await page.evaluate(() => window.__TEST__.mapQuarterNodeCount)).toBe(4);
    await page.screenshot({ path: testInfo.outputPath(id + '-map.png') });
    for (const quarter of islandCurricula[id].nodes) {
      await clickGame(page, quarter.x, quarter.y);
      await ready(page, 'QuarterDetailScene');
      const state = await page.evaluate(() => window.__TEST__.state());
      expect(state.selectedIsland).toBe(id);
      expect(state.selectedQuarter).toBe(quarter.id);
      expect(state.quarterMajorCount).toBe(id === 'vulcan-caverns' ? 4 : 5);
      expect(state.quarterLessonCount).toBe(id === 'vulcan-caverns' ? 20 : 25);
      await clickGame(page, 64, 62);
      await ready(page, 'IslandMapScene');
    }
    await clickGame(page, 64, 62);
    await ready(page, 'IslandSelectScene');
    expect(await page.evaluate(() => window.__TEST__.selectedIsland)).toBe(id);
  }
  expect(errors).toEqual([]);
});

test('each island can switch between normal and mist-covered locked visuals', async ({ page }, testInfo) => {
  test.setTimeout(60000);
  await page.goto('/?test=1');
  await ready(page, 'MenuScene');
  await startFromMenu(page);
  const ids = await page.evaluate(() => window.__TEST__.islandPositions.map(island => island.id));
  for (const id of ids) {
    await selectIsland(page, id);
    await page.evaluate(id => window.__TEST__.commands.setIslandUnlocked(id, true), id);
    expect(await page.evaluate(() => window.__TEST__.islandEntryAvailable)).toBe(true);
    expect(await page.evaluate(id => window.__TEST__.islandPositions.find(island => island.id === id).state, id)).toBe('normal');
    if (id === 'hibla-archipelago') await page.screenshot({ path: testInfo.outputPath('hibla-normal.png') });
    await page.evaluate(id => window.__TEST__.commands.setIslandUnlocked(id, false), id);
    expect(await page.evaluate(() => window.__TEST__.islandEntryAvailable)).toBe(false);
    expect(await page.evaluate(id => window.__TEST__.islandPositions.find(island => island.id === id).state, id)).toBe('locked');
    await clickGame(page, 640, 578);
    expect(await page.evaluate(() => window.__TEST__.sceneKey)).toBe('IslandSelectScene');
    if (id === 'hibla-archipelago') await page.screenshot({ path: testInfo.outputPath('hibla-locked.png') });
  }
});

test('swiping changes focus without entering and tapping a neighbor centers it', async ({ browser }, testInfo) => {
  test.setTimeout(60000);
  const context = await browser.newContext({ viewport: testInfo.project.use.viewport, hasTouch: true });
  const page = await context.newPage();
  try {
    await page.goto('http://127.0.0.1:5173/?test=1');
    await ready(page, 'MenuScene');
    await startFromMenu(page);
    const box = await page.locator('canvas').boundingBox();
    const point = (x, y) => ({ x: box.x + x * box.width / 1280, y: box.y + y * box.height / 720 });
    const cdp = await context.newCDPSession(page);
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [point(780, 350)] });
    for (const x of [720, 650, 570]) await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [point(x, 350)] });
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
    await expect.poll(() => page.evaluate(() => window.__TEST__.selectedIsland)).toBe('numeric-ruins');
    expect(await page.evaluate(() => window.__TEST__.sceneKey)).toBe('IslandSelectScene');
    const side = point(995, 360);
    await page.touchscreen.tap(side.x, side.y);
    await expect.poll(() => page.evaluate(() => window.__TEST__.selectedIsland)).toBe('vulcan-caverns');
    await selectIsland(page, 'hibla-archipelago');
    const center = point(640, 332);
    await page.touchscreen.tap(center.x, center.y);
    expect(await page.evaluate(() => window.__TEST__.sceneKey)).toBe('IslandSelectScene');
    await page.screenshot({ path: testInfo.outputPath('touch-locked-island.png') });
  } finally { await context.close(); }
});
