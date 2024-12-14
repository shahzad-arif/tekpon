import React from "react";
import { socialIcons, menuItems } from "../../../../text/footerText/footerText";

const Footer = () => {
	return (
		<footer className="bg-white">
			<div className="mx-auto py-14">
				{/* Review Card - New Section */}
				<div className="flex w-full justify-center px-4 lg:px-20 mb-12">
					<div className="bg-gradient-to-r from-teal-500 to-purple-700 rounded-lg p-8 text-center  ">
						<h2 className="text-3xl font-bold text-white mb-2">
							Want to Help Others?
						</h2>
						<h3 className="text-2xl font-bold text-white mb-4">
							Write a Review!
						</h3>
						<p className="text-white mb-2">
							Every review you write helps clarify choices for everyone.
						</p>
						<p className="text-white mb-2">
							Sign in or sign up to share your software experiences and
							insights.
						</p>
						<p className="text-white mb-6">Let's rise by lifting others!</p>
						<button className="bg-white text-blue-600 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors font-semibold">
							Sign Up / Sign In
						</button>
					</div>
				</div>

				{/* Menu sections */}
				<div className="grid grid-cols-1 md:grid-cols-10 mx-2 mb-12 md:mx-20 ">
					{/* Top section with logo and address */}
					<div className="col-span-1 md:col-span-4 flex flex-col items-center mb-8 md:mb-0">
						<div className="mb-4 flex flex-col justify-center md:justify-start">
							<div className="mb-4">
								<img src="/SoftwareCoverage.png" alt="Tekpon" className="h-9" />
							</div>

							<address className="not-italic text-gray-600 md:text-left">
								<p className="mb-2">651 N Broad St., Suite 206</p>
								<p className="mb-2">Middletown, 19709</p>
								<p>DE, United States</p>
							</address>
						</div>
					</div>

					{/* Menu Items */}
					<div className="col-span-1 md:col-span-6 flex flex-wrap md:flex-nowrap justify-between">
						{Object.entries(menuItems).map(([title, items]) => (
							<div
								key={title}
								className="w-1/2 md:w-auto text-left mb-6 md:mb-0"
							>
								<h3 className="font-bold text-lg mb-4">{title}</h3>
								<ul className="space-y-2">
									{items.map((item) => (
										<li key={item}>
											<a href="#" className="text-gray-600 hover:text-gray-900">
												{item}
											</a>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>

				{/* Demo section */}
				<div className=" bg-teal-500 flex flex-col md:flex-row items-center justify-center py-8 border-t border-b border-gray-200">
					<div className="flex items-center mb-4 md:mb-0 mx-2">
						<img src="/Boopos-white.svg" alt="Boopos" className="h-8 mr-4" />
						<span className="text-lg text-white">
							Are you looking to exit your business?
						</span>
					</div>
					<button className="bg-white text-teal-500 px-6 py-2 rounded-md hover:bg-gray-300 border border-white">
						Get Demo
					</button>
				</div>

				{/* Bottom section */}
				<div className="flex flex-col md:flex-row justify-around items-center pt-8">
					<p className="text-gray-600 mb-4 md:mb-0">
						© 2020 - 2024 Software Coverage | All rights reserved
					</p>
					<div className="flex space-x-4">
						{socialIcons.map((icon) => (
							<a
								key={icon.name}
								href="#"
								className="text-gray-400 hover:text-gray-600"
								aria-label={icon.name}
							>
								<svg
									className="h-6 w-6"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d={icon.path} />
								</svg>
							</a>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
