import { defineConfig } from 'cypress';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").default;

export default defineConfig({
  e2e: {
    baseUrl: 'https://telnyx.com',
    specPattern: "cypress/e2e/features/*.feature",
    supportFile: "cypress/support/e2e.ts",
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      const preprocessor = (createEsbuildPlugin.default || createEsbuildPlugin) as any;
      
      on("file:preprocessor", createBundler({
        plugins: [preprocessor(config)]
      }));
      
      return config;
    },
  },
});

