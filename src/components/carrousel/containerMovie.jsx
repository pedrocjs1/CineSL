import React, { useState, useEffect } from "react";
import "../../estilos/carrousel.css";
import { getPopularMovies } from "../../data/httpClient";

function ContainerMovie({ searchV = "" }) {
  const [movies, setMovies] = useState([]);

  const filterSearch = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchV.toLowerCase())
  );

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
      <h1 className="h1pub">Películas populares</h1>
      <div className="row">
        {filterSearch.map((movies) => {
          return (
            <div
              key={movies.id}
              className="col-lg-2 col-md-3 col-sm-6 marcoPelis d-flex flex-column align-items-center"
            >
              <img
                className="peli img-fluid"
                src={`https://image.tmdb.org/t/p/w300${movies.poster_path}`}
                alt={`${movies.title}`}
              ></img>
              <p className="d-flex justify-content-center pp">
                {movies.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default ContainerMovie;
