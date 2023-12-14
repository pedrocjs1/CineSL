import React, { useState, useEffect } from "react";
import { getMoviesForGeneros } from "../../data/httpClient";

const CreateTable = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenres, setSelectedGenres] = useState(
    new Array(8).fill(false)
  );

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
    // Esta función debería ser llamada cuando se selecciona un género o se busca.
    const fetchMovies = async () => {
      try {
        // Obtener el ID de género seleccionado (o IDs si quieres buscar por múltiples géneros)
        const genreIds = selectedGenres
          .map((selected, index) => (selected ? index + 1 : null))
          .filter(Boolean);

        // Aquí puedes ajustar tu solicitud al backend para obtener películas por género
        const response = await getMoviesForGeneros(genreIds); // Ajusta esta parte para que coincida con tu backend
        setMovies(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, [selectedGenres]);

  // Manejar el cambio en los checkboxes de género
  const handleGenreChange = (position) => {
    const updatedSelectedGenres = selectedGenres.map((item, index) =>
      index === position ? !item : item
    );
    setSelectedGenres(updatedSelectedGenres);
  };

  // Manejar la búsqueda por término
  const handleSearch = async () => {
    // Implementar la lógica de búsqueda aquí
  };

  return (
    <div className="text-white">
      <input
        type="text"
        placeholder="Buscar películas"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
      <div>
        {genreNames.map((genre, index) => (
          <label key={index}>
            {genre}
            <input
              type="checkbox"
              checked={selectedGenres[index]}
              onChange={() => handleGenreChange(index)}
            />
          </label>
        ))}
      </div>
      <table>
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
          {movies.map((movie) => (
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
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CreateTable;
