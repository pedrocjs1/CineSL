import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMoviesByGenre } from "../../data/httpClient";
import ClipLoader from "react-spinners/ClipLoader";
import "../../estilos/carrousel.css";
function ContainerMovieGenero({ searchV = "" }) {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const genreNames = {
    28: "Acción",
    12: "Aventura",
    16: "Animación",
    35: "Comedia",
    80: "Crimen",
    10749: "Romance",
    9648: "Misterio",
    27: "Terror",
  };

  const genreName = genreNames[id];

  useEffect(() => {
    setLoading(true);
    getMoviesByGenre(id)
      .then((response) => {
        const filteredMovies = response.data.results.filter((movie) =>
          movie.title.toLowerCase().includes(searchV.toLowerCase())
        );
        setMovies(filteredMovies);
        console.log(response.data.results);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id, searchV]);

  if (loading) {
    return (
      <div className="loader-container">
        <ClipLoader color="#ffffff" size={150} />
      </div>
    );
  }
  if (error) return <div>Error al cargar las películas: {error.message}</div>;

  return (
    <div className="container">
      <h1 className="h1pub">Películas de {genreName}</h1>
      <div className="row">
        {movies.map((movie) => {
          return (
            <div
              key={movie.id}
              className="col-lg-2 col-md-3 col-sm-6 marcoPelis d-flex flex-column align-items-center"
            >
              <img
                className="peli img-fluid"
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={`${movie.title}`}
              ></img>
              <p className="d-flex justify-content-center pp">{movie.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ContainerMovieGenero;
