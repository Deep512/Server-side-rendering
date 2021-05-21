import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Page2 = () => {
	return (
		<div>
			<div className="checking">
				<Link to="/page1">
					<p>Page1</p>
				</Link>
				<Link to="/page3">
					<p>Page3</p>
				</Link>
				<Link to="/">
					<p>Home</p>
				</Link>
			</div>
			This is Page2
		</div>
	);
};

export default Page2;
