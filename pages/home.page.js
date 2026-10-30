class HomePage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/');
  }

  async openExample(name) {
    await this.page.getByRole('link', { name, exact: true }).click();
  }
}

module.exports = { HomePage };
