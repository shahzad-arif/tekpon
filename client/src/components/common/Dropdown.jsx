import React, { memo } from "react";

const Dropdown = memo(({ title, items = [], isActive, onToggle, loading }) => {
	return (
		<div className="relative bg-white shadow-md rounded-lg p-4 cursor-pointer">
			{/* Dropdown Header */}
			<div
				className="flex justify-between items-center text-lg font-semibold"
				onClick={onToggle}
			>
				<span>{title}</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={2}
					stroke="currentColor"
					className={`w-5 h-5 transform transition-transform ${
						isActive ? "rotate-180" : ""
					}`}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M19 9l-7 7-7-7"
					/>
				</svg>
			</div>

			{/* Dropdown Content */}
			{isActive && (
				<ul
					className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg border border-gray-200 p-4 w-full z-10"
					style={{ zIndex: 50 }}
				>
					{loading ? (
						<li className="text-gray-500 py-1 px-2">
							Loading subcategories...
						</li>
					) : items.length === 0 ? (
						<li className="text-gray-500 py-1 px-2">No subcategories found</li>
					) : (
						items.map((item) => (
							<li
								key={item._id || item.slug}
								className="text-gray-700 hover:text-blue-600 py-1 px-2 cursor-pointer"
							>
								<a href={`/category/${item.slug}`} className="block w-full">
									{item.name}
								</a>
							</li>
						))
					)}
				</ul>
			)}
		</div>
	);
});

export default Dropdown;
