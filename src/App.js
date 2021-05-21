import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import Home from "./pages/home";

function App() {
	const handleButton = () => {
		console.log("new");
	};

	return (
		<div>
			{/* <Suspense fallback={<p>Loading...</p>}> */}
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/page1" exact component={Page1} />
				<Route path="/page2" exact component={Page2} />
				<Route path="/page3" exact component={Page3} />
			</Switch>
			{/* </Suspense> */}
			<h1>Title</h1>
			<p>Page</p>
			<button onClick={handleButton}>Console.log button</button>
		</div>
	);
}

export default App;
