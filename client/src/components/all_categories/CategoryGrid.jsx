// src/components/CategoryGrid.jsx
import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import { FilterIcon, Search, RotateCcwIcon } from "lucide-react";

// src/data.js
export const categories = [
	{ id: 1, name: "Accounting Practice Management", icon: "📊" },
	{ id: 2, name: "Accounting", icon: "📘" },
	{ id: 3, name: "Accounts Payable Automation", icon: "💰" },
	{ id: 4, name: "Affiliate", icon: "🔗" },
	{ id: 5, name: "Antivirus", icon: "🛡️" },
	{ id: 6, name: "Application Development", icon: "💻" },
	{ id: 7, name: "Architecture", icon: "🏛️" },
	{ id: 8, name: "Artificial Intelligence", icon: "🤖" },
	{ id: 9, name: "Audio Editing", icon: "🎵" },
	{ id: 10, name: "Background Check", icon: "🔍" },
	{ id: 11, name: "Business Intelligence", icon: "📈" },
	{ id: 12, name: "Cloud Storage", icon: "☁️" },
	{ id: 13, name: "CRM", icon: "🧩" },
	{ id: 14, name: "Data Management", icon: "📦" },
	{ id: 15, name: "Construction", icon: "🏗️" },
	{ id: 16, name: "Compliance", icon: "✅" },
	// Add more data as needed
];

const CategoryGrid = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [filteredData, setFilteredData] = useState(categories);
	const [searchQuery, setSearchQuery] = useState("");
	const [sortOrder, setSortOrder] = useState("A-Z");
	const itemsPerPage = 12;

	// Filter and sort logic
	useEffect(() => {
		let result = categories;

		// Filter by search query
		if (searchQuery) {
			result = result.filter((category) =>
				category.name.toLowerCase().includes(searchQuery.toLowerCase())
			);
		}

		// Sort the results
		if (sortOrder === "A-Z") {
			result = result.sort((a, b) => a.name.localeCompare(b.name));
		} else if (sortOrder === "Z-A") {
			result = result.sort((a, b) => b.name.localeCompare(a.name));
		}

		setFilteredData(result);
		setCurrentPage(1); // Reset to first page
	}, [searchQuery, sortOrder]);

	// Paginated data
	const startIndex = (currentPage - 1) * itemsPerPage;
	const paginatedData = filteredData.slice(
		startIndex,
		startIndex + itemsPerPage
	);
	const totalPages = Math.ceil(filteredData.length / itemsPerPage);

	// Reset Filters
	const handleReset = () => {
		setSearchQuery("");
		setSortOrder("A-Z");
	};

	return (
		<div>
			{/* Filter Bar */}
			<div className="flex flex-col md:flex-row justify-between items-center mb-6 ">
				{/* Filter Info */}
				<div className="flex items-center gap-2 text-black">
					<span>
						<FilterIcon />
					</span>
					<p className="text-md font-medium">Filter Categories</p>
				</div>

				{/* Sort Dropdown */}
				<div className="flex items-center gap-2">
					<span className="text-black font-medium drop-shadow-lg">Sort by</span>
					<select
						value={sortOrder}
						onChange={(e) => setSortOrder(e.target.value)}
						className="p-2 border rounded text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
					>
						<option value="A-Z">A to Z (default)</option>
						<option value="Z-A">Z to A</option>
					</select>
				</div>
			</div>

			{/* Search and Reset */}
			<div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
				{/* Search Bar */}
				<div className="relative w-full drop-shadow-lg ">
					<input
						type="text"
						placeholder="Filter by Keyword"
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						className="w-full p-3 pl-10 border border-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
					/>
					<span className="absolute left-3 top-3 text-gray-400">
						<Search />
					</span>
				</div>

				{/* Reset Button */}
			</div>
			<div className="drop-shadow-lg">
				<button
					onClick={handleReset}
					className="flex items-center gap-2 px-4 py-2 text-black bg-gray-200 rounded-full hover:bg-gray-300 transition whitespace-nowrap"
				>
					<span>
						<RotateCcwIcon />
					</span>
					<span>Reset All</span>
				</button>
			</div>

			{/* Title */}
			<h1 className="text-2xl font-bold text-center mb-6 text-gray-700">
				Categories
			</h1>

			{/* Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{paginatedData.length > 0 ? (
					paginatedData.map((category) => (
						<div
							key={category.id}
							className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
						>
							<span className="text-4xl mb-2">{category.icon}</span>
							<p className="text-gray-700 font-medium">{category.name}</p>
						</div>
					))
				) : (
					<p className="text-gray-500 col-span-full text-center">
						No categories found.
					</p>
				)}
			</div>

			{/* Pagination */}
			{filteredData.length > itemsPerPage && (
				<Pagination
					currentPage={currentPage}
					totalPages={totalPages}
					onPageChange={setCurrentPage}
				/>
			)}
		</div>
	);
};

export default CategoryGrid;
