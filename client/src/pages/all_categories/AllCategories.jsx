import React from "react";
import TopSection from "../../components/all_categories/TopSection";
import CategoryGrid from "../../components/all_categories/CategoryGrid";

const AllCategories = () => {
	return (
		<>
			<div className="w-full px-40 py-10">
				<TopSection />
				<CategoryGrid />
			</div>
		</>
	);
};

export default AllCategories;
