import { BASE_URL } from "../../url";
export const fetchSubcategories = async (page = 1, limit = 5) => {
	try {
		const response = await fetch(
			`${BASE_URL}api/v1/sub-category/get-all-subcategories?page=${page}&limit=${limit}`
		);
		const data = await response.json();
		return {
			subCategories: data.data.subCategories,
			totalPages: Math.ceil(data.data.total / limit),
			currentPage: page,
			total: data.data.total,
		};
	} catch (error) {
		console.error("Error fetching categories:", error);
		return {
			subCategories: [],
			totalPages: 0,
			currentPage: 1,
			total: 0,
		};
	}
};
