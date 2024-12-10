import React, { useState } from "react";
import SoftwareCard from "../cards/SoftwareCard";

import freshdeskIcon from "/Freshdesk-favicon.webp";

const PopularSoftwareCategories = () => {
  const [activeIndex, setActiveIndex] = useState(null);
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

  const categorySidebarItems = [
    "CRM",
    "Field Service Management",
    "Help Desk",
    "Inventory Management",
    "Landing Page",
    "Payroll",
    "Project Management",
    "Subscription Management",
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="mx-auto px-20">
        <h2 className="text-4xl font-bold mb-4 text-center">
          Popular Software Categories
        </h2>
        <h2 className="text-center mb-10 text-xl">
          Discover the best software options tailored to your business needs.
        </h2>
        <div className="flex flex-row items-start justify-center space-x-6">
          {/* Sidebar */}
          <div className="mt-6 rounded-lg w-1/5">
            <ul>
              {categorySidebarItems.map((item, index) => (
                <li
                  key={index}
                  onClick={() => setActiveIndex(index)} // Set the clicked item as active
                  className={`font-bold text-xl cursor-pointer py-2 px-4 rounded-lg ${
                    activeIndex === index
                      ? "color-custom-gradient text-white" // Active item styles
                      : "text-gray-900" // Default styles
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Grid */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {categories.map((category, index) => (
                <SoftwareCard
                  key={index}
                  icon={category.icon}
                  title={category.title}
                  tekponScore={category.tekponScore}
                />
              ))}
            </div>

            <div className="text-center mt-14">
              <a
                href="#"
                className="text-purple-600 font-medium text-xl hover:text-purple-800 underline"
              >
                See All Help Desk Software
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularSoftwareCategories;
