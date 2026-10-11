const { defineConfig } = require("cypress");

module.exports = defineConfig({
    // allowCypressEnv: false,
    defaultCommandTimeout: 7000, //global timeout for all commands
  projectId: "cgotwm",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/integration/examples/*.js",
    env:{
      url: "https://rahulshettyacademy.com"
    }
  },


});
