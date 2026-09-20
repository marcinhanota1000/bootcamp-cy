const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    chromeWebSecurity: false,
    baseUrl: "https://www.saucedemo.com/",
    video: true,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 10000,
  },
});
