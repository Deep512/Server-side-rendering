import React, { useState, useEffect } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

const Page3 = () => {
	const links = [
		{
			name: "Page1",
			link: "/page1",
		},
		{
			name: "Page2",
			link: "/page2",
		},
		{
			name: "Home",
			link: "/home",
		},
	];

	return (
		<div>
			{/* <Header links={links} /> */}
			<div className="content">
				<p style={{ textAlign: "center", fontWeight: "bold" }}>This is Page3</p>
				<div>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel
					risus condimentum, eleifend urna id, sollicitudin tellus. Duis
					scelerisque eget sem ac bibendum. Aenean et nunc nulla. Curabitur
					rutrum dolor et tincidunt consequat. Ut purus est, rhoncus et semper
					eget, viverra vel felis. Fusce libero felis, tempor sit amet placerat
					sed, bibendum ut metus. Fusce lacinia sodales elit, sit amet egestas
					mauris tristique sed. Donec congue finibus ante, nec ornare justo
					sollicitudin sed. Donec aliquam lorem tellus, at placerat massa
					aliquet ac. Ut ultricies ipsum eu lobortis feugiat. Ut vestibulum
					risus vel dolor varius porta. Curabitur scelerisque ultrices arcu, nec
					facilisis nibh sollicitudin et. Mauris quis elit sit amet metus
					lobortis feugiat. Fusce condimentum euismod est, vitae posuere turpis
					commodo bibendum. Nullam ut venenatis elit, at efficitur urna. Proin
					sollicitudin orci ut dolor consequat, vitae venenatis lectus ultrices.
					Integer eleifend, nunc a pulvinar ultrices, est ante congue nulla,
					vitae rhoncus urna libero quis erat. Fusce gravida est eu eros
					imperdiet, eget vulputate augue maximus. Maecenas efficitur, ex at
					ornare eleifend, odio ipsum porta diam, ac condimentum sapien purus
					quis justo. Aliquam interdum dapibus sapien, varius dapibus leo
					pharetra eu. Quisque luctus pretium aliquet. Nullam feugiat velit eget
					risus tristique pellentesque eu ac orci. Etiam placerat mauris sit
					amet nunc consequat tincidunt. Maecenas finibus condimentum lectus,
					nec tincidunt ipsum porta eu. Sed vitae massa eget arcu pharetra
					maximus in quis nulla. Phasellus et vulputate velit. In at
					sollicitudin tortor. Quisque cursus, sapien eu rhoncus tincidunt,
					risus enim mattis elit, ac condimentum mauris nisl sit amet odio.
					Quisque at risus non nisi egestas tristique. Etiam sagittis pulvinar
					facilisis. Curabitur pellentesque elit nec lectus aliquet pulvinar.
					Nullam gravida rutrum mauris. Cras non enim et quam scelerisque
					ultrices. Donec vitae enim nec metus mattis venenatis in eget massa.
					Nam ornare turpis at leo scelerisque, eget auctor nisl tempor.
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Page3;
