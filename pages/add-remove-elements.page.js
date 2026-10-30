class AddRemoveElementsPage {
  constructor(page) {
    this.page = page;
    this.heading = page.locator('#content h3');
    this.addButton = page.getByRole('button', { name: 'Add Element' });
    this.deleteButtons = page.getByRole('button', { name: 'Delete' });
  }

  async addElement() {
    await this.addButton.click();
  }
}

module.exports = { AddRemoveElementsPage };
