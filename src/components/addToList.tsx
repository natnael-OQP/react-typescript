const AddToList = () => {
	return (
		<form className="mt-20 max-w-sm mx-auto space-y-3 ">
			<input className="input" type="text" placeholder="name" />
			<input className="input" type="number" placeholder="Age" />
			<input className="input" type="number" placeholder="Age" />
			<textarea
				className="text-grey-darkest input  min-h-[100px]"
				placeholder="image Url"
			/>
			<button className="input bg-purple-800 text-gray-100 rounded-md mt-1">Add To List</button>
		</form>
	);
};

export default AddToList;
