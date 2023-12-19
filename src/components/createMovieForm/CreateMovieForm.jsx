import React, { useState } from "react";
import { createMovie } from "../../data/httpClient";
import CreateTable from "./CreateTable.jsx";
import "../../estilos/create.css";
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
        <div className="d-flex w-50 flex-column align-items-center gap-2">
          <div className="d-flex flex-column">
            <p className="text-white d-flex justify-content-center">Titulo</p>
            <input
              type="text"
              name="titulo"
              value={formData.titulo}
              onChange={handleChange}
              placeholder="Título de la película"
              required
              className="inputt"
            />
          </div>
          <div className="d-flex flex-column">
            <p className="text-white d-flex justify-content-center">Foto</p>
            <input
              type="text"
              name="foto"
              value={formData.foto}
              onChange={handleChange}
              placeholder="URL de la foto de la película"
              className="inputt"
            />
          </div>
          <div className="d-flex flex-column">
            <p className="text-white d-flex justify-content-center">Descripción</p>
            <textarea
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
              placeholder="Descripción de la película"
              className="inputt"
            />
          </div>
          <div className="d-flex flex-column">
            <p className="text-white d-flex justify-content-center">ID API</p>
            <input
              type="text"
              name="idApi"
              value={formData.idApi}
              onChange={handleChange}
              placeholder="ID de API Reproductor"
              className="inputt"
            />
          </div>
          <div className="d-flex flex-column">
            <p className="text-white d-flex justify-content-center">Fecha</p>
            <input
              type="date"
              name="dateyear"
              value={formData.dateyear}
              onChange={handleChange}
              placeholder="Fecha de estreno de la película"
              className="inputt"
            />
          </div>
          <div className="d-flex flex-column">
            <p className="text-white d-flex justify-content-center">Valoración</p>
            <input
              type="number"
              name="valoracion"
              step="0.1"
              value={formData.valoracion}
              onChange={handleChange}
              placeholder="Valoración de la película"
              className="inputt"
            />
          </div>
          <div className="d-flex flex-column">
            <p className="text-white d-flex justify-content-center">Genero</p>
            <input
              type="number"
              name="genero"
              value={formData.genero}
              onChange={handleChange}
              placeholder="Género de la película"
              min="1"
              max="8"
              required
              className="inputt mb-5"
            />
          </div>
        </div>

        <button className="mt-2" type="submit">Crear Película</button>
      </form>
      <CreateTable />
    </div>
  );
};

export default CreateMovieForm;
