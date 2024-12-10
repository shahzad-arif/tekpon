import React from "react";
import SoftwareCard from "../cards/SoftwareCard";

import freshdeskIcon from "/Freshdesk-favicon.webp";

const PopularSoftwareCategories = () => {
  const categories = [
    {
      icon: freshdeskIcon,
      title: "Freshdesk",
      tekponScore: 9.2,
    },
    {
      icon: freshdeskIcon,
      title: "Freshdesk",
      tekponScore: 9.1,
    },
    {
      icon: freshdeskIcon,
      title: "Freshdesk",
      tekponScore: 9.0,
    },
    {
      icon: freshdeskIcon,
      title: "Freshdesk",
      tekponScore: 8.9,
    },
    {
      icon: freshdeskIcon,
      title: "Freshdesk",
      tekponScore: 9.2,
    },
    {
      icon: freshdeskIcon,
      title: "Freshdesk",
      tekponScore: 9.1,
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="mx-aut0 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Popular Software Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {categories.map((category, index) => (
            <SoftwareCard
              key={index}
              icon={category.icon}
              title={category.title}
              tekponScore={category.tekponScore}
            />
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="#"
            className="text-purple-600 hover:text-purple-800 font-medium"
          >
            See All Help Desk Software
          </a>
        </div>
      </div>
    </div>
  );
};

export default PopularSoftwareCategories;
