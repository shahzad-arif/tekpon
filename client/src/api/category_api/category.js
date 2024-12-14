import { BASE_URL } from "../../url";
export const fetchCategories = async () => {
	try {
		const response = await fetch(
			`${BASE_URL}api/v1/category/get-all-categories`
		);
		const data = await response.json();
		return data.data.categories;
	} catch (error) {
		console.error("Error fetching categories:", error);
		return [];
	}
};
