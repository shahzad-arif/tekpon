import React from "react";
import { socialIcons, menuItems } from "../../text/footerText/footerText";
const Footer = () => {
	return (
		<footer className="bg-white">
			<div className="container">
				{/* Menu sections */}
				<div className="grid grid-cols-1 md:grid-cols-10 mb-12 md:mx-20">
					{/* Top section with logo and address */}
					<div className="mb-8 col-span-4">
						<div className="justify-items-center">
							<div className="mb-4 flex ">
								<img src="/tekpon-r.webp" alt="Tekpon" className="h-8" />
							</div>
							<address className="not-italic text-gray-600 text-center">
								<div className="mb-4">651 N Broad St., Suite 206</div>
								<div className="mb-4">Middletown, 19709</div>

								<div className="mb-4">DE, United States</div>
							</address>
						</div>
					</div>
					<div className="col-span-6 flex flex-col items-center md:flex-row md:justify-evenly ">
						{Object.entries(menuItems).map(([title, items]) => (
							<div key={title} className="w-auto text-center ">
								<h3 className="font-bold text-lg my-4">{title}</h3>
								<ul className="space-y-2">
									{items.map((item) => (
										<li key={item}>
											<a
												href="#"
												className="text-gray-600 hover:text-gray-900 truncate"
											>
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

				<div className="bg-black flex flex-col md:flex-row items-center justify-center  py-8 border-t border-b border-gray-200">
					<div className="flex items-center mb-4 md:mb-0 mx-2">
						<img src="/Boopos-white.svg" alt="Boopos" className="h-8 mr-4" />
						<span className="text-lg text-white">
							Are you looking to exit your business?
						</span>
					</div>
					<button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 border border-white">
						Get Demo
					</button>
				</div>

				{/* Bottom section */}
				<div className="flex flex-col md:flex-row justify-between items-center pt-8">
					<p className="text-gray-600 mb-4 md:mb-0">
						© 2020 - 2024 Tekpon | All rights reserved
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
