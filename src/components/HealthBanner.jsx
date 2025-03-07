import React from "react";
import { useNavigate } from "react-router-dom";

const HealthBanner = ({ newsData }) => {
  const navigate = useNavigate();
  return (
    <div className="hidden md:flex lg:flex p-10 lg:gap-10 md:gap-4 bg-gray-200 mb-10">
      <img
        src={newsData[0]?.urlToImage}
        alt="Health news"
        className="rounded-4xl lg:w-full lg:h-[400px] md:w-1/2 md:h-[250px]"
      />
      <div className="flex flex-col ">
        <h3 className="lg:text-3xl font-bold text-red-600 lg:p-7 md:text-xl md:px-3 md:py-2">
          {newsData[0]?.title}
        </h3>

        <p className="lg:text-xl lg:font-medium lg:px-7 md:text-sm md:px-3 lg:w-[90%]">
          {newsData[0]?.description}
        </p>
        <button
          onClick={() => {
            navigate(`/newsInDetail`, { state: { news: newsData[0] } });
          }}
          className="lg:mt-4 mt-1 lg:w-1/4 text-sm  lg:px-2 lg:mx-7 lg:py-2 py-1  lg:text-white text-blue-500  font-bold lg:mb-4  lg:bg-blue-500 hover:bg-blue-600 transition rounded-md"
        >
          Read more
        </button>
      </div>
    </div>
  );
};

export default HealthBanner;
