import React, { useEffect } from "react";

export default function NotFound() {
	useEffect(() => {
		if (document !== undefined) document.title = "Not Found!";
	}, []);

	return <div>Not Found</div>;
}
