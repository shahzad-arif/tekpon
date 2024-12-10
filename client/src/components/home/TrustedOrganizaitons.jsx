import { useState } from "react";

const TrustedOrganizations = () => {
	const organizations = [
		{
			name: "Google Cloud",
			icon: "/trusted-organizations/GoogleCloud_logo.webp",
		},
		{ name: "bill deal", icon: "/trusted-organizations/Bill-Logo.webp" },
		{ name: "HubSpot", icon: "/trusted-organizations/Deel-logo.webp" },
		{ name: "monday.com", icon: "/trusted-organizations/Monday-logo.webp" },
		{
			name: "pipedrive",
			icon: "/trusted-organizations/Pipedrive-new-Logo.webp",
		},
		{ name: "YOUNIUM", icon: "/trusted-organizations/Younium-Logo.webp" },
	];

	return (
		<div className="container mt-20 mb-20 mx-auto px-4">
			{/* Heading */}
			<div className="text-center text-3xl text-gray-800">
				<p>Trusted by the world’s leading organizations</p>
			</div>

			{/* Organizations */}
			<div className="flex flex-wrap justify-center items-center gap-8 my-8 xl:gap-12">
				{organizations.map((org) => (
					<div key={org.name} className="flex flex-col items-center my-4">
						<img
							src={org.icon}
							alt={org.name}
							className="h-8 w-auto transition-all duration-300 grayscale hover:grayscale-0 xl:h-10"
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default TrustedOrganizations;
