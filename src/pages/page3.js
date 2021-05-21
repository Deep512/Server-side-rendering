import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Page3 = () => {
	return (
		<div>
			<div className="checking">
				<Link to="/page1">
					<p>Page1</p>
				</Link>
				<Link to="/page2">
					<p>Page2</p>
				</Link>
				<Link to="/">
					<p>Home</p>
				</Link>
			</div>
			This is Page3
		</div>
	);
};

export default Page3;
