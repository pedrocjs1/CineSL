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

export const getPopularMovies = (page = 1) => {
  return httpClient.get(`discover/movie?page=${page}`);
};

export const getMoviesByGenre = (genreId) => {
  return httpClient.get(`/discover/movie?with_genres=${genreId}`);
};

export const getMovieById = (genreId) => {
  return httpClient.get(`/find/${genreId}`);
};

export const searchMovies = (query, page = 1) => {
  return httpClient.get(
    `/search/movie?query=${encodeURIComponent(query)}&page=${page}`
  );
};

export const createMovie = (movieData) => {
  return axios.post("http://localhost:4000/api/peliculas", movieData);
};

export const getMoviesForGeneros = (genero) => {
  return axios.get(`http://localhost:4000/api/peliculas`, {
    params: { genero: genero }, // Esto enviará un arreglo si genero es un arreglo
  });
};
