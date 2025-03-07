import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = "https://newsapi.org/v2/top-headlines";

// Async thunk to fetch news based on category
export const fetchNewsByCategory = createAsyncThunk(
  "category/fetchNews",
  async (category) => {
    const response = await axios.get(
      `${BASE_URL}?category=${category}&country=us&apiKey=${API_KEY}`
    );
    return response.data.articles;
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState: {
    category: "general",
    news: [],
    status: "idle",
    error: null,
  },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewsByCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNewsByCategory.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.news = action.payload;
      })
      .addCase(fetchNewsByCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setCategory } = categorySlice.actions;
export default categorySlice.reducer;
