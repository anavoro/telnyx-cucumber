import { defineConfig } from 'cypress';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild';

export default defineConfig({
  e2e: {
    baseUrl: 'https://telnyx.com',
    specPattern: 'cypress/e2e/tests/HomeTest/**/*.feature',
    supportFile: 'cypress/support/e2e.ts',

    async setupNodeEvents(on, config) {
      // Add Cucumber preprocessor plugin
      await addCucumberPreprocessorPlugin(on, config);

      // Set up file preprocessor with esbuild plugin
      on('file:preprocessor', createBundler({
        plugins: [createEsbuildPlugin(config)]
      }));

      // Configure step definitions and non-global step settings
      config.env = {
        ...config.env,
        nonGlobalStepDefinitions: true,
        stepDefinitions: [
          'cypress/e2e/tests/HomeTest/**/*.ts',
          'cypress/e2e/tests/NavigationTest/**/*.ts'
        ]
      };

      return config;
    },
  },
});
