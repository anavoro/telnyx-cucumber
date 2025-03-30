# Telnyx Automation

This repository contains automated test scripts using Cypress and Cucumber to verify the functionality of the Telnyx website.

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

To set up the test environment, install project's dependencies using the following command:

```shell
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
