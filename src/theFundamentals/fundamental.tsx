
type nameType = { name: string };

export const NameTag = ({ name }: { name: string }) => {
	return (
		<main className="w-96 h-60 shadow-md bg-gray-50 rounded-lg overflow-hidden fy mx-auto mt-20 cursor-pointer">
			<header className="flex items-center justify-center bg-purple-700 h-12 text-gray-50  font-medium ">
				<h1>Hello</h1>
				<p>My Name Is</p>
			</header>
			<section className="mt-16 text-center w-full h-full ">
				<p className="text-purple-900 font-semibold text-2xl capitalize">{name}</p>
			</section>
			<footer />
		</main>
	);
};
