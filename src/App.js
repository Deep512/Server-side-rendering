import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import Home from "./pages/home";
import NotFound from "./pages/not-found";
import Header from "./components/Header";

import { ROUTES } from "./constants/routes";

function App() {
	return (
		<div>
			{/* <Suspense fallback={<p>Loading...</p>}> */}
			<Header links={ROUTES} />
			<Switch>
				<Route path="/home" exact component={Home} />
				<Route path="/page1" exact component={Page1} />
				<Route path="/page2" exact component={Page2} />
				<Route path="/page3" exact component={Page3} />
				<Route component={NotFound} />
			</Switch>
			{/* </Suspense> */}
		</div>
	);
}

export default App;
