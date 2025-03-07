import { useState, useRef, useEffect } from "react";
import { FiMenu, FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const categories = [
  "business",
  "entertainment",
  "general",
  "science",
  "sports",
  "technology",
];

const Navbar = ({ newsData }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const searchRef = useRef(null);
  const inputRef = useRef(null);
  const resultsRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        (searchRef.current && searchRef.current.contains(event.target)) ||
        (inputRef.current && inputRef.current.contains(event.target)) ||
        (resultsRef.current && resultsRef.current.contains(event.target))
      ) {
        return;
      }

      if (
        menuRef.current &&
        (menuRef.current.contains(event.target) ||
          buttonRef.current?.contains(event.target))
      ) {
        return;
      }

      setIsSearchOpen(false);
      setIsMenuOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }

    const allNews = Object.values(newsData).flat();
    const filteredResults = allNews
      .filter((news) =>
        news.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .slice(0, 5);

    setSearchResults(filteredResults);
  }, [searchQuery, newsData]);

  return (
    <>
      <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
        <div className="w-full max-w-[1280px] mx-auto px-4 py-3 flex justify-between items-center border-b border-black">
          <button
            className="md:hidden text-2xl "
            ref={buttonRef}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FiMenu />
          </button>

          <div
            className="text-xl font-bold flex items-center cursor-pointer"
            onClick={() => navigate("/")}
          >
            DailySphere{" "}
          </div>

          <div className="relative" ref={searchRef}>
            <button
              className="text-2xl p-1 search-input"
              onClick={() => setIsSearchOpen(true)}
            >
              <FiSearch />
            </button>

            {isSearchOpen && (
              <div className="absolute right-0 top-0 bg-white shadow-md rounded-md p-2 w-64">
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 search-input"
                />
                {searchResults.length > 0 && (
                  <div
                    ref={resultsRef}
                    className="mt-2 bg-white shadow-md rounded-md max-h-60 overflow-y-auto"
                  >
                    {searchResults.map((news, index) => (
                      <div
                        key={index}
                        className="px-3 py-2 hover:bg-gray-100 cursor-pointer border-b search-result-item"
                        onClick={() => {
                          navigate(`/newsInDetail`, { state: { news } });
                          setIsSearchOpen(false);
                        }}
                      >
                        {news.title}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div
          ref={menuRef}
          className={`bg-gray-100 md:bg-transparent md:flex md:justify-center md:static  absolute w-full left-0 top-full transition-all  duration-300 ease-in-out
          ${isMenuOpen ? "block" : "hidden"} md:block`}
        >
          <div className="  px-20 py-2 flex flex-col md:flex-row md:gap-6 lg:w-full lg:justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="text-sm font-medium capitalize  py-2 border-b-2 border-transparent hover:text-blue-600 hover:border-blue-600 transition-all"
                onClick={() => {
                  navigate(`/category/${category}`);
                  setIsMenuOpen(false);
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {isSearchOpen && searchResults.length > 0 && (
        <div
          className="fixed top-16 left-0 w-full bg-white shadow-md px-4 py-2 hidden md:hidden"
          ref={resultsRef}
        >
          {searchResults.map((news, index) => (
            <div
              key={index}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer border-b"
              onClick={() => {
                navigate(`/newsInDetail`, { state: { news } });
                setIsSearchOpen(false);
              }}
            >
              {news.title}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
