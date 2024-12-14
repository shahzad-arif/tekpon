import React, { useState, useCallback, useEffect } from "react";
import { Search } from "lucide-react";
import { debounce } from "lodash";
import axios from "axios";
import NavLink from "./NavLink";
import { BASE_URL } from "../../../../url";
import { ChevronDown } from "lucide-react";

const SearchBar = () => {
	const [query, setQuery] = useState("");
	const [searchResults, setSearchResults] = useState({
		subCategories: [],
		softwares: [],
	});
	const [isLoading, setIsLoading] = useState(false);
	const [isDropdownVisible, setIsDropdownVisible] = useState(false);

	// Debounced search function
	const debouncedSearch = useCallback(
		debounce(async (searchQuery) => {
			if (searchQuery.length < 2) {
				setSearchResults({ subCategories: [], softwares: [] });
				setIsLoading(false);
				return;
			}

			try {
				setIsLoading(true);
				const response = await axios.get(
					`${BASE_URL}api/v1/search/nav-search`,
					{
						params: { query: searchQuery },
						maxRedirects: 5,
					}
				);

				if (response.data.success) {
					setSearchResults(response.data.data);
				}
			} catch (error) {
				console.error("Search error:", error);
				setSearchResults({ subCategories: [], softwares: [] });
			} finally {
				setIsLoading(false);
			}
		}, 300),
		[]
	);

	// Handle input change
	const handleInputChange = (e) => {
		const searchQuery = e.target.value;
		setQuery(searchQuery);
		debouncedSearch(searchQuery);
		setIsDropdownVisible(true);
	};

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event) => {
			const searchContainer = document.getElementById("search-container");
			if (searchContainer && !searchContainer.contains(event.target)) {
				setIsDropdownVisible(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div id="search-container" className="relative w-64">
			<div className="relative">
				<input
					type="text"
					placeholder="Search ..."
					className="w-64 px-4 py-2.5 rounded-xl border border-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder:text-gray-500 text-lg"
					aria-label="Search"
					value={query}
					onChange={handleInputChange}
					onFocus={() => setIsDropdownVisible(true)}
				/>
				<Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
			</div>

			{isDropdownVisible && query.length >= 2 && (
				<div className="absolute top-full left-0 w-full mt-2 bg-transparent   border-gray-200 rounded-lg  z-50 max-h-[300px] overflow-y-auto">
					{isLoading ? (
						<div className="p-4 text-center text-black shadow-lg bg-white">
							Searching...
						</div>
					) : (
						<>
							{searchResults.subCategories.length > 0 && (
								<div className="p-2 shadow-sm rounded-lg  bg-white mb-2 border border-gray-200">
									<div className="flex justify-between">
										<p className="text-sm  text-teal-600 font-semibold  px-2 mb-2">
											Categories
										</p>
										<ChevronDown className="text-teal-600  " />
									</div>

									{searchResults.subCategories.map((subCategory) => (
										<NavLink
											key={subCategory._id}
											href={`/subcategories/${subCategory._id}`}
											className="block px-3 py-2 hover:bg-gray-100 rounded-md text-sm text-gray-700"
										>
											{subCategory.name}
										</NavLink>
									))}
								</div>
							)}

							{searchResults.softwares.length > 0 && (
								<div className="p-2 shadow-lg rounded-lg bg-white  mb-2  border border-gray-200">
									<div className="flex justify-between">
										<p className="text-sm font-semibold text-teal-600 px-2 mb-2">
											Software
										</p>
										<ChevronDown className="text-teal-600  " />
									</div>
									{searchResults.softwares.map((software) => (
										<NavLink
											key={software._id}
											href={`/softwares/${software._id}`}
											className="block px-3 py-2 hover:bg-gray-100 rounded-md text-sm text-gray-700"
										>
											{software.name}
										</NavLink>
									))}
								</div>
							)}

							{searchResults.subCategories.length === 0 &&
								searchResults.softwares.length === 0 && (
									<div className="p-4 text-center shadow-lg  text-black bg-white">
										No results found
									</div>
								)}
						</>
					)}
				</div>
			)}
		</div>
	);
};

export default SearchBar;
