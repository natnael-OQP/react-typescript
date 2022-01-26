import { useState } from "react";
import { IState } from "../type";

export interface IProps {
	peoples: IState["people"];
	setPeoples: React.Dispatch<
		React.SetStateAction<
			{
				name: string;
				age: number;
				url: string;
				note?: string | undefined;
			}[]
		>
	>;
}

const AddToList: React.FC<IProps> = ({ peoples, setPeoples }) => {
	const [input, setInput] = useState({
		name: "",
		age: 0,
		url: "",
		note: "",
	});

	const handelChange: React.ChangeEventHandler<
		HTMLInputElement | HTMLTextAreaElement
	> = (e): void => {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
	};
	const handelSubmit = (): void => {
		// e.preventDefault();
		if (!input.name || !input.age || !input.url) {
			return;
		}
		setPeoples([
			...peoples,
			{
				name: input.name,
				age: input.age,
				url: input.url,
			},
		]);
		setInput({ name: "", age: 0, url: "", note: "" });
	};

	return (
		<div className="mt-20 max-w-sm mx-auto space-y-3 ">
			<input
				className="input"
				type="text"
				placeholder="name"
				name="name"
				value={input.name}
				onChange={handelChange}
			/>
			<input
				className="input"
				type="number"
				placeholder="Age"
				name="age"
				value={input.age}
				onChange={handelChange}
			/>
			<input
				className="input"
				type="text"
				placeholder="image URL"
				name="url"
				value={input.url}
				onChange={handelChange}
			/>
			<textarea
				className="text-grey-darkest input  min-h-[100px]"
				placeholder="Note"
				value={input.note}
				name="note"
				onChange={handelChange}
			/>
			<button
				onClick={handelSubmit}
				className="input bg-purple-800 text-gray-100 rounded-md mt-1"
			>
				Add To List
			</button>
		</div>
	);
};

export default AddToList;
