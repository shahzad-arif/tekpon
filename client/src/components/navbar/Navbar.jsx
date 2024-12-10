import React, { useState } from "react";
import { Menu, X, ChevronDown, ChevronRight, Search } from "lucide-react";
import { softwareCategories } from "../../text/navbarText/navBarText";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isSoftwareOpen, setSoftwareOpen] = useState(false);
	const [isSaaSOpen, setSaaSOpen] = useState(false);
	const [expandedCategory, setExpandedCategory] = useState(null);

	const handleCategoryHover = (index) => {
		setExpandedCategory(index);
	};

	return (
		<nav className="w-full bg-white px-2 lg:px-2 2xl:px-6 ">
			<div className="">
				<div className="flex justify-between items-center h-16">
					{/* Desktop Navigation */}
					<div className="hidden xl:flex items-center space-x-8">
						<div className="flex-shrink-0">
							<div className="w-52 rounded-lg mb-1 flex items-center justify-center">
								<img src="/SoftwareCoverage.png" alt="SoftwareCoverage" />
							</div>
						</div>
						<div className="relative group">
							<button
								onClick={() => setSoftwareOpen(!isSoftwareOpen)}
								className="navbarBtn"
							>
								<span>Software Categories</span>
								<ChevronDown className="h-4 w-4" />
							</button>
							<div className="absolute left-0 w-72 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
								<div className="py-2">
									{softwareCategories.map((category, index) => (
										<div
											key={index}
											className="relative group/item"
											onMouseEnter={() => handleCategoryHover(index)}
											onMouseLeave={() => handleCategoryHover(null)}
										>
											<a
												href={category.href}
												className=" flex items-center justify-between px-4 py-2 text-xl text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
											>
												<span>{category.title}</span>
												{category.subCategories && (
													<ChevronRight className="h-4 w-4 text-gray-400" />
												)}
											</a>
											{category.subCategories && expandedCategory === index && (
												<div className="absolute left-full top-0 w-64 bg-white border border-gray-200 rounded-lg shadow-lg text-md">
													<div className="py-2">
														{category.subCategories.map(
															(subCategory, subIndex) => (
																<a
																	key={subIndex}
																	href="#"
																	className="block text-xl px-4 py-2  text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
																>
																	{subCategory}
																</a>
															)
														)}
													</div>
												</div>
											)}
										</div>
									))}
								</div>
							</div>
						</div>

						{/* Rest of the navigation remains the same */}
						<div className="relative group">
							<button
								onClick={() => setSaaSOpen(!isSaaSOpen)}
								className="navbarBtn"
							>
								<span>SaaSplorer</span>
								<ChevronDown className="h-4 w-4" />
							</button>
							<div className="absolute left-0 w-64 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 text-xl">
								<div className="py-2 ">
									<a href="#" className="dropdownText">
										Accounting Software
									</a>
									<a href="#" className="dropdownText">
										FinTech Software
									</a>
									<a href="#" className="dropdownText">
										Tax Software
									</a>
								</div>
							</div>
						</div>
					</div>

					{/* Search, Get Listed, and Sign Up buttons */}
					<div className="hidden xl:flex items-center gap-6">
						<div className="relative">
							<input
								type="text"
								placeholder="Search ..."
								className="w-64 px-4 py-2.5 rounded-xl border border-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder:text-gray-500 text-lg"
							/>
							<Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
						</div>

						<div className="lg:h-8 lg:w-px lg:bg-gray-300"></div>

						<button className="navbarBtnIndigo">Get Listed</button>

						<button className="navbarBtnEndWithGradient">
							Sign Up/Sign In
						</button>
					</div>

					{/* Mobile menu button */}
					<div className="xl:hidden w-full">
						<div className="flex justify-between">
							<div className="flex-shrink-0">
								<div className="w-52 rounded-lg mb-1 flex items-center justify-center">
									<img src="/SoftwareCoverage.png" alt="SoftwareCoverage" />
								</div>
							</div>
							<button
								onClick={() => setIsMenuOpen(!isMenuOpen)}
								className="text-gray-700 hover:text-gray-900"
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

			{/* Mobile menu */}
			{isMenuOpen && (
				<div className="xl:hidden">
					<div className="px-2 pt-2 pb-3 space-y-1">
						<div className="space-y-1">
							<button
								onClick={() => setSoftwareOpen(!isSoftwareOpen)}
								className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
							>
								Software Categories
							</button>
							{isSoftwareOpen && (
								<div className="pl-4 space-y-1">
									{softwareCategories.map((category, index) => (
										<div key={index}>
											<button
												onClick={() =>
													setExpandedCategory(
														expandedCategory === index ? null : index
													)
												}
												className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md"
											>
												<span>{category.title}</span>
												{category.subCategories && (
													<ChevronRight
														className={`h-4 w-4 transform transition-transform ${
															expandedCategory === index ? "rotate-90" : ""
														}`}
													/>
												)}
											</button>
											{category.subCategories && expandedCategory === index && (
												<div className="pl-4 space-y-1">
													{category.subCategories.map(
														(subCategory, subIndex) => (
															<a
																key={subIndex}
																href="#"
																className="block px-3 py-2 text-sm text-gray-500 hover:bg-gray-50 rounded-md"
															>
																{subCategory}
															</a>
														)
													)}
												</div>
											)}
										</div>
									))}
								</div>
							)}
						</div>

						{/* Rest of mobile menu remains the same */}
						<div className="space-y-1">
							<button
								onClick={() => setSaaSOpen(!isSaaSOpen)}
								className="w-full text-left px-3 py-2 text-indigo-600 hover:bg-gray-50 rounded-md"
							>
								SaaSplorer
							</button>
							{isSaaSOpen && (
								<div className="pl-4 space-y-1">
									<a
										href="#"
										className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md"
									>
										Accounting Software
									</a>
									<a
										href="#"
										className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md"
									>
										FinTech Software
									</a>
									<a
										href="#"
										className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md"
									>
										Tax Software
									</a>
								</div>
							)}
						</div>

						<div className="p-3">
							<div className="relative">
								<input
									type="text"
									placeholder="Search ..."
									className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
								/>
								<Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
							</div>
						</div>

						<div className="flex flex-col p-2 space-y-2 w-full">
							<button className="navbarBtnEnd border border-indigo-600 rounded-lg hover:bg-indigo-50">
								Get Listed
							</button>
							<button className="navbarBtnEndWithGradient">
								Sign Up/Sign In
							</button>
						</div>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
