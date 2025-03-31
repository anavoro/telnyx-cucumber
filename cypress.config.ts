import { defineConfig } from 'cypress';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild';

export default defineConfig({
  e2e: {
    baseUrl: 'https://telnyx.com',
    specPattern: 'cypress/e2e/tests//**/*.feature',
    supportFile: 'cypress/support/e2e.ts',
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: "cypress/reports",
      charts: true,
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
      overwrite: false,
      html: true,
      json: true,
    },
    async setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      
      await addCucumberPreprocessorPlugin(on, config);
    
      on('file:preprocessor', createBundler({
        plugins: [createEsbuildPlugin(config)]
      }));

      config.env = {
        ...config.env,
        nonGlobalStepDefinitions: false,
        stepDefinitions: 
          'cypress/e2e/tests/**/*.ts',
      };

      return config;
    },
  },
});

