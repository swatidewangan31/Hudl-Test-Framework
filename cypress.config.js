const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //view port
  viewPortHeight: 768,
  viewportWidth: 1280,
  //timeout
  defaultCommandTimeout: 10000,
  //retries
  retries: {
    openMode: 0,
    runMode: 1
  },
  //browser security
  chromeWebSecurity: false,
  //videos and screenshots
  video: true,
  screenshotOnRunFailure: true,
  failOnStatusCode: false,
  e2e: {
    setupNodeEvents(on, config) {
      //base url
      baseUrl: "http://hudl.com/"
    },
  },
});