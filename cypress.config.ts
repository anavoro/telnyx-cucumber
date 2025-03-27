import { defineConfig } from 'cypress';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild';

export default defineConfig({
  e2e: {
    baseUrl: 'https://telnyx.com',
    specPattern: [
      'cypress/e2e/tests/HomeTest/**/*.feature',
      'cypress/e2e/tests/NavigationTest/**/*.feature',
    ],
    supportFile: 'cypress/support/e2e.ts',

    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on('file:preprocessor', createBundler({
        plugins: [createEsbuildPlugin(config)]
      }));

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
