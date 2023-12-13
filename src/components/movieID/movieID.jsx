import React, { useState, useEffect } from "react";
import VideoPlayer from "../reproduccionCarousel/reproductorCarousel.jsx";
import "../../estilos/movieID.css";
import { getMovieById } from "../../data/httpClient";

export default function MovieID({ genreId }) {
  const [movie, setMovies] = useState([]);

  useEffect(() => {
    getMovieById(genreId)
      .then((response) => {
        setMovies(response.data.results);
        console.log(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching movies by genre", error);
      });
  }, [genreId]);

  return (
    <div className="containerMovie w-100 d-flex justify-content-center">
      <div className="d-flex flex-column align-items-center">
        <div className="movieInfo">
          <div className="portada">
            <img src="/images/lamonjado.png" alt="" />
          </div>
          <div className="info">
            <div className="title text-center">
              <h3>La Monja 2</h3>
              <h3 className="text-white">{movie.title}</h3>
            </div>
            <div className="desc">
              <h4 className="desch4 text-white">
                Un sacerdote es asesinado. Un mal se está extendiendo. La
                hermana Irene una vez más se encuentra cara a cara con Valak, la
                monja demonio.
              </h4>
            </div>
          </div>
        </div>
        <div className="videosl">
          <VideoPlayer videoUrl="mgofhysg40vm" />
        </div>
      </div>
    </div>
  );
}
