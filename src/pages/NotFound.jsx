import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4">
      <img
        src="/not-found.jpg"
        alt="Page Not Found"
        className="max-w-xs md:max-w-md"
      />
      <h1 className="text-2xl md:text-3xl font-bold mt-4 text-gray-800">
        Oops! Page Not Found
      </h1>
      <p className="text-gray-600 mt-2">
        The page you're looking for doesn't exist.
      </p>
      <button
        onClick={() => navigate("/")}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Go Home
      </button>
    </div>
  );
};

export default NotFound;
