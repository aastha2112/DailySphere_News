import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoChevronBack } from "react-icons/io5";

const NewsInDetail = () => {
  const location = useLocation();
  const news = location.state?.news;
  const navigate = useNavigate();
  // console.log("News Data:", location.state?.news); // Debugging

  if (!news) {
    return <p className="text-center text-red-500 font-bold">No news found!</p>;
  }
  return (
    <div className="lg:mt-[130px] mt-[50px] md:mt-[120px]  lg:w-2/3 mx-auto lg:mb-20 lg:px-6 ">
      <button
        onClick={() => navigate(-1)}
        className="absolute z-2 top-20 left-2 bg-white/50 text-white text-lg  px-3 py-1 rounded-3xl flex items-center 
                 lg:hidden md:hidden lg:mb-4 shadow-md"
      >
        <IoChevronBack />
      </button>
      <button
        className="mb-4 px-4 py-2 bg-gray-700 hidden lg:flex md:flex md:ml-2 text-white rounded-md"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
      <img
        className="w-full lg:h-[500px] h-[350px] lg:rounded-3xl  object-cover shadow-lg rounded-b-3xl lg:mb-4"
        src={news.urlToImage}
        alt="News"
      />
      <div className=" rounded-lg p-3 ">
        <h1 className="text-2xl lg:mt-8 font-bold text-start mb-4">
          {news.title}
        </h1>
        {/* div containg author and published time */}
        <div className="flex flex-col md:flex-row lg:flex-row lg:gap-6 w-full  gap-2 md:gap-5 md:items-center lg:items-center text-red-500 my-4">
          {news.author?.length > 0 && (
            <p className="font-bold flex">By {news.author}</p>
          )}
          {news.publishedAt && (
            <p className="  items-center flex  text-sm text-gray-500">
              <MdOutlineWatchLater />
              {news.publishedAt}
            </p>
          )}
        </div>

        <p className="text-gray-700 text-lg">{news.description}</p>
        <p className="text-gray-700 text-lg">
          {news.content || "Full article not available."}
        </p>
        <a
          href={news.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-4 mb-3 font-bold text-lg text-blue-500 hover:underline"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsInDetail;
