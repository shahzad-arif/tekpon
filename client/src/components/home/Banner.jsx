import React, { useState, useCallback, useEffect } from "react";
import { Search, X } from "lucide-react";
import { debounce } from "lodash";
import axios from "axios";

const Banner = () => {
	const [query, setQuery] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const [isDropdownVisible, setIsDropdownVisible] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const debouncedSearch = useCallback(
		debounce(async (searchQuery) => {
			if (searchQuery.length < 2) {
				setSearchResults([]);
				setIsLoading(false);
				return;
			}

			try {
				setIsLoading(true);
				const response = await axios.get(
					`https://softwarecoverage.vercel.app/api/v1/search/banner-search`,
					{
						params: { query: searchQuery },
					}
				);

				if (response.data.success) {
					setSearchResults(response.data.data);
				}
			} catch (error) {
				console.error("Search error:", error);
				setSearchResults([]);
			} finally {
				setIsLoading(false);
			}
		}, 300),
		[]
	);

	const handleInputChange = (e) => {
		const searchQuery = e.target.value;
		setQuery(searchQuery);
		debouncedSearch(searchQuery);
		setIsDropdownVisible(true);
	};

	const clearSearch = () => {
		setQuery("");
		setSearchResults([]);
		setIsDropdownVisible(false);
	};

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
		<section className="bg-gradient-to-br from-white to-blue-50 min-h-screen flex flex-col justify-center items-center px-4 py-2 text-center">
			<div className="mb-4 self-center">
				<img
					src="/SoftwareCoverage.png"
					alt="SoftwareCoverage"
					className="h-28"
				/>
			</div>

			<h1 className="text-5xl font-bold text-[#211F20] mb-6 text-center leading-tight">
				<span className="inline-block">Find the right software</span>
				<br />
				for your business
			</h1>

			<p className="mt-4 text-3xl text-[#211F20]">
				Choose your software based on data summarized from{" "}
				<span className="text-custom-gradient font-medium">230,807,871</span>{" "}
				<span className="font-medium">reviews</span>
			</p>

			<div className="mt-10 w-full max-w-4xl relative" id="search-container">
				<div className="flex items-center bg-white shadow-md rounded-lg border border-gray-200 overflow-hidden">
					<div className="flex items-center bg-blue-600 text-white py-4 px-4 sm:px-6 cursor-pointer">
						<span className="font-medium text-sm sm:text-base">Search All</span>
					</div>

					<div className="flex-grow flex items-center relative">
						<input
							type="text"
							placeholder="Search your Software, Insights, News, Deals, and more..."
							className="w-full px-2 sm:px-4 py-3 text-gray-700 outline-none text-sm sm:text-base"
							value={query}
							onChange={handleInputChange}
							onFocus={() => setIsDropdownVisible(true)}
						/>
						{query && (
							<button
								onClick={clearSearch}
								className="p-2 hover:text-gray-600 text-gray-400"
							>
								<X className="h-5 w-5" />
							</button>
						)}
						<button className="px-4 text-gray-400 hover:text-gray-600">
							<Search className="h-5 w-5" />
						</button>
					</div>
				</div>

				{isDropdownVisible && query.length >= 2 && (
					<div
						style={{ marginLeft: "116px" }} // Width of All Options button
						className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-[80vh] overflow-y-auto w-[calc(100%-116px)]"
					>
						{isLoading ? (
							<div className="p-4 text-center text-gray-500">Searching...</div>
						) : (
							<div className="p-6">
								<h2 className="text-xl font-semibold mb-4 text-left">
									Softwares
								</h2>
								<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
									{searchResults.map((software) => (
										<div
											key={software._id}
											className="flex items-center p-4 bg-white border border-gray-100 rounded-lg drop-shadow-lg hover:shadow-2xl transition-shadow duration-200 cursor-pointer"
										>
											<div className="w-12 h-12 flex-shrink-0 mr-4">
												<img
													src={software.imageUrl}
													alt={software.name}
													className="w-full h-full object-contain"
												/>
											</div>
											<span className="font-medium text-gray-800 text-left">
												{software.name}
											</span>
										</div>
									))}
								</div>
							</div>
						)}
					</div>
				)}
			</div>
		</section>
	);
};

export default Banner;
