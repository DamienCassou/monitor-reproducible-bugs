const path = require("path");
const webpackPreprocessor = require("@cypress/webpack-preprocessor");
const { startDevServer } = require("@cypress/webpack-dev-server");
const webpackOptions = require("../../webpack.config");

const setupWebpackForE2ETests = (on, config) => {
	on(
		"file:preprocessor",
		webpackPreprocessor({
			webpackOptions,
			watchOptions: webpackOptions.watchOptions,
		})
	);
};

const setupWebpackForComponentTests = (on, config) => {
	on("dev-server:start", (options) => {
		let webpackConfig = webpackOptions;

		webpackConfig.devServer = {
			contentBase: path.resolve(__dirname, "..", "..", ".."),
		};

		return startDevServer({ options, webpackConfig });
	});
};

const setupWebpack = (on, config) => {
	if (config.testingType === "component") {
		setupWebpackForComponentTests(on, config);
	} else {
		setupWebpackForE2ETests(on, config);
	}
};

module.exports = setupWebpack;
