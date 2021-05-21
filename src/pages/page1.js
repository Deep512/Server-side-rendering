import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Page1 = () => {
	return (
		<div>
			<div className="checking">
				<Link to="/page2">
					<p>Page2</p>
				</Link>
				<Link to="/page3">
					<p>Page3</p>
				</Link>
				<Link to="/">
					<p>Home</p>
				</Link>
			</div>
			This is Page1
		</div>
	);
};

export default Page1;
