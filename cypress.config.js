const { defineConfig } = require("cypress");

module.exports = defineConfig({
    // base URL - in the script we than write only the endpoint  

  e2e: {
    baseUrl: 'https://rahulshettyacademy.com',

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

});
