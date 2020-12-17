const path = require("path")

module.exports = {
	entry: {
		empty: "./empty.js",
		imported: "./imported.js",
	},
	output: {
		filename: "[name]-bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
}