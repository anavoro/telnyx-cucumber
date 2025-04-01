# Telnyx Automation

This repository contains automated test scripts using Cypress and Cucumber to verify the functionality of the Telnyx website.

## Website

- [Telnyx](https://telnyx.com)

## Technologies

- [Cypress](https://www.cypress.io/) - Modern E2E testing framework
- [Cucumber](https://cucumber.io/) - BDD testing framework
- [Node.js](https://nodejs.org/) - JavaScript runtime environment
- [npm](https://www.npmjs.com/) - Package manager for Node.js
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript language

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

To set up the test environment, clone this repository and install the necessary dependencies:

```shell

git clone https://github.com/anavoro/telnyx-cucumber.git
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

- **`common/`**: Contains shared step definition files (`common_steps.ts`) used across multiple features.
- **`features/`**: Holds the Cucumber feature files (`.feature`) that describe the test scenarios in plain language.
- **`pages/`**: Contains the Page Object Model (POM) classes. Each class represents a specific page of the Telnyx website and provides methods for interacting with its elements.
- **`step_definitions/`**: Contains the TypeScript files (`.ts`) with the step definitions that implement the steps described in the feature files. These files link the Gherkin syntax in your features to the Cypress commands and Page Object interactions.

Supporting files and configurations are located in the `cypress/support/` directory, and test reports are generated in the `cypress/reports/` directory.

## Continuous Integration (CI)

This project utilizes **GitHub Actions** for continuous integration. The CI workflow is configured to automatically run the automated tests on every push to the repository and pull request. Additionally, it is configured for **workflow dispatch**, allowing manual triggering of the workflow from the GitHub Actions UI.

### Test Reports (Local)

This project utilizes **Mochawesome** (`cypress-mochawesome-reporter`) to generate detailed test reports after each test run.

After running your tests locally (especially in headless mode using `npm run test`), you can find the generated HTML and JSON reports in the `cypress/reports` directory.

### Test Reports in GitHub Actions (Artifacts)

This project uses GitHub Actions for continuous integration. As part of the workflow, after the Cypress tests are executed, the generated **Mochawesome** reports are uploaded as an **artifact** named `cypress-reports`.

You can access these reports for each workflow run by following these steps on GitHub:

1.  Go to the "Actions" tab of this repository.
2.  Select the specific workflow run you are interested in.
3.  Scroll down to the "Artifacts" section on the workflow run summary page.
