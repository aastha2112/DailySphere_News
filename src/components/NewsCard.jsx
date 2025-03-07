import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NewsCard = ({ newsArticle, title }) => {
  const navigate = useNavigate();

  return (
    <div
      className="relative w-full shadow-lg md:w-full h-[120px]  md:h-[200px] flex   rounded-sm  items-center justify-center  overflow-hidden"
      onClick={() => navigate(`/category/${title}`)}
    >
      <AnimatePresence mode="wait">
        {newsArticle.length > 0 && (
          <motion.div
            className="flex justify-center items-center gap-2 md:flex-col lg:flex-row"
            key={newsArticle[0]?.url}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <img
              className="h-[100px] w-[130px] lg:h-[200px] lg:w-[280px] md:w-full px-2 py-2 flex items-end"
              src={newsArticle[0]?.urlToImage}
              alt={`${title} news`}
            />
            <div className="text-start  md:p-1  max-w-2xl mx-auto">
              {/* Recent Category Tag */}
              <span className="text-red-500 font-bold lg:bg-red-500 lg:text-white lg:px-4 lg:py-1  rounded-sm text-xs uppercase  inline-block ">
                {title}
              </span>

              <div className="flex flex-col py-1">
                {/* <h2 className="text-xs md:text-xl  font-bold">
                  {newsArticle[0]?.title}
                </h2> */}

                <h2 className="text-xs md:text-md  font-bold">
                  {newsArticle[0]?.title?.split(" ").slice(0, 10).join(" ") +
                    (newsArticle[0]?.title?.split(" ").length > 19
                      ? "..."
                      : "")}
                </h2>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NewsCard;
