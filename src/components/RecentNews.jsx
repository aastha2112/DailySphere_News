import { useNavigate } from "react-router-dom";
import { FiClock } from "react-icons/fi";

const RecentNews = ({ topHeadlines, title }) => {
  const navigate = useNavigate();

  return (
    <div className=" hidden lg:flex lg:flex-col md:flex md:flex-col bg-gray-50 text-black rounded-lg shadow-lg p-4 w-full max-w-md">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          <FiClock className="text-gray-600 text-xl" />
          <h2 className="text-lg text-red-500 lg:bg-red-500 lg:text-white px-2 rounded-md font-semibold">
            Recent News
          </h2>
        </div>
        <button
          className="text-gray-500 hover:underline"
          onClick={() => navigate(`/category/${title}`)}
        >
          View All
        </button>
      </div>

      <div className="max-h-150 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800">
        {topHeadlines.slice(0, 9).map((news, index) => (
          <div
            key={index}
            className="p-3 border-b border-gray-700 hover:bg-gray-200 cursor-pointer"
            onClick={() => navigate(`/newsInDetail`, { state: { news } })}
          >
            <h3 className="text-sm font-medium">{news.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentNews;
