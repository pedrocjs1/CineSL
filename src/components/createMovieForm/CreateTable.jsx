import React, { useState, useEffect } from "react";
import { getMoviesForGeneros } from "../../data/httpClient";
import "../../estilos/createTable.css";

const CreateTable = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenres, setSelectedGenres] = useState(
    new Array(8).fill(false)
  );
  const [searching, setSearching] = useState(false);

  const genreNames = [
    "ACCIÓN",
    "CRIMEN",
    "AVENTURA",
    "ROMANCE",
    "ANIMACIÓN",
    "MISTERIO",
    "COMEDIA",
    "TERROR",
  ];

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const genreIds = selectedGenres
          .map((selected, index) => (selected ? index + 1 : null))
          .filter(Boolean);

        const response = await getMoviesForGeneros(genreIds);
        setMovies(response.data);
        setSearching(false); // Después de cargar las películas, indicamos que no estamos buscando
      } catch (error) {
        console.error(error);
      }
    };

    if (searching) {
      // Solo realizar la búsqueda si estamos buscando
      fetchMovies();
    }
  }, [selectedGenres, searching]);

  const handleGenreChange = (position) => {
    const updatedSelectedGenres = selectedGenres.map((item, index) =>
      index === position ? !item : item
    );
    setSelectedGenres(updatedSelectedGenres);
    setSearching(true); // Indicar que estamos buscando cuando se cambian los géneros
  };

  const handleSearch = () => {
    setSearching(true); // Indicar que estamos buscando cuando se realiza una búsqueda
  };

  return (
    <div className="text-white d-flex flex-column justify-content-center align-items-center gap-3 mt-5">
      <input
        type="text"
        placeholder="Buscar películas"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
      <div className="d-flex gap-3">
        {genreNames.map((genre, index) => (
          <label key={index} className="d-flex gap-1">
            {genre}
            <input
              type="checkbox"
              checked={selectedGenres[index]}
              onChange={() => handleGenreChange(index)}
            />
          </label>
        ))}
      </div>
      <table id="miTabla">
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Foto</th>
            <th>Descripción</th>
            <th>ID API</th>
            <th>Fecha</th>
            <th>Valoración</th>
            <th>Género</th>
          </tr>
        </thead>
        <tbody>
          {searching ? (
            Array.from({ length: 5 }, (_, rowIndex) => (
              <tr key={rowIndex}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            ))
          ) : (
            movies.map((movie) => (
              <tr key={movie.id}>
                <td>{movie.id}</td>
                <td>{movie.titulo}</td>
                <td>
                  <img
                    src={movie.foto}
                    alt={movie.titulo}
                    style={{ width: "50px" }}
                  />
                </td>
                <td>{movie.descripcion}</td>
                <td>{movie.idapi}</td>
                <td>{new Date(movie.dateyear).toLocaleDateString()}</td>
                <td>{movie.valoracion}</td>
                <td>{movie.genero}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CreateTable;

