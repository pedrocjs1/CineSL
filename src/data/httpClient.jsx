import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const REACT_APP_API_READ_ACCESS_TOKEN =
  process.env.REACT_APP_API_READ_ACCESS_TOKEN;
const BASE_URL = "https://api.themoviedb.org/3";

const httpClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${REACT_APP_API_READ_ACCESS_TOKEN}`,
    "Content-Type": "application/json; charset=utf-8",
  },
  params: {
    api_key: API_KEY,
    language: "es-ES",
  },
});

export const getPopularMovies = () => {
  return httpClient.get("discover/movie");
};

export const getMoviesByGenre = (genreId) => {
  return httpClient.get(`/discover/movie?with_genres=${genreId}`);
};
