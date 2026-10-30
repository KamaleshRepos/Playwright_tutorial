const assert = require('node:assert/strict');
const { Given, When, Then } = require('@cucumber/cucumber');
const { AbTestingPage } = require('../../pages/ab-testing.page');
const { AddRemoveElementsPage } = require('../../pages/add-remove-elements.page');
const { BasicAuthPage } = require('../../pages/basic-auth.page');
const { BrokenImagesPage } = require('../../pages/broken-images.page');
const { CanvasPage } = require('../../pages/canvas.page');
const { HomePage } = require('../../pages/home.page');

const pageObjects = {
  'A/B Testing': AbTestingPage,
  'Add/Remove Elements': AddRemoveElementsPage,
  'Basic Auth': BasicAuthPage,
  'Broken Images': BrokenImagesPage,
  Canvas: CanvasPage,
};

Given('I open the home page', async function () {
  this.homePage = new HomePage(this.page);
  await this.homePage.goto();
});

When('I open the {string} example', async function (exampleName) {
  const PageObject = pageObjects[exampleName];
  assert.ok(PageObject, `Unsupported example: ${exampleName}`);
  await this.homePage.openExample(exampleName);
  this.examplePage = new PageObject(this.page);
});

Then('I should see a heading containing {string}', async function (expectedText) {
  const heading = this.examplePage.heading;
  await heading.waitFor({ state: 'visible' });
  const actualText = await heading.innerText();
  assert.ok(
    actualText.includes(expectedText),
    `Expected heading to contain "${expectedText}", received "${actualText}"`,
  );
});

When('I add an element', async function () {
  await this.examplePage.addElement();
});

Then('I should see {int} delete button', async function (expectedCount) {
  assert.equal(await this.examplePage.deleteButtons.count(), expectedCount);
});

Then('I should see the authenticated welcome message', async function () {
  const message = await this.examplePage.welcomeMessage.innerText();
  assert.ok(message.includes('Congratulations!'), `Unexpected message: "${message}"`);
});

Then('I should see at least {int} broken image', async function (minimumCount) {
  const brokenImageCount = await this.examplePage.brokenImageCount();
  assert.ok(
    brokenImageCount >= minimumCount,
    `Expected at least ${minimumCount} broken image(s), found ${brokenImageCount}`,
  );
});

Then('I should see a visible canvas', async function () {
  assert.equal(await this.examplePage.canvas.isVisible(), true);
  assert.equal(await this.examplePage.hasCanvasDimensions(), true);
});
