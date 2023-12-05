import React, { useState, useEffect } from "react";
import { getMoviesByGenre } from "../../data/httpClient";
import "../../estilos/movieCarousel.css";
import Slider from "react-slick";
import NextArrow from "./NextArrow.jsx";
import PrevArrow from "./PrevArrow.jsx";

const MovieCarousel = ({ genreId, genreName }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getMoviesByGenre(genreId)
      .then((response) => {
        setMovies(response.data.results.slice(0, 15));
      })
      .catch((error) => {
        console.error("Error fetching movies by genre", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [genreId]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="p-5">
      <div className="w-100 d-flex justify-content-between">
        <h2 className="text-white">{genreName}</h2>
        <button
          className="btn-carousel"
          onClick={() => (window.location.href = `/genero/${genreId}`)}
        >
          Ver más
        </button>
      </div>
      <Slider {...settings}>
        {movies.map((movie) => (
          <div key={movie.id} className="movie-slide">
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
              alt={movie.title}
            />
            <p className="movie-title">{movie.title}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MovieCarousel;
