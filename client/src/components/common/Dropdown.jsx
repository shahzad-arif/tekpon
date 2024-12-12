import React from "react";

const Dropdown = ({ title, items = [], isActive, onToggle }) => {
	return (
		<div className="relative bg-white shadow-md rounded-lg p-4 cursor-pointer">
			{/* Dropdown Header */}
			<div
				className="flex justify-between items-center text-lg font-semibold"
				onClick={onToggle} // Trigger parent-provided handler
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
					className={
						"absolute left-0 mt-2 bg-white shadow-lg rounded-lg border border-gray-200 p-4 w-full z-10"
					}
					style={{ zIndex: 50 }}
				>
					{items.map((item, index) => (
						<li
							key={index}
							className="text-gray-700 hover:text-blue-600 py-1 px-2 cursor-pointer"
						>
							{item}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Dropdown;
