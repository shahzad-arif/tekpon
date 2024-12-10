import { useState } from "react";

const TrustedOrganizations = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

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
    <div className="mt-20 mb-20">
      <div className="text-center text-3xl text-gray-800">
        <p>Trusted by the world’s leading organizations</p>
      </div>
      <div className="flex justify-center items-center space-x-8 my-8">
        {organizations.map((org) => (
          <div key={org.name} className="flex flex-col items-center">
            <img
              src={org.icon}
              alt={org.name}
              className="h-8 w-auto transition-all duration-300 grayscale hover:grayscale-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedOrganizations;
