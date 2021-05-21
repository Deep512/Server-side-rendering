const path = require("path");
var nodeExternals = require("webpack-node-externals");

module.exports = {
	mode: "production",
	target: "node",
	entry: "./server.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "build"),
		publicPath: "/build",
	},
	module: {
		rules: [
			{
				test: /\.(js)$/,
				loader: "babel-loader",
			},
		],
	},
	externals: [nodeExternals()],
};
