import React from "react";

const SoftwareCard = ({ icon, title, tekponScore }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mt-2 px-4 py-6 max-w-sm mx-2">
      <div className="flex items-center space-x-8 -my-4">
        {/* Icon */}
        <div>
          <img src={icon} alt={title} className="h-22 w-22" />
        </div>

        {/* Title and Tekpon Score */}
        <div>
          <h3 className="text-custom-gradient text-xl font-bold mb-1 truncate">{title}</h3>
          <div className="flex flex-row space-x-10"><p className="text-gray-900 mb-2">Tekpon Score</p>
          <p>{tekponScore}</p></div>

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
