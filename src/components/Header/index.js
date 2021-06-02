import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Header = ({ links }) => {
	return (
		<header>
			{/* <img id="logo" src="../../images/logo.png" /> */}
			{links.map(({ name, link }, idx) => (
				<NavLink
					key={idx}
					to={link}
					activeStyle={{ fontWeight: "bold" }}
					style={{ marginTop: "10px" }}
				>
					{name}
				</NavLink>
			))}
		</header>
	);
};

export default Header;
