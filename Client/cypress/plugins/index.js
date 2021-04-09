const setupWebpack = require("./setupWebpack");

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
module.exports = (on, config) => {
	setupWebpack(on, config);

	return config;
};
