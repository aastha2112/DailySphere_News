import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import NewsDetails from "./pages/NewsDetails";
import Category from "./pages/Category";
import NewsBanner from "./components/NewsBanner";
import NewsCard from "./components/NewsCard";
import axios from "axios";
import { useEffect, useState } from "react";
import NewsInDetail from "./pages/NewsInDetail";
import RecentNews from "./components/RecentNews";
import HealthBanner from "./components/HealthBanner";
import Footer from "./components/Footer";
import EntertainmentNews from "./components/EntertainmentCards";
import NotFound from "./pages/NotFound";
import RecentNewsSidebar from "./components/NewsSidebar";

function App() {
  const [newsData, setNewsData] = useState({
    general: [],
    politics: [],
    technology: [],
    sports: [],
    business: [],
    science: [],
    entertainment: [],
    health: [],
  });

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiKey = import.meta.env.VITE_NEWS_API_KEY;

        const [
          generalRes,
          politicsRes,
          techRes,
          sportsRes,
          businessRes,
          scienceRes,
          entertainmentRes,
          healthRes,
        ] = await Promise.all([
          axios.get(
            `https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=${apiKey}`
          ),
          axios.get(
            `https://newsapi.org/v2/everything?q=politics&apiKey=${apiKey}`
          ),
          axios.get(
            `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${apiKey}`
          ),
          axios.get(
            `https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=${apiKey}`
          ),
          axios.get(
            `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`
          ),
          axios.get(
            `https://newsapi.org/v2/top-headlines?category=science&apiKey=${apiKey}`
          ),
          axios.get(
            `https://newsapi.org/v2/top-headlines?category=entertainment&apiKey=${apiKey}`
          ),
          axios.get(
            `https://newsapi.org/v2/top-headlines?category=health&apiKey=${apiKey}`
          ),
        ]);
        // setNeedNews(sportsRes.data);
        setNewsData({
          general: generalRes.data.articles,
          politics: politicsRes.data.articles,
          technology: techRes.data.articles,
          sports: sportsRes.data.articles,
          business: businessRes.data.articles,
          science: scienceRes.data.articles,
          entertainment: entertainmentRes.data.articles,
          health: healthRes.data.articles,
        });
      } catch (error) {
        console.error("Error fetching news:", error.response.data.message);
      }
    };

    fetchNews();
  }, []);

  return (
    <Router>
      <Navbar newsData={newsData} />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              {/* top banner */}
              <NewsBanner newsData={newsData.general} />
              <h3 className="text-xl font-bold lg:px-13 px-1 py-7 ">
                Featured News
              </h3>
              <div className="flex justify-evenly mb-6 px-1">
                <div className="md:grid md:grid-cols-2 md:gap-2 lg:grid lg:grid-cols-2 lg:w-2/3 md:p-3 lg:px-10">
                  {/* div below top banner (including featured news and recent news list) */}
                  <NewsCard newsArticle={newsData.politics} title="politics" />
                  <NewsCard
                    newsArticle={newsData.technology}
                    title="technology"
                  />
                  <NewsCard newsArticle={newsData.sports} title="sports" />
                  <NewsCard newsArticle={newsData.business} title="business" />
                  <NewsCard newsArticle={newsData.science} title="science" />
                  <NewsCard
                    newsArticle={newsData.entertainment}
                    title="entertainment"
                  />
                </div>
                <RecentNews topHeadlines={newsData.general} title="general" />
              </div>
              {/* health article */}
              <HealthBanner newsData={newsData.health} />
              <div>
                <EntertainmentNews newsData={newsData.entertainment} />
              </div>
              <Footer />
            </div>
          }
        />
        <Route path="/news/:id" element={<NewsDetails />} />
        <Route
          path="/category/:category"
          element={
            <div className="flex gap-10">
              <>
                <Category
                  politics={newsData.politics}
                  technology={newsData.technology}
                  sports={newsData.sports}
                  business={newsData.business}
                  science={newsData.science}
                  entertainment={newsData.entertainment}
                />
              </>
              <RecentNewsSidebar recentNews={newsData.general} />
            </div>
          }
        />
        <Route path="/newsInDetail" element={<NewsInDetail />} />
        {/* <Route path="/news/:index" element={<NewsInDetail />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
