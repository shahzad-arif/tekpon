import React, { useEffect, useState, useCallback, memo } from "react";
import { Menu, X, ChevronDown, ChevronRight, Search } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import NavLink from "./NavLink";
import DropdownItem from "./DropdownItem";
import SearchBar from "./SearchBar";
import {
	fetchCategories,
	fetchSubcategories,
} from "../../store/slices/categorySlices";
const Navbar = () => {
	const dispatch = useDispatch();
	const { categories, subcategories, loading, error } = useSelector(
		(state) => state.category
	);

	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isSoftwareOpen, setSoftwareOpen] = useState(false);
	const [isSaaSOpen, setSaaSOpen] = useState(false);
	const [expandedCategory, setExpandedCategory] = useState(null);
	const [isInitialLoadComplete, setIsInitialLoadComplete] = useState(false);

	// Fetch categories on component mount
	useEffect(() => {
		const initializeData = async () => {
			try {
				// First fetch all categories
				const categoriesResult = await dispatch(fetchCategories()).unwrap();

				// Then fetch subcategories for all categories in parallel
				const subcategoryPromises = categoriesResult.map((category) =>
					dispatch(fetchSubcategories(category._id)).unwrap()
				);

				await Promise.all(subcategoryPromises);
				setIsInitialLoadComplete(true);
			} catch (error) {
				console.error("Error initializing data:", error);
			}
		};

		initializeData();
	}, [dispatch]);

	// Fetch subcategories when hovering over a category
	const handleCategoryHover = useCallback((categoryId) => {
		setExpandedCategory(categoryId);
	}, []);
	// Reset menu state when screen size changes
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 1280) {
				// xl breakpoint
				setIsMenuOpen(false);
				setSoftwareOpen(false);
			}
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	if (error) {
		console.error("Navbar Error:", error);
	}

	return (
		<nav className="w-full sticky top-0 backdrop-blur-md bg-white/50 px-2 lg:px-2 2xl:px-6 z-[100]">
			<div className="max-w-7xl mx-auto">
				<div className="flex justify-between items-center h-16">
					{/* Desktop Navigation */}
					<div className="hidden xl:flex items-center space-x-8">
						<div className="flex-shrink-0">
							<NavLink href="/">
								<img
									src="/SoftwareCoverage.png"
									alt="SoftwareCoverage"
									className="w-52 h-auto"
									loading="lazy"
								/>
							</NavLink>
						</div>

						{/* Categories Dropdown */}
						<div className="relative group">
							<button
								onClick={() => setSoftwareOpen(!isSoftwareOpen)}
								className="navbarBtn"
								aria-expanded={isSoftwareOpen}
							>
								<span>Software Categories</span>
								<ChevronDown className="h-4 w-4" />
							</button>

							<div className="absolute left-0 w-72 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
								{loading ? (
									<div className="p-4 text-center text-gray-500">
										Loading...
									</div>
								) : error ? (
									<div className="p-4 text-center text-red-500">
										Error loading categories
									</div>
								) : (
									<div className="py-2">
										{categories.map((category) => (
											<DropdownItem
												key={category._id}
												category={category}
												expandedCategory={expandedCategory}
												onHover={handleCategoryHover}
												subcategories={subcategories[category._id]}
											/>
										))}
									</div>
								)}
							</div>
						</div>

						{/* SaaSplorer Dropdown */}
						<div className="relative group">
							<button
								onClick={() => setSaaSOpen(!isSaaSOpen)}
								className="navbarBtn"
								aria-expanded={isSaaSOpen}
							>
								<span>SaaSplorer</span>
								<ChevronDown className="h-4 w-4" />
							</button>
							<div className="absolute left-0 w-64 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 text-xl">
								<div className="py-2">
									<NavLink href="/saas/accounting" className="dropdownText">
										Accounting Software
									</NavLink>
									<NavLink href="/saas/fintech" className="dropdownText">
										FinTech Software
									</NavLink>
									<NavLink href="/saas/tax" className="dropdownText">
										Tax Software
									</NavLink>
								</div>
							</div>
						</div>
					</div>

					{/* Search and CTA Buttons */}
					<div className="hidden xl:flex items-center gap-6">
						<SearchBar />

						<div className="lg:h-8 lg:w-px lg:bg-gray-300" aria-hidden="true" />

						<NavLink href="/get-listed" className="navbarBtnIndigo">
							Get Listed
						</NavLink>

						<NavLink href="/auth" className="navbarBtnEndWithGradient">
							Sign Up/Sign In
						</NavLink>
					</div>

					{/* Mobile Menu Button */}
					<div className="xl:hidden w-full">
						<div className="flex justify-between">
							<NavLink href="/">
								<img
									src="/SoftwareCoverage.png"
									alt="SoftwareCoverage"
									className="w-52 h-auto"
									loading="lazy"
								/>
							</NavLink>
							<button
								onClick={() => setIsMenuOpen(!isMenuOpen)}
								className="text-gray-700 hover:text-gray-900"
								aria-expanded={isMenuOpen}
								aria-label="Toggle menu"
							>
								{isMenuOpen ? (
									<X className="h-6 w-6" />
								) : (
									<Menu className="h-6 w-6" />
								)}
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			{isMenuOpen && (
				<div className="xl:hidden">
					<div className="px-2 pt-2 pb-3 space-y-1">
						{/* Mobile Categories */}
						<div className="space-y-1">
							<button
								onClick={() => setSoftwareOpen(!isSoftwareOpen)}
								className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
							>
								Software Categories
							</button>
							{isSoftwareOpen && (
								<div className="pl-4 space-y-1">
									{categories.map((category) => (
										<div key={category._id}>
											<button
												onClick={() =>
													setExpandedCategory(
														expandedCategory === category._id
															? null
															: category._id
													)
												}
												className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md"
											>
												<span>{category.name}</span>
												{subcategories[category._id]?.length > 0 && (
													<ChevronRight
														className={`h-4 w-4 transform transition-transform ${
															expandedCategory === category._id
																? "rotate-90"
																: ""
														}`}
													/>
												)}
											</button>
											{subcategories[category._id] &&
												expandedCategory === category._id && (
													<div className="pl-4 space-y-1">
														{subcategories[category._id].map((subCategory) => (
															<NavLink
																key={subCategory._id}
																href={`/category/${category.slug}/${subCategory.slug}`}
																className="block px-3 py-2 text-sm text-gray-500 hover:bg-gray-50 rounded-md"
															>
																{subCategory.name}
															</NavLink>
														))}
													</div>
												)}
										</div>
									))}
								</div>
							)}
						</div>

						{/* Mobile SaaSplorer */}
						<div className="space-y-1">
							<button
								onClick={() => setSaaSOpen(!isSaaSOpen)}
								className="w-full text-left px-3 py-2 text-indigo-600 hover:bg-gray-50 rounded-md"
							>
								SaaSplorer
							</button>
							{isSaaSOpen && (
								<div className="pl-4 space-y-1">
									<NavLink
										href="/saas/accounting"
										className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md"
									>
										Accounting Software
									</NavLink>
									<NavLink
										href="/saas/fintech"
										className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md"
									>
										FinTech Software
									</NavLink>
									<NavLink
										href="/saas/tax"
										className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md"
									>
										Tax Software
									</NavLink>
								</div>
							)}
						</div>

						{/* Mobile Search */}
						<div className="p-3">
							<SearchBar />
						</div>

						{/* Mobile CTA Buttons */}
						<div className="flex flex-col p-2 space-y-2 w-full">
							<NavLink
								href="/get-listed"
								className="navbarBtnEnd border border-indigo-600 rounded-lg hover:bg-indigo-50"
							>
								Get Listed
							</NavLink>
							<NavLink href="/auth" className="navbarBtnEndWithGradient">
								Sign Up/Sign In
							</NavLink>
						</div>
					</div>
				</div>
			)}
		</nav>
	);
};

export default memo(Navbar);
