import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer.jsx";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./estilos/footer.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ContainerMovie from "./components/carrousel/containerMovie.jsx";
import ContainerMovieGenero from "./components/ContainerMovieGenero/ContainerMovieGenero.jsx";
import MovieCarousel from "./components/MovieCarousel/MovieCarousel.jsx";
import MovieID from "./components/movieID/movieID.jsx";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const handleValue = (eventValue) => {
    setSearchValue(eventValue);
  };
  return (
    <Router>
      <div className="App body content">
        <Header onSearch={handleValue} />
        <Routes>
          {/* <Route path="/" element={<ContainerMovie searchV={searchValue} />} /> */}
          <Route
            path="/"
            element={
              <>
                <MovieCarousel genreId={27} genreName={"Terror"} />
                <MovieCarousel genreId={12} genreName={"Aventura"} />
                <MovieCarousel genreId={16} genreName={"Animación"} />
                <MovieCarousel genreId={35} genreName={"Comedia"} />
              </>
            }
          />
          <Route path="/movie" element={<MovieID genreId={968051} />} />
          <Route
            path="/genero/:id"
            element={<ContainerMovieGenero searchV={searchValue} />}
          />

          <Route
            path="/genero/:id"
            element={<ContainerMovieGenero searchV={searchValue} />}
          />
        </Routes>
        <Footer className="position-absolute p-0 w-100" />
      </div>
    </Router>
  );
}

export default App;
