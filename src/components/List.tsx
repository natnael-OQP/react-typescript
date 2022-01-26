import React from "react";
import { IState } from "../type";

const List: React.FC<IState> = ({ people }) => {
	const RenderList = (): JSX.Element => {
		return (
			<>
				{people?.map((person) => (
					<li className="my-2 shadow-md rounded-md bg-gray-100 p-2 border border-gray-900 flex items-center justify-between max-w-3xl mx-auto text-gray-600 font-semibold ">
						<div className="flex items-center space-x-3">
							<img
								className="w-14 h-14 rounded-full"
								src={person.url}
								alt={person.name}
							/>
							<h5>{person.name}</h5>
						</div>
						<h4>{person.age} Years Old</h4>
						<p>{person.note}</p>
					</li>
				))}
			</>
		);
	};
	return (
		<ul>
			<RenderList />
		</ul>
	);
};

export default List;