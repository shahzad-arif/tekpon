import React from "react";

const Banner = () => {
	return (
		<section className="bg-gradient-to-br from-white to-blue-50 min-h-screen flex flex-col justify-center items-center px-4 py-2 text-center">
			{/* Logo */}
			<div className="mb-6">
				<img src="/tekpon-r.svg" alt="Tekpon" className="h-18" />
			</div>

			{/* Heading */}
			<h1
				className="text-6xl font-bold text-[#211F20]
           leading-tight"
			>
				Find the right software <span className="text-[#4735AF]">deals</span>{" "}
				<br />
				for your business
			</h1>

			{/* Subheading */}
			<p className="mt-4 text-3xl text-[#211F20]">
				Choose your software based on data summarized from{" "}
				<span className="text-[#4735AF] font-medium">230,807,871</span>{" "}
				<span className="font-medium">reviews</span>
			</p>

			{/* Search Bar */}
			<div className="mt-10 w-full max-w-5xl flex items-center bg-white shadow-md rounded-lg py-4 border-black">
				{/* Dropdown */}
				<div className="flex items-center bg-indigo-600 text-white px-4 py-2 cursor-pointer">
					<span>All Options</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={2}
						stroke="currentColor"
						className="ml-2 h-4 w-4"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M19 9l-7 7-7-7"
						/>
					</svg>
				</div>
				{/* Input */}
				<input
					type="text"
					placeholder="Search your Software, Insights, News, Deals, and more..."
					className="flex-grow px-4 py-2 text-gray-700 outline-none"
				/>
				{/* Search Icon */}
				<button className="px-4 text-gray-500">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={2}
						stroke="currentColor"
						className="h-6 w-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
				</button>
			</div>
		</section>
	);
};

export default Banner;
