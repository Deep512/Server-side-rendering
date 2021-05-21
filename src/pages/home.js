import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div>
			<div className="checking">
				<Link to="/page1">
					<p>Page1</p>
				</Link>
				<Link to="/page2">
					<p>Page2</p>
				</Link>
				<Link to="/page3">
					<p>Page3</p>
				</Link>
			</div>
			This is Home
		</div>
	);
};

export default Home;
