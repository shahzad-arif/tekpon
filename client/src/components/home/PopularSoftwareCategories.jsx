import React, { useState } from "react";
import SoftwareCard from "../cards/SoftwareCard";
import freshdeskIcon from "/Freshdesk-favicon.webp";

const PopularSoftwareCategories = () => {
	const [activeIndex, setActiveIndex] = useState(null);
	const getCategoryName = () => {
		return activeIndex !== null
			? categorySidebarItems[activeIndex]
			: "Help Desk"; // Default if no category is selected
	};

	const categories = [
		{
			icon: freshdeskIcon,
			title: "Freshdesk",
			tekponScore: 9.2,
		},
		{
			icon: freshdeskIcon,
			title: "Freshdesk",
			tekponScore: 9.1,
		},
		{
			icon: freshdeskIcon,
			title: "Freshdesk",
			tekponScore: 9.0,
		},
		{
			icon: freshdeskIcon,
			title: "Freshdesk",
			tekponScore: 6,
		},
		{
			icon: freshdeskIcon,
			title: "Freshdesk",
			tekponScore: 9.2,
		},
		{
			icon: freshdeskIcon,
			title: "Freshdesk",
			tekponScore: 9.1,
		},
	];

	const categorySidebarItems = [
		"CRM",
		"Field Service Management",
		"Help Desk",
		"Inventory Management",
		"Landing Page",
		"Payroll",
		"Project Management",
		"Subscription Management",
	];

	return (
		<div className="bg-gray-100 py-8 md:py-12">
			<div className="container mx-auto px-4 md:px-6 lg:px-20">
				<h2 className="text-2xl md:text-4xl font-bold mb-4 text-center">
					Popular Software Categories
				</h2>
				<h2 className="text-center mb-8 md:mb-10 text-base md:text-xl text-gray-600">
					Discover the best software options tailored to your business needs.
				</h2>
				<div className="flex flex-col lg:flex-row items-start justify-center space-y-6 lg:space-y-0 lg:space-x-6">
					{/* Sidebar */}
					<div className="w-full lg:w-1/5 bg-white rounded-lg shadow-md">
						<ul className="grid grid-cols-2 lg:grid-cols-1 gap-2 p-4">
							{categorySidebarItems.map((item, index) => (
								<li
									key={index}
									onClick={() => setActiveIndex(index)}
									className={`font-bold text-sm md:text-xl cursor-pointer py-2 px-4 rounded-lg text-center lg:text-left ${
										activeIndex === index
											? "color-custom-gradient text-white"
											: "text-gray-900 hover:bg-gray-100"
									}`}
								>
									{item}
								</li>
							))}
						</ul>
					</div>

					{/* Grid */}
					<div className="w-full lg:w-4/5">
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
							{categories.map((category, index) => (
								<SoftwareCard
									key={index}
									icon={category.icon}
									title={category.title}
									tekponScore={category.tekponScore}
									activeIndex={activeIndex}
									index={index}
								/>
							))}
						</div>
						<div className="text-center mt-8 md:mt-14">
							<a
								href="#"
								className="text-purple-600 font-medium text-base md:text-xl hover:text-purple-800 underline"
							>
								See All {getCategoryName()} Software
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PopularSoftwareCategories;
