const path = require("path");

module.exports = {
	mode: "production",
	target: "node",
	entry: "./src/index.js",
	output: {
		filename: "client_bundle.js",
		path: path.resolve(__dirname, "build/public"),
		publicPath: "/build/public",
	},
	module: {
		rules: [
			{
				test: /\.(js)$/,
				loader: "babel-loader",
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
		],
	},
};
