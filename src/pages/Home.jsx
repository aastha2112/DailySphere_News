// import React, { useEffect, useState } from "react";
// import NewsBanner from "../components/NewsBanner";
// import axios from "axios";
// import NewsCard from "../components/NewsCard";
// import RecentNews from "../components/RecentNews";

// const Home = () => {
//   const [newsData, setNewsData] = useState({
//     general: [],
//     politics: [],
//     technology: [],
//     sports: [],
//     business: [],
//     science: [],
//     entertainment: [],
//   });

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const apiKey = import.meta.env.VITE_NEWS_API_KEY;
//         const [
//           generalRes,
//           politicsRes,
//           techRes,
//           sportsRes,
//           businessRes,
//           scienceRes,
//           entertainmentRes,
//         ] = await Promise.all([
//           axios.get(
//             `https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=${apiKey}`
//           ),
//           axios.get(
//             `https://newsapi.org/v2/everything?q=politics&apiKey=${apiKey}`
//           ),
//           axios.get(
//             `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${apiKey}`
//           ),
//           axios.get(
//             `https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=${apiKey}`
//           ),
//           axios.get(
//             `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`
//           ),
//           axios.get(
//             `https://newsapi.org/v2/top-headlines?category=science&apiKey=${apiKey}`
//           ),
//           axios.get(
//             `https://newsapi.org/v2/top-headlines?category=entertainment&apiKey=${apiKey}`
//           ),
//         ]);
//         console.log(businessRes.data);
//         setNewsData({
//           general: generalRes.data.articles,
//           politics: politicsRes.data.articles,
//           technology: techRes.data.articles,
//           sports: sportsRes.data.articles,
//           business: businessRes.data.articles,
//           science: scienceRes.data.articles,
//           entertainment: entertainmentRes.data.articles,
//         });
//       } catch (error) {
//         console.error("Error fetching news:", error);
//       }
//     };

//     fetchNews();
//   }, []);

//   return (
//     <div>
//       <>
//         {/* top banner */}
//         <NewsBanner newsData={newsData.general} />
//         <h3 className="text-xl font-bold px-2 pt-3 ">Featured</h3>
//         <div className="flex gap-3">
//           <div className="md:grid md:grid-cols-2 md:gap-2 lg:grid lg:grid-cols-2 lg:w-2/3">
//             {/* div below top banner (including featured news and recent news list) */}
//             {/* <PoliticsCard newsArticle={newsData.politics} /> */}
//             <NewsCard newsArticle={newsData.politics} title="Politics" />
//             <NewsCard newsArticle={newsData.technology} title="Tech" />
//             <NewsCard newsArticle={newsData.sports} title="Sports" />
//             <NewsCard newsArticle={newsData.business} title="Business" />
//             <NewsCard newsArticle={newsData.science} title="Science" />
//             <NewsCard
//               newsArticle={newsData.entertainment}
//               title="entertainment"
//             />
//           </div>
//           <RecentNews newsData={newsData.general} />
//         </div>
//       </>
//     </div>
//   );
// };

// export default Home;
