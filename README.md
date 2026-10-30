# Playwright Tutorial

Browser tests for the first five examples on [The Internet](https://the-internet.herokuapp.com/), using Playwright, Cucumber, and the Page Object Model.

## Project structure

- `features/first-five-links.feature` contains the Gherkin scenarios.
- `features/step-definitions/` maps the scenarios to browser actions and assertions.
- `features/support/hooks.js` creates and closes a browser context for each scenario.
- `pages/` contains the page objects and their locators.
- `.github/workflows/playwright.yml` runs the dry-run and browser tests on every push and pull request.

The scenarios cover A/B Testing, Add/Remove Elements, Basic Auth, Broken Images, and Canvas, in the order they appear on the home page.

## Run locally

Install dependencies and the Chromium browser:

```sh
npm ci
npx playwright install chromium
```

Check that every Gherkin step has a definition:

```sh
npm run test:dry-run
```

Run the browser tests:

```sh
npm test
```

Set `BASE_URL` to run against another deployment of The Internet. The default is `https://the-internet.herokuapp.com`.
