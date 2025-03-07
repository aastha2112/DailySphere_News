import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NewsBanner = ({ newsData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (newsData.length > 0) {
      setCurrentIndex(0);
    }
  }, [newsData]);

  const nextNews = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % newsData.length);
  };

  const prevNews = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + newsData.length) % newsData.length
    );
  };

  return (
    <div className="relative w-full h-[320px] md:h-[500px] lg:mt-[100px] flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        {newsData.length > 0 && (
          <motion.div
            key={newsData[currentIndex]?.url}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full flex flex-col justify-center items-center text-white bg-cover bg-center"
            style={{
              backgroundImage: newsData[currentIndex]?.urlToImage
                ? `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)), url(${newsData[currentIndex].urlToImage})`
                : "none",
            }}
          >
            <div className="text-center max-w-2xl mx-auto">
              {/* Recent Category Tag */}
              <span className="bg-red-600 text-white px-4 py-1 lg:mt-40 mt-[90px] rounded-md text-sm uppercase shadow-lg inline-block mb-2">
                Recent
              </span>

              <h2 className="text-md md:text-3xl px-16 font-bold">
                {newsData[currentIndex]?.title}
              </h2>
              <p className="hidden md:block mt-2 text-sm md:text-base">
                {newsData[currentIndex]?.description}
              </p>

              <button
                className="mt-4 px-4 py-2 mb-4 bg-blue-500 hover:bg-blue-600 transition rounded-md"
                onClick={() => navigate(`/news/${currentIndex}`)}
              >
                Read More
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        className="absolute left-4 bg-gray-800 p-2 rounded-full text-white"
        onClick={prevNews}
      >
        <FaArrowLeft />
      </button>
      <button
        className="absolute right-4 bg-gray-800 p-2 rounded-full text-white"
        onClick={nextNews}
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default NewsBanner;
