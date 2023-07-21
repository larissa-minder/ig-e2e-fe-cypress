import { defineConfig } from "cypress";
import * as MochawesomeReporter from 'cypress-mochawesome-reporter/plugin';
const { cloudPlugin } = require("cypress-cloud/plugin");



export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  videoCompression: 32,
  projectId: "htok9w",
  defaultCommandTimeout:4000,
  videoUploadOnPasses:false,
  reporterOptions: {
    charts: true,
    reportPageTitle: 'E2E IG REPORT',
  },
  e2e: {
    setupNodeEvents(on, config) {
      MochawesomeReporter(on);
    },
    baseUrl: 'http://tutorialsninja.com/demo',
    //viewportWidth: 1920,
    //viewportHeight: 1080,
  },
  
});
