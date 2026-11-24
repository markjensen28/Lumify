export async function ready(page, scene, timeout = 30000) {
  await page.waitForFunction((key) => window.__TEST__?.ready && window.__TEST__.sceneKey === key, scene, { timeout });
}

export async function clickGame(page, x, y) {
  const box = await page.locator('canvas').boundingBox();
  await page.mouse.click(box.x + x * box.width / 1280, box.y + y * box.height / 720);
}

export async function hoverGame(page, x, y) {
  const box = await page.locator('canvas').boundingBox();
  await page.mouse.move(box.x + x * box.width / 1280, box.y + y * box.height / 720);
}

export async function dialogueReady(page, phase) {
  await page.waitForFunction((id) => window.__TEST__?.ready && window.__TEST__.introPhase === id
    && window.__TEST__.introStatus === 'dialogue', phase);
}

export async function finishDialogue(page, phase, input = 'Space') {
  await dialogueReady(page, phase);
  const count = await page.evaluate(() => window.__TEST__.dialogueLineCount);
  for (let line = 0; line < count; line += 1) {
    await page.waitForFunction((index) => window.__TEST__.dialogueLineIndex === index, line);
    if (input === 'click') await clickGame(page, 800, 590);
    else await page.keyboard.press(input);
  }
}

export async function skipCutscene(page, phase) {
  await page.waitForFunction(id => window.__TEST__?.ready && window.__TEST__.introPhase === id
    && window.__TEST__.introStatus === 'playing', phase);
  await page.keyboard.press('Escape');
}

export async function startFromMenu(page) {
  await clickGame(page, 640, 344);
  await ready(page, 'IntroScene');
  await page.keyboard.press('Escape');
  await finishDialogue(page, 'library');
  await skipCutscene(page, 'world-intro');
  await finishDialogue(page, 'world-introduction');
  await ready(page, 'IslandSelectScene');
}

export async function exitWorld(page) {
  await clickGame(page, 52, 48);
  await page.waitForFunction(() => window.__TEST__.openModal === 'settings');
  await clickGame(page, 745, 472);
  await ready(page, 'MenuScene');
}

export async function selectIsland(page, id) {
  await ready(page, 'IslandSelectScene');
  const { positions, selected } = await page.evaluate(() => ({ positions: window.__TEST__.islandPositions, selected: window.__TEST__.selectedIsland }));
  const from = positions.findIndex(island => island.id === selected);
  const target = positions.findIndex(island => island.id === id);
  if (target < 0) throw new Error(`Unknown island: ${id}`);
  const forward = (target - from + positions.length) % positions.length;
  const steps = forward <= positions.length / 2 ? forward : forward - positions.length;
  for (let step = 0; step < Math.abs(steps); step++) {
    await page.keyboard.press(steps > 0 ? 'ArrowRight' : 'ArrowLeft');
    await page.waitForFunction(() => !window.__TEST__.carouselMoving);
  }
  await page.waitForFunction(expected => window.__TEST__.selectedIsland === expected, id);
}
