import { expect, test } from '@playwright/test';
import { clickGame, dialogueReady, exitWorld, finishDialogue, hoverGame, ready, selectIsland, startFromMenu } from './helpers/intro.js';

test('both cinematics play naturally between Krae dialogues before Grand Library selection', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'desktop', 'One full playback verifies the shared cinematic controller.');
  test.setTimeout(120000);
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/?test=1');
  await ready(page, 'MenuScene');
  await page.screenshot({ path: 'screenshots/intro-menu.png' });
  await clickGame(page, 640, 344);
  await page.waitForFunction(() => window.__TEST__?.introStatus === 'playing');
  // Ordinary clicks do not advance the non-interactive cinematic.
  await clickGame(page, 800, 590);
  expect(await page.evaluate(() => window.__TEST__.introPhase)).toBe('cinematic');
  await dialogueReady(page, 'library');
  await page.screenshot({ path: 'screenshots/intro-library.png' });
  expect(await page.evaluate(() => window.__TEST__.dialoguePose)).toBe('talk');
  await page.keyboard.press('Space');
  expect(await page.evaluate(() => window.__TEST__.dialoguePose)).toBe('cry');
  for (let line = 1; line < 4; line += 1) await page.keyboard.press('Space');
  await page.waitForFunction(() => window.__TEST__?.introPhase === 'world-intro'
    && window.__TEST__.introStatus === 'playing');
  await page.screenshot({ path: testInfo.outputPath('world-intro-video.png') });
  await dialogueReady(page, 'world-introduction');
  await page.screenshot({ path: 'screenshots/intro-clear-world.png' });
  expect(await page.evaluate(() => window.__TEST__.worldBackground)).toBe('floating-sky');
  await finishDialogue(page, 'world-introduction', 'Enter');
  await ready(page, 'IslandSelectScene');
  await page.screenshot({ path: 'screenshots/intro-world.png' });
  await hoverGame(page, 640, 332);
  expect(await page.evaluate(() => window.__TEST__.selectedIsland)).toBe('grand-library');
  expect(await page.evaluate(() => window.__TEST__.islandEntryAvailable)).toBe(true);
  await exitWorld(page);
  expect(errors).toEqual([]);
});

test('skip cinema preserves both tap-driven dialogues, Settings and repeat Start', async ({ page }, testInfo) => {
  test.setTimeout(90000);
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/?test=1');
  await ready(page, 'MenuScene');
  const startAt = await page.evaluate(() => performance.now());
  await clickGame(page, 640, 344);
  await page.waitForFunction(() => window.__TEST__?.introStatus === 'menu-fading');
  expect(await page.evaluate(() => window.__TEST__.sceneKey)).toBe('MenuScene');
  await ready(page, 'IntroScene');
  expect(await page.evaluate(() => performance.now()) - startAt).toBeGreaterThanOrEqual(1900);
  await clickGame(page, 1180, 48);
  await dialogueReady(page, 'library');
  await page.screenshot({ path: testInfo.outputPath('krae-library.png') });
  await finishDialogue(page, 'library', 'click');
  // The library fades to white before the world video, and inputs cannot skip ahead.
  expect(await page.evaluate(() => window.__TEST__.introStatus)).toBe('fading');
  await page.keyboard.press('Space');
  await page.waitForFunction(() => window.__TEST__?.ready && window.__TEST__.introPhase === 'world-intro'
    && window.__TEST__.introStatus === 'playing');
  expect(await page.evaluate(() => window.__TEST__.dialogueText)).toBeNull();
  await page.keyboard.press('Enter');
  await clickGame(page, 800, 590);
  expect(await page.evaluate(() => window.__TEST__.introPhase)).toBe('world-intro');
  await page.keyboard.press('Escape');
  await page.waitForFunction(() => window.__TEST__?.introPhase === 'world-introduction'
    && window.__TEST__.introStatus === 'fading');
  // Krae's first line is already rendered while the islands fade in: no empty pause.
  expect(await page.evaluate(() => window.__TEST__.dialogueText)).toContain('Welcome to the world of Lumora!');
  await dialogueReady(page, 'world-introduction');
  expect(await page.evaluate(() => window.__TEST__.dialogueLineIndex)).toBe(0);
  expect(await page.evaluate(() => window.__TEST__.worldBackground)).toBe('floating-sky');
  const introPositions = await page.evaluate(() => window.__TEST__.islandPositions);
  expect(await page.evaluate(() => window.__TEST__.selectedIsland)).toBe('grand-library');
  expect(await page.evaluate(() => window.__TEST__.worldSettings)).toBeNull();
  expect(await page.evaluate(() => window.__TEST__.islandEntryAvailable)).toBe(false);
  await page.keyboard.press('ArrowRight');
  expect(await page.evaluate(() => window.__TEST__.selectedIsland)).toBe('grand-library');
  await page.screenshot({ path: testInfo.outputPath('clear-world-introduction.png') });
  await finishDialogue(page, 'world-introduction', 'click');
  expect(await page.evaluate(() => window.__TEST__.introStatus)).toBe('fading');
  await page.keyboard.press('Enter');
  await ready(page, 'IslandSelectScene');
  const selectionPositions = await page.evaluate(() => window.__TEST__.islandPositions);
  expect(selectionPositions.map(({ id, x, scale, visible }) => ({ id, x, scale, visible })))
    .toEqual(introPositions.map(({ id, x, scale, visible }) => ({ id, x, scale, visible })));
  expect(await page.evaluate(() => window.__TEST__.selectedIsland)).toBe('grand-library');
  expect(await page.evaluate(() => window.__TEST__.islandEntryAvailable)).toBe(true);
  await clickGame(page, 52, 48);
  await expect.poll(() => page.evaluate(() => window.__TEST__.openModal)).toBe('settings');
  await clickGame(page, 535, 472);
  await expect.poll(() => page.evaluate(() => window.__TEST__.openModal)).toBeNull();
  expect(await page.evaluate(() => window.__TEST__.worldBackground)).toBe('floating-sky');
  await selectIsland(page, 'hibla-archipelago');
  await clickGame(page, 640, 332);
  expect(await page.evaluate(() => window.__TEST__.lockedFeedback)).toBe('hibla-archipelago');
  await exitWorld(page);
  await startFromMenu(page);
  expect(errors).toEqual([]);
});

test('missing cinematic videos fall through to dialogue and a usable Grand Library', async ({ page }) => {
  test.setTimeout(60000);
  await page.route('**/assets/video/cutscene-1-browser.mp4', (route) => route.abort());
  await page.route('**/assets/video/world-intro-browser.mp4', (route) => route.abort());
  await page.goto('/?test=1');
  await ready(page, 'MenuScene');
  await clickGame(page, 640, 344);
  await finishDialogue(page, 'library');
  await finishDialogue(page, 'world-introduction');
  await ready(page, 'IslandSelectScene');
  await hoverGame(page, 640, 332);
  expect(await page.evaluate(() => window.__TEST__.selectedIsland)).toBe('grand-library');
  await clickGame(page, 640, 332);
  await ready(page, 'IslandMapScene');
  expect(await page.evaluate(() => window.__TEST__.worldBackground)).toBe('archive-gallery');
  await page.getByRole('button', { name: 'World Map' }).click();
  await ready(page, 'IslandSelectScene');
  expect(await page.evaluate(() => window.__TEST__.selectedIsland)).toBe('grand-library');
});
