const path = require("path");
var nodeExternals = require("webpack-node-externals");

module.exports = {
	mode: "development",
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
			{
				test: /\.s?css$/,
				use: ["style-loader", "css-loader"],
			},
			// {
			// 	test: /\.(jpe?g|png|gif|svg)$/i,
			// 	loader: "file-loader",
			// 	options: {
			// 		name: "[name].[hash:6].[ext]",
			// 		outputPath: "images/",
			// 		publicPath: "images/",
			// 		emitFile: true,
			// 		esModule: false,
			// 	},
			// },
		],
	},
	externals: [nodeExternals()],
};
