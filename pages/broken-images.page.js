class BrokenImagesPage {
  constructor(page) {
    this.images = page.locator('#content .example img');
  }

  async brokenImageCount() {
    await this.images.first().waitFor({ state: 'visible' });
    await this.images.evaluateAll((images) =>
      Promise.all(
        images.map(
          (image) =>
            image.complete ||
            new Promise((resolve) => {
              image.addEventListener('load', resolve, { once: true });
              image.addEventListener('error', resolve, { once: true });
            }),
        ),
      ),
    );

    const imageStates = await this.images.evaluateAll((images) =>
      images.map((image) => image.complete && image.naturalWidth === 0),
    );
    return imageStates.filter(Boolean).length;
  }
}

module.exports = { BrokenImagesPage };
