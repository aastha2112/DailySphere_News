import { useNavigate } from "react-router-dom";
import { FiClock } from "react-icons/fi";

const RecentNewsSidebar = ({ recentNews }) => {
  const navigate = useNavigate();

  return (
    <div className=" hidden  lg:block md:hidden bg-white shadow-md rounded-md p-4 w-full max-w-xs lg:h-180 lg:mt-[150px] md:mt-[150px]">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <FiClock className="text-blue-600" /> Recent News
        </h2>
        <button
          className="text-sm text-blue-600 hover:underline"
          onClick={() => navigate("/recent-news")}
        >
          View All
        </button>
      </div>
      <div className="max-h-160 overflow-y-auto">
        {recentNews.slice(0, 8).map((news, index) => (
          <div
            key={index}
            className="py-2 border-b cursor-pointer hover:bg-gray-100 px-2"
            onClick={() => navigate(`/newsInDetail`, { state: { news } })}
          >
            {news.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentNewsSidebar;
