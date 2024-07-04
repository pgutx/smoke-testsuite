![Smoke Test](https://github.com/pgutx/smoke-testsuite/actions/workflows/main.yml/badge.svg)

# Automated Smoke Test Testsuite

## About

Automated smoke test using Playwright against an e-commerce demo site - https://shop.polymer-project.org/

The testsuite is based on manual testcases drafted from exploratory method and involves checking for basic User facing functionality - visibility, clicks and filling the editable fields. The tests follow the User's happy path and reflect the shopping process.

## Test plan

The testsuite is based on exploratory method which was mind mapped using XMind tool and then converted to testcases using Gherkin.

## Gherkin

A sample of a Gherkin styled testcases:

```
Scenario: Add to cart button is interactable on the Product page

Given the User is on the Product page
When the User clicks Add to Cart button
Then the User can see that the button is interactable

Acceptance criteria steps:
AC: The button is visible
AC: The button is enabled
AC: The button is clickable
```

## Automation

The testsuite consists of 164 tests across all pages of the demo site. Tests mimic User facing behaviour and include checking all the button on the site, few products on each of the categories, checking every option field as well as the User's path of buying an item, filling the checkout form and fulfilling the purchase.

## Practices

The testsuite follows Playwright's best practices - using Page Object Model for every page and using fixtures for simplified test setup and teardown. In line with AAA pattern practice, the arrange and act parts are done in the POM file and the tests only have the assert methods. This setup makes the tests more modular, granular and readable. Each test is broken down into step method which mimics the manual testcases Acceptance Criteria steps. 

## CI pipeline

The testsuite is integrated into a Continous Integration pipeline using GitHub Actions workflow. The workflow is set up to be run manually with 1 worker against chromium browser. After the testing is done, an artifact with HTML based raport is created.

## Viewing the HTML raport

In order to view the generated raport please follow the steps given below:

1. Go to the Actions tab of the repository
2. Click latest passing Smoke Test workflow
3. Download the HTML raport from the Artifacts section
4. Extract the ZIP folder (preferably in a folder that already has Playwright)
5. Change the directory to where the report is
6. Use command ```npx playwright show-report <name of the extracted folder>```

These steps allow to view the generated smoke test raport in the browser which will be served over Playwright's servers.

Source - https://playwright.dev/docs/ci-intro#viewing-the-html-report

