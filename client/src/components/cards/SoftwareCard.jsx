import React from "react";

const SoftwareCard = ({ icon, title, tekponScore }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mt-4 px-4 py-6 max-w-sm mx-auto">
      <div className="flex items-center space-x-4">
        {/* Icon */}
        <div>
          <img src={icon} alt={title} className="h-16 w-16" />
        </div>

        {/* Title and Tekpon Score */}
        <div className="flex-grow">
          <h3 className="text-xl font-bold mb-1">{title}</h3>
          <p className="text-gray-500 mb-2">Tekpon Score: {tekponScore}</p>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-yellow-400 h-3 rounded-full"
              style={{ width: `${tekponScore}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareCard;
