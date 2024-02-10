import { defineConfig } from "cypress";
require('dotenv').config()

export default defineConfig({
  e2e: {
    baseUrl: "https://uitestingplayground.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env:{
        // ...process.env,
        stage:'https://stage.pasv.us',
        prod:'https://coding.pasv.us',
        demoQA:'https://demoqa.com',
        herokuapp:'https://the-internet.herokuapp.com',
    }
  },
 // viewportWidth: 1200,
 // viewportHeight: 1400,
 retries: {
    runMode: 2,
    openMode: 2,
  },
 // number of tries of test run and browswer open
  defaultCommandTimeout:16_000,
});
