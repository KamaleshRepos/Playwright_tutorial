class BasicAuthPage {
  constructor(page) {
    this.heading = page.locator('#content h3');
    this.welcomeMessage = page.locator('#content .example p');
  }
}

module.exports = { BasicAuthPage };
