const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // event config di sini (jika ada)
    },
  },
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: false,
    json: true,
  },
});
