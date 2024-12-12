import React, { useState, memo } from "react";
import Dropdown from "../common/Dropdown";
import { useSelector } from "react-redux";
const AllSoftwareCategories = () => {
	const [activeDropdown, setActiveDropdown] = useState(null);
	const { categories, subcategories, loading, error } = useSelector(
		(state) => state.category
	);

	const handleDropdownToggle = (index) => {
		setActiveDropdown((prevIndex) => (prevIndex === index ? null : index));
	};

	// Show loading state
	if (loading && categories.length === 0) {
		return (
			<section className="bg-gray-50 py-8">
				<h2 className="text-2xl font-bold text-center mb-8">
					Browse all Software Categories
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 md:px-10">
					{[1, 2, 3, 4].map((index) => (
						<div
							key={index}
							className="bg-white shadow-md rounded-lg p-4 animate-pulse"
						>
							<div className="h-8 bg-gray-200 rounded w-3/4"></div>
						</div>
					))}
				</div>
			</section>
		);
	}

	// Show error state
	if (error) {
		return (
			<section className="bg-gray-50 py-8">
				<h2 className="text-2xl font-bold text-center mb-8">
					Browse all Software Categories
				</h2>
				<div className="text-center text-red-600 py-4">
					Error loading categories. Please try again later.
				</div>
			</section>
		);
	}

	return (
		<section className="bg-gray-50 py-8">
			<h2 className="text-2xl font-bold text-center mb-8">
				Browse all Software Categories
			</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 md:px-10">
				{categories.map((category, index) => (
					<div key={category._id}>
						<Dropdown
							title={category.name}
							items={subcategories[category._id] || []}
							isActive={activeDropdown === index}
							onToggle={() => handleDropdownToggle(index)}
							loading={loading && activeDropdown === index}
						/>
					</div>
				))}
			</div>
		</section>
	);
};

export default memo(AllSoftwareCategories);
