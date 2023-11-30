import React, { useState, useEffect } from "react";
import "../../estilos/carrousel.css";
import { getPopularMovies } from "../../data/httpClient";

function ContainerMovie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies()
      .then((response) => {
        console.log(response);
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error("Error al traer las peliculas", error);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="h1pub">Ultimas peliculas publicadas</h1>
      <div className="row">
        {movies.map((movies) => {
          return (
            <div
              key={movies.id}
              className="col-lg-2 col-md-3 col-sm-6 marcoPelis d-flex flex-column align-items-center"
            >
              <img
                className="peli img-fluid"
                src={`https://image.tmdb.org/t/p/w300${movies.backdrop_path}`}
                alt={`${movies.original_title}`}
              ></img>
              <p className="d-flex justify-content-center pp">
                {movies.original_title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default ContainerMovie;
