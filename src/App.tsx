import React, { useState } from "react";
import List from "./components/List";
import { IState } from "./type";

function App() {
	const [peoples, setPeoples] = useState<IState["people"]>([
		{
			name: "CR 7",
			age: 36,
			url: "https://img.search.brave.com/fmp-0l5H75epio9o88LEFHrkRPWO0IqOhaRdboIEpxc/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4z/dWxYYU1FQVU5eHlO/OThNM0tRcER3SGFF/OCZwaWQ9QXBp",
			note: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt.",
		},
		{
			name: "model",
			age: 30,
			url: "https://cdn.adonismale.com/monthly_2020_01/76943665_3068282119865981_650996518003818092_n.jpg.c7448a33cadb1987a5692d881b7c87a8.jpg",
			note: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt.",
		},
	]);
	return (
		<div className="text-center mt-10">
			<h1 className="my-10 text-4xl font-semibold text-slate-800">peoples</h1>
			<List people={peoples} />
		</div>
	);
}

export default App;
