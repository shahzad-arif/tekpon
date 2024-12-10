import { Search } from "lucide-react";
import AnimatedText from "./AnimatedText";

const Banner = () => {
	return (
		<section className="bg-gradient-to-br from-white to-blue-50 min-h-screen flex flex-col justify-center items-center px-4 py-2 text-center">
			{/* Logo */}
			<div className="mb-4  self-center">
				<img
					src="/SoftwareCoverage.png"
					alt="SoftwareCoverage"
					className="h-28"
				/>
			</div>

			{/* Heading */}
			<h1
				className="text-5xl font-bold text-[#211F20] mb-6  text-center
           leading-tight "
			>
				Find the right software <AnimatedText /> <br />
				for your business
			</h1>

			{/* Subheading */}
			<p className="mt-4 text-3xl text-[#211F20]">
				Choose your software based on data summarized from{" "}
				<span className="text-custom-gradient font-medium">230,807,871</span>{" "}
				<span className="font-medium">reviews</span>
			</p>

			{/* Search Bar */}
			<div className="mt-10 w-full max-w-5xl">
				<div className="flex items-center bg-white shadow-md rounded-lg border border-gray-400 overflow-hidden">
					{/* Dropdown */}
					<div className="flex items-center color-custom-gradient rounded-lg text-white py-6 px-3 sm:px-6 cursor-pointer whitespace-nowrap">
						<span className="font-bold">All Options</span>
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

					{/* Input with Search Icon */}
					<div className="flex-grow flex items-center relative">
						<input
							type="text"
							placeholder="Search your Software, Insights, News, Deals, and more..."
							className="w-full px-2 sm:px-4 py-2 text-gray-700 outline-none text-sm sm:text-base truncate pr-12"
						/>
						<button className="absolute right-2 sm:right-4 text-gray-700">
							<Search className="h-6 w-6" />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
