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
    <div className="containerGral w-100 d-flex flex-column justify-content-center align-items-center" id="rojo">
      <div className="containerAlign d-flex flex-column justify-content-center align-items-center">
        <div className="info d-flex flex-row gap-5 mt-5 align-items-center justify-content-start" id="verde">
          <div className="portada" id="celeste">
            <img className="portadaimg" src="/images/lamonjado.png" alt="" />
          </div>
          <div className="infoMovie mb-5" id="morado">
            <div className="title" id="marron">
              <h3 className="titleh3">La Monja 2</h3>
            </div>
            <div className="desc contenedor" id="verdeClaro">
              <p className="descp text-align-justify text-white">
                Un sacerdote es asesinado. Un mal se está extendiendo. La
                hermana Irene una vez más se encuentra cara a cara con Valak, la
                monja demonio.
              </p>
            </div>
            <div className="genero informacion">
              <p>Genero: Terror</p>
            </div>
            <div className="year informacion">
              <p>Año: 2023</p>
            </div>
          </div>
        </div>
        <div className="movie mt-5 mb-5" id="naranja">
          <VideoPlayer videoUrl="mgofhysg40vm" />
        </div>
      </div>
    </div>

    /*
    
    
    
        <div className="">
          <div className="">
            <div className="movieInfo d-flex flex-row ">
              <div className="portada">
                <img className="portadaimg" src="/images/lamonjado.png" alt="" />
              </div>
              <div className="info2">
                <div className="title text-center">
                  <h3>La Monja 2</h3>
                  <h3 className="text-white">{movie.title}</h3>
                </div>
                <div className="desc contenedor">
                  <p className="desch4 text-align-justify text-white">
                    Un sacerdote es asesinado. Un mal se está extendiendo. La
                    hermana Irene una vez más se encuentra cara a cara con Valak, la
                    monja demonio.
                  </p>
                </div>
              </div>
            </div>
            <div className="videosl">
              <VideoPlayer videoUrl="mgofhysg40vm" />
            </div>
          </div>
        </div>
    */
  );
}
