import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";

import App from "./src/App";

const app = express();

app.use(express.static("build/public"));

app.get("*", (req, res) => {
	const context = {};
	const app = renderToString(
		<StaticRouter location={req.url} context={context}>
			<App />
		</StaticRouter>
	);
	res.send(`
        <html>
            <head>
                <title>Server Side Rendering</title>
            </head>
            <body>
                <div id="root">${app}</div>
                <script src="client_bundle.js"></script>
                <script src="/reload/reload.js"></script>
            </body>
        </html>
    `);
});

app.listen(5000, () => {
	console.log("Listening on port 5000");
});
