const path = require("path");
module.exports = {
	mode: "development",
	target: "web",
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
				exclude: /(node_modules)/,
				loader: "babel-loader",
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(jpg|png)$/i,
				loader: "file-loader",
				options: {
					name: "[name].[ext]",
					outputPath: "images/",
					publicPath: "images/",
				},
			},
		],
	},
};
