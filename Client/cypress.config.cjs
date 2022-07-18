const { defineConfig } = require("cypress");
const webpackOptions = require("./webpack.config.js");
const path = require("path");
const { startDevServer } = require("@cypress/webpack-dev-server");

module.exports = defineConfig({
    component: {
        setupNodeEvents(on, config) {
            console.log('setupNodeEvents for components')

            // https://github.com/bahmutov/cypress-code-coverage
            require('@bahmutov/cypress-code-coverage/plugin')(on, config)

            return config
        },
	devServer(options) {
	    let webpackConfig = webpackOptions;

	    return startDevServer({ options, webpackConfig });
        }
    },
});
