class CanvasPage {
  constructor(page) {
    this.heading = page.locator('#content h3');
    this.canvas = page.locator('#content canvas');
  }

  async hasCanvasDimensions() {
    return this.canvas.evaluate((canvas) => canvas.width > 0 && canvas.height > 0);
  }
}

module.exports = { CanvasPage };
