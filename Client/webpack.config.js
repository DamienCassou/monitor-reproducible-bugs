const path = require("path");

const config = {
	entry: "./js/external_main.js",
	mode: "development",
	devtool: "eval-cheap-source-map",
	output: {
		filename: "external.latest.js",
		path: path.resolve(__dirname, "build"),
	},
	resolve: {
		modules: [path.resolve(__dirname, "js"), "node_modules"],
		alias: {
			klassified: path.resolve(
				__dirname,
				"node_modules/klassified/src/klassified"
			),
			widgetjs: path.resolve(
				__dirname,
				"node_modules/widgetjs/src/widgetjs"
			),
		},
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: [
							// we could optionally insert this plugin
							// only if the code coverage flag is on
							'istanbul',
						],
					},
				},
            },
        ]
	},
	watchOptions: {
		// Ignore files whose name starts with '.#' because they are
		// temporary lock files:
		ignored: ["/\\.#"],
	},
};

module.exports = config;
