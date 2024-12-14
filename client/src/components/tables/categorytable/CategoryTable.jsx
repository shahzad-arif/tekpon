import React, { useState, useEffect } from "react";
import { Pen, Trash2 } from "lucide-react";
import { fetchCategories } from "../../../api/category_api/category";
import TableShimmer from "../../common/TableShimmer";
import CreateCategoryModal from "../../modals/category_modal/CreateCategoryModal";
import UpdateCategoryModal from "../../modals/category_modal/UpdateCategoryModal";

const CategoryTable = () => {
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(true);
	const [isAddModalOpen, setIsAddModalOpen] = useState(false);
	const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState(null);

	useEffect(() => {
		const getCategories = async () => {
			setLoading(true);
			try {
				const data = await fetchCategories();
				setCategories(data);
			} catch (error) {
				console.error("Error fetching categories:", error);
			} finally {
				setLoading(false);
			}
		};

		getCategories();
	}, []);

	if (loading) {
		return <TableShimmer />;
	}

	const handleSubmit = async (data) => {
		try {
			// Placeholder for create category API call
			console.log("Creating category:", data);
			// Assuming the API returns the new category
			// const newCategory = await createCategory(data);
			// setCategories([...categories, newCategory]);
			setIsAddModalOpen(false);
		} catch (error) {
			console.error("Error creating category:", error);
		}
	};

	const handleUpdateCategory = async (updatedData) => {
		try {
			// Placeholder for update category API call
			console.log("Updating category:", updatedData);
			// Assuming the API returns the updated category
			// const updatedCategory = await updateCategory(selectedCategory._id, updatedData);
			// setCategories(categories.map(cat =>
			//   cat._id === updatedCategory._id ? updatedCategory : cat
			// ));
			setIsUpdateModalOpen(false);
		} catch (error) {
			console.error("Error updating category:", error);
		}
	};

	const openUpdateModal = (category) => {
		setSelectedCategory(category);
		setIsUpdateModalOpen(true);
	};

	const handleDeleteCategory = async (categoryId) => {
		try {
			// Placeholder for delete category API call
			console.log("Deleting category:", categoryId);
			// await deleteCategory(categoryId);
			// setCategories(categories.filter(cat => cat._id !== categoryId));
		} catch (error) {
			console.error("Error deleting category:", error);
		}
	};

	return (
		<div className="w-full bg-white rounded-lg shadow-sm">
			<div className="flex justify-between items-center p-6 border-b border-gray-100">
				<h2 className="text-2xl font-semibold text-gray-800">Categories</h2>
				<button
					onClick={() => setIsAddModalOpen(true)}
					className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 
                     transition-colors duration-200 text-sm font-medium"
				>
					+ Add Category
				</button>
			</div>

			<div className="p-6 overflow-x-auto">
				<table className="w-full">
					<thead>
						<tr className="bg-gray-50">
							<th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
								Category Name
							</th>

							<th className="px-6 py-3 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
								Actions
							</th>
						</tr>
					</thead>
					<tbody className="bg-white divide-y divide-gray-200">
						{categories.map((category) => (
							<tr
								key={category._id}
								className="hover:bg-gray-50 transition-colors duration-200"
							>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
									{category.name}
								</td>

								<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
									<button
										onClick={() => openUpdateModal(category)}
										className="text-blue-600 hover:text-blue-900 mr-3"
										aria-label="Edit category"
									>
										<Pen size={18} />
									</button>
									<button
										onClick={() => handleDeleteCategory(category._id)}
										className="text-red-600 hover:text-red-900"
										aria-label="Delete category"
									>
										<Trash2 size={18} />
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{/* Create Category Modal */}
			<CreateCategoryModal
				isOpen={isAddModalOpen}
				onClose={() => setIsAddModalOpen(false)}
				onSubmit={handleSubmit}
			/>

			{/* Update Category Modal */}
			{selectedCategory && (
				<UpdateCategoryModal
					isOpen={isUpdateModalOpen}
					onClose={() => setIsUpdateModalOpen(false)}
					onSubmit={handleUpdateCategory}
					initialData={{
						name: selectedCategory.name,
						description: selectedCategory.description || "",
					}}
				/>
			)}
		</div>
	);
};

export default CategoryTable;
