import React from "react";

const Banner = () => {
	return (
		<section className="bg-gradient-to-br from-white to-blue-50 min-h-screen flex flex-col justify-center items-center px-4 py-2 text-center">
			{/* Logo */}
			<div className="mb-6">
				<img src="/SoftwareCoverage.webp" alt="SoftwareCoverage" className="h-28" />
			</div>

			{/* Heading */}
			<h1
				className="text-5xl font-bold text-[#211F20]
           leading-tight"
			>
				Find the right software <span className="text-custom-gradient">deals</span>{" "}
				<br />
				for your business
			</h1>

			{/* Subheading */}
			<p className="mt-4 text-3xl text-[#211F20]">
				Choose your software based on data summarized from{" "}
				<span className="text-custom-gradient font-medium">230,807,871</span>{" "}
				<span className="font-medium">reviews</span>
			</p>

			{/* Search Bar */}
			<div className="mt-10 w-full max-w-5xl flex items-center bg-white shadow-md rounded-lg border border-gray-400">
				{/* Dropdown */}
				<div className="flex items-center color-custom-gradient rounded-lg text-white py-6 px-6 cursor-pointer">
					<span className= "font-bold">All Options</span>
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
				<button className="px-4 text-gray-700">
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
