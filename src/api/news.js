import axios from "axios";

export default async function handler(req, res) {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
        import.meta.env.VITE_NEWS_API_KEY
      }`
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching news" });
  }
}
