const path = require("path");

const config = {
	entry: "./js/external_main.js",
	mode: "development",
	devtool: "cheap-eval-source-map",
	output: {
		filename: "external.latest.js",
		path: path.resolve(__dirname, "build"),
	},
	resolve: {
		modules: [path.resolve(__dirname, "js"), "node_modules"],
		alias: {
			klassified: path.resolve(
				__dirname,
				"node_modules/klassified/dist/klassified"
			),
			widgetjs: path.resolve(
				__dirname,
				"node_modules/widgetjs/src/widgetjs"
			),
		},
	},
	watchOptions: {
		// Ignore files whose name starts with '.#' because they are
		// temporary lock files:
		ignored: [new RegExp("/\\.#")],
	},
};

module.exports = config;
