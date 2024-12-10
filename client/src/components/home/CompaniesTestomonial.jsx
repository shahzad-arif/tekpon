import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CompanyReview from "../cards/CompanyReview";
import { ArrowLeft,ArrowRight } from "lucide-react";

const CompaniesTestimonial = () => {
  const slider = React.useRef(null);
  const simpleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      >
        Next
      </div>
    );
  };
  
  const simplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      >
        BACK
      </div>
    );
  };
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
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <simpleNextArrow />,
    prevArrow: <simplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 mb-20">
        <h2 className="text-4xl font-medium mb-8 text-center">
          See why thousands of <br />
          companies love Software Coverage
        </h2>
        <Slider
        ref={slider}
         {...settings}>
          {data.map((review, index) => (
            <div key={index}>
              <CompanyReview data={review} />
            </div>
          ))}
        </Slider>
      <div className="flex flex-row items-center justify-center mt-6">
      <button
          onClick={() => slider?.current?.slickPrev()}
          className="btn py-1 px-3 rounded-lg ml-5 bg-white border border-gray-300"
        >
        <ArrowLeft />
        </button>
        <button
          onClick={() => slider?.current?.slickNext()}
          className="btn py-1 px-3 rounded-lg ml-5 bg-white border border-gray-300"
        >
          <ArrowRight />
        </button>
      </div>
      </div>
     
    </div>
  );
};

export default CompaniesTestimonial;
