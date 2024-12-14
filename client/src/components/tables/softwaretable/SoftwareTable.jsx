import React from "react";

const SoftwareTable = () => {
	return (
		<>
			<div className="w-full bg-white rounded-lg shadow-sm">
				<div className="flex justify-between items-center p-6 border-b border-gray-100">
					<div>
						<h2 className="text-2xl font-semibold text-gray-800">Product</h2>
						{/* <p className="text-sm text-gray-600 mt-1">
						Total {total} subcategories
					</p> */}
					</div>
					<button
						className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 
                        transition-colors duration-200 text-sm font-medium"
					>
						+ Add Product
					</button>
				</div>

				<div className="p-6 overflow-x-auto">
					<table className="w-full">
						<thead>
							<tr className="bg-gray-50">
								<th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Product Name
								</th>
								<th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Product Description
								</th>
								<th className="px-6 py-3 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Actions
								</th>
							</tr>
						</thead>
						<tbody className="bg-white divide-y divide-gray-200">
							{/* {subCategories.map((subCategory) => (
							<tr
								key={subCategory._id}
								className="hover:bg-gray-50 transition-colors duration-200"
							>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
									{subCategory.name}
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
									{subCategory.description}
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
									<button
										className="text-blue-600 hover:text-blue-900 mr-3"
										aria-label="Edit subcategory"
									>
										<Pen size={18} />
									</button>
									<button
										className="text-red-600 hover:text-red-900"
										aria-label="Delete subcategory"
									>
										<Trash2 size={18} />
									</button>
								</td>
							</tr>
						))} */}
						</tbody>
					</table>
				</div>

				{/* {totalPages > 1 && (
			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				onPageChange={handlePageChange}
			/>
		)} */}
			</div>
			;
		</>
	);
};

export default SoftwareTable;
