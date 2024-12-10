import React from "react";

const CompanyReview = ({ data }) => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <img
        src={data.image}
        alt={data.name}
        className="w-16 h-16 rounded-full mx-auto mb-4"
      />
      <h3 className="text-lg font-bold text-center">{data.name}</h3>
      <p className="text-sm text-gray-500 text-center">{data.title}</p>
      <p className="text-gray-700 text-center mt-4">{data.quote}</p>
    </div>
  );
};

export default CompanyReview;
