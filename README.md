# README

## Overview
This repository contains functional tests for the DemoBlaze e-commerce site using Playwright and TypeScript. The tests cover core user flows, including signup, login/logout, product browsing, adding items to the cart, and completing purchases.

## Testing Philosophy
Testing was prioritised based on business risk, with focus on functionality that directly impacts revenue and user trust in an e-commerce context. More details can be found in `TestPlan.md`.

## Running Tests

### Locally
```bash
# Install dependencies
npm ci

# Install Playwright browsers
npx playwright install --with-deps

# Run tests headless
npm test

# Run tests headed for debugging
npm run test:headed

# Run a single test in debug mode
npm run test:debug
```

### In GitHub Actions
The workflow .github/workflows/playwright.yml runs the full test suite on every push or pull request to main.