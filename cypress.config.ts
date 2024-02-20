import { defineConfig } from "cypress";
require('dotenv').config()

export default defineConfig({
    reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: "https://uitestingplayground.com",
    setupNodeEvents(on, config) {
        //reporter
        require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
    env:{
        // ...process.env,
        stage:'https://stage.pasv.us',
        prod:'https://coding.pasv.us',
        demoQA:'https://demoqa.com',
        herokuapp:'https://the-internet.herokuapp.com',
        playground:'https://play1.automationcamp.ir'
    }
  },
// viewportWidth: 1200,
// viewportHeight: 1400,

//runMode for terminal, openMode for browser window
// number of tries of test run and browswer open
 retries: {
    runMode: 3,
    openMode: 2,
  },
// reporter options
  reporterOptions: {
    charts: true,
    reportPageTitle: 'PASV Automation UI lessons',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
    video: true,
    screenshotOnRunFailure: true,
    defaultCommandTimeout:16_000,
});
