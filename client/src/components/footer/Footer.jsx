import React from "react";

const Footer = () => {
	const menuItems = {
		Company: ["About Us", "Contact", "F.A.Q.", "Methodology"],
		Resources: ["Tekpon Pricing", "All Software", "Press", "Deals", "Events"],
		Policies: [
			"Cookies Policy",
			"Privacy Policy",
			"Terms and Conditions",
			"Update Cookies Consent",
		],
	};

	const socialIcons = [
		{
			name: "LinkedIn",
			path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
		},
		{
			name: "Facebook",
			path: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z",
		},
		{
			name: "YouTube",
			path: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z",
		},
		{
			name: "Twitter",
			path: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z",
		},
		{
			name: "TikTok",
			path: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
		},
		{
			name: "Spotify",
			path: "M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z",
		},
		{
			name: "Apple",
			path: "M22.001 19.001h-20v-14h20v14zm-18-2h16v-10h-16v10z",
		},
	];

	return (
		<footer className="bg-white">
			<div className="container">
				{/* Menu sections */}
				<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12 md:mx-20  ">
					{/* Top section with logo and address */}
					<div className="mb-8">
						<div className="mb-4">
							<img src="/tekpon-r.webp" alt="Tekpon" className="h-8" />
						</div>
						<address className="not-italic text-gray-600">
							651 N Broad St., Suite 206
							<br />
							Middletown, 19709
							<br />
							DE, United States
						</address>
					</div>
					{Object.entries(menuItems).map(([title, items]) => (
						<div key={title}>
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

				{/* Demo section */}

				<div className="bg-black flex flex-col md:flex-row items-center justify-center  py-8 border-t border-b border-gray-200">
					<div className="flex items-center mb-4 md:mb-0 mx-2">
						<img src="/Boopos-white.svg" alt="Boopos" className="h-8 mr-4" />
						<span className="text-lg text-white">
							Are you looking to exit your business?
						</span>
					</div>
					<button className="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-800">
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
