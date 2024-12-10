import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CompanyReview from "../cards/CompanyReview";

const CompaniesTestimonial = () => {
  const data = [
    {
      image: "https://via.placeholder.com/150",
      name: "Stefan Smulders",
      title: "Chief Strategy Officer & Co-Founder @ EXPAND.IO",
      quote:
        "Thanks to Tekpon, our software has been spotlighted. It's about more than recognition — it's the qualitative feedback and the targeted audience that have made a difference. It feels as though our growth is in sync, a true win-win situation.",
    },
    {
      image: "https://via.placeholder.com/150",
      name: "Michael Kamleitner",
      title: "CEO & Founder @ WALLS.IO",
      quote:
        "78% of B2B software purchases are decided based on recommendations from existing customers! Tekpon unlocks the buying process with authentic, up-to-date customer reviews and brings Walls.io in front of qualified leads.",
    },
    // Add more objects as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Includes left and right arrows
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 mb-20">
        <h2 className="text-4xl font-medium mb-8 text-center">
          See why thousands of <br />
          companies love Software Coverage
        </h2>
        <Slider {...settings}>
          {data.map((review, index) => (
            <div key={index}>
              <CompanyReview data={review} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CompaniesTestimonial;
