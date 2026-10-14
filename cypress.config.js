const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // allowCypressEnv: false,
  defaultCommandTimeout: 7000, //global timeout for all commands
  projectId: "cgotwm",
  reporter: 'cypress-mochawesome-reporter',
  video: true,
  reporterOptions: {
    reportDir: 'cypress/reports',
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    videoOnFailOnly: false,
    ignoreVideos: false,
  },
  env: {
    //correr desde la console con: npx cypress run --spec cypress\integration\examples\test10FRAMEWORK.js --headed --browser chrome --env url=https://rahulshettyacademy.com
    url: "https://rahulshettyacademy.com"
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

    },
    specPattern: "cypress/integration/examples/*.js",
    env: {
      url: "https://rahulshettyacademy.com"
    }
  },


});
