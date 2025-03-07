import { useNavigate } from "react-router-dom";

const EntertainmentNews = ({ newsData }) => {
  const navigate = useNavigate();

  if (!newsData || newsData.length < 2) {
    return <p>No entertainment news available.</p>;
  }

  return (
    <div className="p-10 bg-white shadow-md md:rounded-lg lg:rounded-lg hidden lg:flex lg:flex-col md:flex md:flex-col">
      <h2 className="text-xl font-bold mb-3 px-6">Entertainment News</h2>
      <div className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-3 gap-7 mb-15">
        {newsData.slice(1, 4).map((news, index) => (
          <div
            key={index}
            className="p-3  rounded-lg shadow-md hover:shadow-lg transition cursor-pointer "
            onClick={() => navigate(`/newsInDetail`, { state: { news } })}
          >
            <img
              src={news.urlToImage}
              alt={news.title}
              className="rounded-2xl mb-3"
            />
            <h3 className="font-semibold">{news.title}</h3>
            <p className="text-sm text-gray-600">{news.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EntertainmentNews;
