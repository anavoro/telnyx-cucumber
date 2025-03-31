# Telnyx Automation

This repository contains automated test scripts using Cypress and Cucumber to verify the functionality of the Telnyx website.

## Website

- [Telnyx](https://telnyx.com)

## Technologies

- [Cypress] - Modern E2E testing framework
- [Cucumber] - BDD testing framework
- [Node.js] - JavaScript runtime environment
- [npm] - Package manager for Node.js
- [TypeScript] - Typed JavaScript language

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

To set up the test environment, clone this repository and install the necessary dependencies:

```shell

git clone <https://github.com/anavoro/telnyx-cucumber.git>
cd telnyx-cucumber

npm install

# Install Cypress as a dev dependency
npm install cypress --save-dev

# Initialize Cypress in your project
npx cypress open

npm install @badeball/cypress-cucumber-preprocessor --save-dev

# Install additional dependencies for webpack
npm install @bahmutov/cypress-esbuild-preprocessor esbuild --save-dev
```

## Test Execution

Local Execution

```shell
#Run the test suite in headless mode:
npm run test
#Open Cypress in interactive mode:
npm run test:ui
```

## Project Structure

The automated tests are organized within the `cypress/e2e/` directory:

- **`pages/`**: Contains code representing different pages of the Telnyx website (using the Page Object Model).
- **`tests/`**: Holds the actual test files, grouped by website area:
  - **`HomeTest/`**: Tests related to the Telnyx homepage. Contains:
    - `.feature` files (describe test scenarios in plain language).
    - `.ts` files (contain the code that makes the tests run).
  - **`NavigationTest/`**: Tests for website navigation. Contains `.feature` and `.ts` files.
  - **`HelpTest/`**: Tests for the help section. Contains `.feature` and `.ts` files.

Supporting files and configurations are located in the `cypress/support/` directory, and test reports are generated in the `cypress/reports/` directory.

### Test Reports (Local)

This project utilizes **Mochawesome** (`cypress-mochawesome-reporter`) to generate detailed test reports after each test run.

After running your tests locally (especially in headless mode using `npm run test`), you can find the generated HTML and JSON reports in the `cypress/reports` directory.

### Test Reports in GitHub Actions (Artifacts)

This project uses GitHub Actions for continuous integration. As part of the workflow, after the Cypress tests are executed, the generated **Mochawesome** reports are uploaded as an **artifact** named `cypress-reports`.

You can access these reports for each workflow run by following these steps on GitHub:

1.  Go to the "Actions" tab of this repository.
2.  Select the specific workflow run you are interested in.
3.  Scroll down to the "Artifacts" section on the workflow run summary page.
