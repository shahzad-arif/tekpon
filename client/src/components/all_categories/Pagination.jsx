// src/components/Pagination.jsx
import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
	return (
		<div className="flex justify-center items-center gap-4 my-6">
			<button
				className={`px-4 py-2 bg-blue-500 text-white rounded ${
					currentPage === 1 && "opacity-50 cursor-not-allowed"
				}`}
				disabled={currentPage === 1}
				onClick={() => onPageChange(currentPage - 1)}
			>
				Prev
			</button>
			<span className="text-gray-600">
				Page {currentPage} of {totalPages}
			</span>
			<button
				className={`px-4 py-2 bg-blue-500 text-white rounded ${
					currentPage === totalPages && "opacity-50 cursor-not-allowed"
				}`}
				disabled={currentPage === totalPages}
				onClick={() => onPageChange(currentPage + 1)}
			>
				Next
			</button>
		</div>
	);
};

export default Pagination;
