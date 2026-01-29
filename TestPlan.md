# Test Plan

## Objective
Demonstrate a pragmatic functional testing approach for the DemoBlaze web application, including test prioritisation, functional test design, and the use of Playwright with TypeScript for automation. While I have extensive experience with CypressJS, Playwright offers a very similar developer experience, with additional advantages such as multi-browser support (Chromium, Firefox, WebKit), native handling of page reloads, and robust features for asynchronous UI testing. TypeScript adds strong typing and better maintainability for the test suite, making Playwright + TypeScript an ideal choice for this project.

## Application Overview
DemoBlaze is a demo e-commerce web application supporting:
- User sign-up, login, and logout
- Product browsing by category
- Product detail views
- Shopping cart management
- Order placement via a checkout modal

## Scope
In scope:
- Functional testing of core user journeys

Out of scope:
- Performance, security, accessibility and visual testing
- Exhaustive negative or edge-case validation

## Test Prioritisation
Functional testing is prioritised based on business impact:
1. Life / safety-critical impact
2. Financial impact
3. Reputational impact

Life/safety considerations are not applicable. In an e-commerce context, financial and reputational risks are closely linked, so testing focuses on workflows that directly affect a user’s ability to authenticate, browse products, manage a cart, and complete a purchase.

## Test Approach
Up to five high-value functional test cases are implemented to cover:
- Authentication
- Product discovery
- Adding items to the cart
- Viewing and managing cart contents
- Completing a purchase

## Automation Strategy
- Playwright is used for reliable browser automation, async handling, and dialog/modal support
- TypeScript improves maintainability and reduces test implementation errors by avoiding ambiguous types
- `baseURL` is configured via `playwright.config.ts` to avoid hardcoded environment dependencies
- Tests are designed to be CI-friendly to provide automated feedback on functional regressions

## Test Coverage Overview
| Test Case | Description
| ------ | ----- |
| TC01 | User can sign up with valid credentials
| TC02 | User can log in and log out successfully
| TC03 | User can browse products by category and view product details |
| TC04 | User can add a product to the cart and view persisted cart contents |
| TC05 | User can complete a purchase successfully

## Issues Encountered
1. Signup not registering users – Alerts (Sign up successful) were not handled, so users weren’t actually created.
2. Login failures / empty navbar username – Login failed when using nonexistent users or stale locators after page reload.

These issues highlight the challenges and best practices when testing asynchronous UI behaviour:
- Always verify that actions (signup, login) actually succeed before asserting downstream behaviour.
- Use proper locators to account for asynchronous DOM updates.
- Re-query elements after page reloads to avoid stale references.