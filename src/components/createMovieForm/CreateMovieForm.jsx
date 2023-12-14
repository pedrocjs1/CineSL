import React, { useState } from "react";
import { createMovie } from "../../data/httpClient";
import CreateTable from "./CreateTable.jsx";
const CreateMovieForm = () => {
  const initialState = {
    titulo: "",
    foto: "",
    descripcion: "",
    idApi: "",
    valoracion: "",
    genero: "",
    dateyear: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await createMovie(formData);
      setFormData(initialState);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form
        className="d-flex flex-column justify-content-center align-items-center"
        onSubmit={handleSubmit}
      >
        <div className="d-flex w-50 flex-column">
          <input
            type="text"
            name="titulo"
            value={formData.titulo}
            onChange={handleChange}
            placeholder="Título de la película"
            required
          />
          <input
            type="text"
            name="foto"
            value={formData.foto}
            onChange={handleChange}
            placeholder="URL de la foto de la película"
          />
          <textarea
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            placeholder="Descripción de la película"
          />
          <input
            type="text"
            name="idApi"
            value={formData.idApi}
            onChange={handleChange}
            placeholder="ID de API Reproductor"
          />
          <input
            type="date"
            name="dateyear"
            value={formData.dateyear}
            onChange={handleChange}
            placeholder="Fecha de estreno de la película"
          />
          <input
            type="number"
            name="valoracion"
            step="0.1"
            value={formData.valoracion}
            onChange={handleChange}
            placeholder="Valoración de la película"
          />
          <input
            type="number"
            name="genero"
            value={formData.genero}
            onChange={handleChange}
            placeholder="Género de la película"
            min="1"
            max="8"
            required
          />
        </div>

        <button type="submit">Crear Película</button>
      </form>
      <CreateTable />
    </div>
  );
};

export default CreateMovieForm;
