const { defineConfig } = require("cypress");
const webpackOptions = require("./webpack.config.js");
const path = require("path");
const { startDevServer } = require("@cypress/webpack-dev-server");

module.exports = defineConfig({
    component: {
	devServer(options) {
	    let webpackConfig = webpackOptions;

	    return startDevServer({ options, webpackConfig });
        }
    },
});
