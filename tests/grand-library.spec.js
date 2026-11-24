import { expect, test } from '@playwright/test';
import { clickGame, ready, startFromMenu } from './helpers/intro.js';

test.use({ actionTimeout: 12_000 });

async function openTopic(archive, title) {
  const menu = archive.getByRole('combobox', { name: 'Topic' });
  if (await menu.isVisible()) await menu.selectOption({ label: title });
  else await archive.getByRole('button', { name: title, exact: true }).click();
  await expect(archive.getByRole('heading', { name: title, exact: true })).toBeVisible();
}

async function expectCanvasFrame(page, archive) {
  await expect.poll(async () => {
    const canvas = await page.locator('canvas').boundingBox();
    const panel = await archive.boundingBox();
    return panel && Math.max(...['x', 'y', 'width', 'height'].map(key => Math.abs(panel[key] - canvas[key])));
  }).toBeLessThanOrEqual(1);
}

test('Grand Library has one volume per subject, with readable notes and shared island locks', async ({ page }, info) => {
  test.setTimeout(120_000);
  await page.emulateMedia({ reducedMotion: 'reduce' });
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('/?test=1');
  await ready(page, 'MenuScene');
  await startFromMenu(page);

  const enterLibrary = async () => {
    await clickGame(page, 640, 578);
    await ready(page, 'IslandMapScene');
  };
  await enterLibrary();
  const archive = page.getByRole('main', { name: 'Grand Library' });
  const book = subject => archive.getByRole('button', { name: `Open ${subject} book`, exact: true });
  const locked = subject => archive.getByRole('button', { name: `${subject} book, locked`, exact: true });
  const bookshelf = archive.getByRole('button', { name: 'Bookshelf' });
  await expect(archive.getByRole('heading', { name: 'Grand Library' })).toBeFocused();
  await expect(archive.getByRole('list', { name: 'Available subject books' }).getByRole('button')).toHaveCount(3);
  await expect(archive.getByRole('list', { name: 'Locked subject books' }).getByRole('button')).toHaveCount(4);
  for (const subject of ['Filipino', 'EPP', 'Araling Panlipunan', 'Edukasyon sa Pagpapakatao']) {
    await expect(locked(subject)).toBeDisabled();
  }
  await page.evaluate(async () => {
    await Promise.all(['archive-gallery.png', 'subject-bindings.webp', 'sealed-spines.webp'].map(async file => {
      const art = new Image();
      art.src = '/assets/grand-library/' + file;
      await art.decode();
    }));
  });
  const overflow = () => archive.evaluate(root => root.scrollWidth > root.clientWidth);
  expect(await overflow()).toBe(false);
  const mathTitle = book('Mathematics').getByText('Mathematics', { exact: true });
  const titleFits = () => mathTitle.evaluate(title => title.clientHeight <= Math.ceil(parseFloat(getComputedStyle(title).lineHeight)));
  expect(await titleFits()).toBe(true);
  await page.screenshot({ path: info.outputPath('library-shelf.png') });
  const viewport = page.viewportSize();
  await expectCanvasFrame(page, archive);
  if (viewport.width > 1041) {
    await page.setViewportSize({ width: 1912, height: 948 });
    await expectCanvasFrame(page, archive);
    await page.screenshot({ path: info.outputPath('library-wide.png') });
    await page.setViewportSize({ width: 1041, height: viewport.height });
    await expectCanvasFrame(page, archive);
    expect(await titleFits()).toBe(true);
    await page.setViewportSize(viewport);
  }

  await book('Science').press('Enter');
  await expectCanvasFrame(page, archive);
  await expect(archive.getByRole('heading', { name: 'Science', exact: true })).toBeFocused();
  const lessonEntries = archive.locator('details');
  for (const topic of ['Mixtures', 'Separation Techniques', 'Benefits of Separation', 'Mixtures and Separation in Action']) {
    await openTopic(archive, topic);
    await expect(lessonEntries).toHaveCount(5);
  }
  await archive.getByText('Fair Test Arena', { exact: true }).click();
  await expect(archive.getByText('Start with equal amounts', { exact: false })).toBeVisible();
  await archive.getByRole('button', { name: 'Quarter 4' }).click();
  await openTopic(archive, 'Seasons');
  await expect(archive.getByText('Earth’s tilted axis', { exact: false })).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(book('Science')).toBeFocused();

  await book('English').click();
  await expect(lessonEntries).toHaveCount(5);
  await archive.getByText('Alliteration Airship', { exact: true }).click();
  await expect(archive.getByText('silver sails', { exact: false })).toBeVisible();
  await bookshelf.click();

  await book('Mathematics').click();
  await expect(lessonEntries).toHaveCount(5);
  await archive.getByText('Mosaic Converter', { exact: true }).click();
  await expect(archive.getByText('four twelfths and three twelfths', { exact: false })).toBeVisible();
  expect(await overflow()).toBe(false);
  await page.screenshot({ path: info.outputPath('library-reader.png') });
  await archive.getByRole('button', { name: 'Quarter 3' }).click();
  await openTopic(archive, 'Surface Area');
  await expect(lessonEntries).toHaveCount(0);
  await expect(archive.getByText('add the areas of every face once', { exact: false })).toBeVisible();
  await bookshelf.click();
  await archive.getByRole('button', { name: 'World Map' }).click();
  await ready(page, 'IslandSelectScene');
  await expect(archive).toHaveCount(0);
  expect(await page.evaluate(() => window.__TEST__.selectedIsland)).toBe('grand-library');

  await page.evaluate(() => {
    window.__TEST__.commands.setIslandUnlocked('reading-island', false);
    window.__TEST__.commands.setIslandUnlocked('hibla-archipelago', true);
  });
  await enterLibrary();
  await expect(locked('English')).toBeDisabled();
  await book('Filipino').click();
  await expect(archive.getByText('No lesson notes have been filed', { exact: false })).toBeVisible();
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await bookshelf.click();
  await archive.getByRole('button', { name: 'World Map' }).click();
  await ready(page, 'IslandSelectScene');
  await enterLibrary();
  await expect(book('Science')).toBeVisible();
  await expectCanvasFrame(page, archive);
  expect(errors).toEqual([]);
});
