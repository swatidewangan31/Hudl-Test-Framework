require('dotenv').config();
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  viewportHeight: 768,
  viewportWidth: 1280,
  defaultCommandTimeout: 10000,
  retries: {
    openMode: 0,
    runMode: 1
  },
  chromeWebSecurity: false,
  video: true,
  screenshotOnRunFailure: true,
  failOnStatusCode: false,
  env: {
    PASSWORD: process.env.CYPRESS_PASSWORD
  },
  e2e: {
    baseUrl: "https://www.hudl.com",
    setupNodeEvents(on, config) {
      // node events go here if needed
    },
  },
});