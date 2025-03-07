import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Category = ({
  politics,
  technology,
  sports,
  business,
  science,
  entertainment,
}) => {
  const { category } = useParams();
  const navigate = useNavigate();

  const categoryNews =
    {
      politics: politics,
      technology: technology,
      sports: sports,
      business: business,
      science: science,
      entertainment: entertainment,
    }[category] || [];

  return (
    <div className="lg:mt-[150px] md:mt-[150px] mt-[80px] lg:w-2/3 ">
      <h2 className="flex items-center text-xl px-5  font-bold my-4">
        <span className="flex-grow lg:border-t-8 border-red-400 hidden"></span>
        <span className="lg:px-4 pr-3 uppercase"> {category} News</span>
        <span className="flex-grow border-t-8  border-red-400"></span>
      </h2>
      <button
        className="mb-4 lg:ml-8 px-4 mx-3 py-2 bg-gray-700 text-white rounded-md"
        onClick={() => navigate("/")}
      >
        Back to Home
      </button>
      <div>
        {(categoryNews.articles || categoryNews).map((news) => (
          <div key={news.title}>
            {" "}
            <AnimatePresence mode="wait">
              {(categoryNews.articles || categoryNews).length > 0 && (
                <motion.div
                  className="flex gap-5 items-center shadow-md mb-3 lg:p-6 p-1"
                  key={news?.url}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    className="h-[100px] w-[130px] md:h-[220px] md:w-[250px] lg:h-[200px] lg:w-[280px]  px-2 py-2 flex items-end"
                    src={news?.urlToImage}
                    alt={`${category} news`}
                  />
                  <div className="text-start    ">
                    {/* Recent Category Tag */}

                    <div className="flex flex-col py-1 items-start text-start ">
                      {/* <h2 className="text-xs md:text-xl  font-bold">
                    {news?.title}
                  </h2> */}

                      <h2 className="text-sm md:text-xl  font-bold">
                        {news?.title?.split(" ").slice(0, 10).join(" ") +
                          (news?.title?.split(" ").length > 19 ? "..." : "")}
                      </h2>
                      <p className="hidden text-gray-500 lg:w-2xl md:block mt-2 text-sm md:text-base">
                        {news?.description}
                      </p>
                      <button
                        className="lg:mt-4 mt-1 lg:w-1/4 text-sm  lg:px-4 lg:py-2 py-1  lg:text-white text-blue-500  font-bold lg:mb-4  lg:bg-blue-500 hover:bg-blue-600 transition rounded-md"
                        onClick={() =>
                          navigate(`/newsInDetail`, { state: { news } })
                        }
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
      <p className=" text-center text-md px-5 text-red-500  font-bold my-4">
        You are all caught up!
      </p>
    </div>
  );
};

export default Category;
