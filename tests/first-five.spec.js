const { test, expect } = require('@playwright/test');
const { AbTestingPage } = require('../pages/ab-testing.page');
const { AddRemoveElementsPage } = require('../pages/add-remove-elements.page');
const { BasicAuthPage } = require('../pages/basic-auth.page');
const { BrokenImagesPage } = require('../pages/broken-images.page');
const { CanvasPage } = require('../pages/canvas.page');
const { HomePage } = require('../pages/home.page');

test('open A/B Testing', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await homePage.openExample('A/B Testing');

  const examplePage = new AbTestingPage(page);
  await expect(examplePage.heading).toContainText('A/B Test');
});

test('add an element', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await homePage.openExample('Add/Remove Elements');

  const examplePage = new AddRemoveElementsPage(page);
  await expect(examplePage.heading).toContainText('Add/Remove Elements');
  await examplePage.addElement();
  await expect(examplePage.deleteButtons).toHaveCount(1);
});

test('open Basic Auth with the example credentials', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await homePage.openExample('Basic Auth');

  const examplePage = new BasicAuthPage(page);
  await expect(examplePage.heading).toContainText('Basic Auth');
  await expect(examplePage.welcomeMessage).toContainText('Congratulations!');
});

test('find broken images', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await homePage.openExample('Broken Images');

  const examplePage = new BrokenImagesPage(page);
  expect(await examplePage.brokenImageCount()).toBeGreaterThanOrEqual(1);
});

test('open Canvas', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await homePage.openExample('Canvas');

  const examplePage = new CanvasPage(page);
  await expect(examplePage.heading).toContainText('Canvas');
  await expect(examplePage.canvas).toBeVisible();
  expect(await examplePage.hasCanvasDimensions()).toBe(true);
});
