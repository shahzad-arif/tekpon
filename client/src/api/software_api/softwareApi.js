import axios from "axios";
import { BASE_URL } from "../../url";

const api = axios.create({
	baseURL: BASE_URL,
	headers: {
		"Content-Type": "application/json",
	},
});
export const fetchPopularSubcategories = async () => {
	try {
		const response = await api.get(
			"api/v1/sub-category/get-popular-subcategories"
		);
		if (response.data.success) {
			return response.data.data.subCategories;
		}
		throw new Error(response.data.message);
	} catch (error) {
		console.error("Error fetching popular subcategories:", error);
		throw error.response?.data?.message || error.message;
	}
};

export const fetchTopProducts = async (subcategoryId) => {
	try {
		const response = await api.get(
			`api/v1/software/${subcategoryId}/get-top-software`
		);
		if (response.data.success) {
			return response.data.data;
		}
		throw new Error(response.data.message);
	} catch (error) {
		console.error("Error fetching products:", error);
		throw error.response?.data?.message || error.message;
	}
};
