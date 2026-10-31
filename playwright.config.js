const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html', { open: 'never' }]],
  timeout: 30_000,
  expect: {
    timeout: 5_000,
  },
  use: {
    baseURL: process.env.BASE_URL || 'https://the-internet.herokuapp.com',
    browserName: 'chromium',
    httpCredentials: { username: 'admin', password: 'admin' },
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10_000,
    navigationTimeout: 30_000,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
});
