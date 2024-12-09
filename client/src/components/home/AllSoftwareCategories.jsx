import React, { useState } from "react";
import Dropdown from "../common/Dropdown"; // Import the reusable Dropdown component
import { categories } from "../../text/homePageText/homeText";

const AllSoftwareCategories = () => {
	const [activeDropdown, setActiveDropdown] = useState(null);

	const handleDropdownToggle = (index) => {
		// Toggle the clicked dropdown; close others
		setActiveDropdown((prevIndex) => (prevIndex === index ? null : index));
	};

	return (
		<section className="bg-gray-50 py-10">
			<h2 className="text-2xl font-bold text-center mb-8">
				Browse all Software Categories
			</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2  gap-6 px-4 md:px-10">
				{categories.map((category, index) => (
					<div key={index}>
						<Dropdown
							title={category.title}
							items={category.items}
							isActive={activeDropdown === index}
							onToggle={() => handleDropdownToggle(index)}
						/>
					</div>
				))}
			</div>
		</section>
	);
};

export default AllSoftwareCategories;
