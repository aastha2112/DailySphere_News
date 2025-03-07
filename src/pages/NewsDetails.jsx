import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoChevronBack } from "react-icons/io5";
import { p } from "framer-motion/client";

const NewsDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [newsItem, setNewsItem] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
            import.meta.env.VITE_NEWS_API_KEY
          }`
        );
        setNewsItem(response.data.articles[id]);
      } catch (error) {
        console.error("Error fetching news details:", error);
      }
    };
    fetchNews();
  }, [id]);

  if (!newsItem) {
    return <div className="text-center p-10">Loading...</div>;
  }

  return (
    <div className="lg:mt-[130px] mt-[50px]  lg:w-2/3 mx-auto lg:mb-20 lg:px-6 md:mt-[100px]  ">
      <button
        onClick={() => navigate(-1)}
        className="absolute z-10 top-20 left-2 bg-white/50 text-white text-lg  px-3 py-1 rounded-3xl flex items-center 
                 lg:hidden md:hidden lg:mb-4 shadow-md"
      >
        <IoChevronBack />
      </button>
      <button
        className="mb-4 px-4 py-2 bg-gray-700 hidden lg:flex text-white rounded-md"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
      <img
        className="w-full lg:h-[500px] h-[350px] lg:rounded-3xl  object-cover shadow-lg rounded-b-3xl lg:mb-4"
        src={newsItem.urlToImage}
        alt="News"
      />

      {/*  */}
      <div className=" rounded-lg p-3 ">
        <h1 className="text-2xl lg:mt-8 font-bold text-start mb-4">
          {newsItem.title}
        </h1>
        {/* div containg author and published time */}
        <div className="flex flex-col md:flex-row lg:flex-row lg:gap-6 w-full  gap-2 md:gap-5 md:items-center lg:items-center text-red-500 my-4">
          {newsItem.author?.length > 0 && (
            <p className="font-bold flex">By {newsItem.author}</p>
          )}
          {newsItem.publishedAt && (
            <p className="  items-center flex  text-sm text-gray-500">
              <MdOutlineWatchLater />
              {newsItem.publishedAt}
            </p>
          )}
        </div>

        <p className="text-gray-700 text-lg">{newsItem.description}</p>
        {newsItem.content ? (
          <p className="text-gray-700 text-lg">{newsItem.content}</p>
        ) : (
          <p className="text-red-500 text-lg">
            **Full article not available.**
          </p>
        )}

        <a
          href={newsItem.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-4 mb-3 font-bold text-lg text-blue-500 hover:underline"
        >
          Read more
        </a>
      </div>
      {/*  */}
    </div>
  );
};

export default NewsDetails;
