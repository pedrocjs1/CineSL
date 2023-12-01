import React, { useState } from "react";
import "../../estilos/header.css";

function Header({ onSearch }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [search, setSearch] = useState("");
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const openSubmenu = () => {
    setSubmenuOpen(true);
  };

  const closeSubmenu = () => {
    setSubmenuOpen(false);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setSubmenuOpen(false); // Agregamos esto para asegurarnos de que el submenu se cierre cuando se cierra el menú principal
  };

  const handleSearchValue = (event) => {
    setSearch(event.target.value);
  };

  const handleSearchSubmit = (evento) => {
    evento.preventDefault();
    onSearch(search);
  };

  const handleSearchValue = (event) => {
    setSearch(event.target.value);
  };

  const handleSearchSubmit = (evento) => {
    evento.preventDefault();
    onSearch(search);
  };

  return (
    <div className="navbar-area">
      <div className="container">
        <nav className="site-navbar d-flex justify-content-between align-items-center">
          <div>
            <img className="logo" src="./images/logo.png" alt="Logo" />
          </div>
          <div>
            <form className="search-form" onSubmit={handleSearchSubmit}>
              <input
                onChange={handleSearchValue}
                value={search}
                type="text"
                placeholder="Buscar películas..."
                className="search-input"
              ></input>
              <button type="submit" className="search-button">
                Buscar
              </button>
            </form>
          </div>
          <ul className={menuOpen ? "open" : ""} onClick={closeMenu}>
            <li onMouseEnter={openSubmenu} onMouseLeave={closeSubmenu}>
              <a className="bs-link-color" href="#generos">
                Generos
                {submenuOpen && (
                  <div className="submenu row" onMouseLeave={closeSubmenu}>
                    <ul className="col-6 d-flex flex-column space-between">
                      <li className="liSubmenu">
                        <a className="aSubmenu" href="#accion">
                          Acción
                        </a>
                      </li>
                      <li className="liSubmenu">
                        <a className="aSubmenu" href="#aventura">
                          Aventura
                        </a>
                      </li>
                      <li className="liSubmenu">
                        <a className="aSubmenu" href="#cienciaFiccion">
                          Ciencia Ficción
                        </a>
                      </li>
                      <li className="liSubmenu">
                        <a className="aSubmenu" href="#comedia">
                          Comedia
                        </a>
                      </li>
                    </ul>
                    <ul className="col-6 d-flex flex-column space-between">
                      <li className="liSubmenu">
                        <a className="aSubmenu" href="#crimen">
                          Crimen
                        </a>
                      </li>
                      <li className="liSubmenu">
                        <a className="aSubmenu" href="#romance">
                          Romance
                        </a>
                      </li>
                      <li className="liSubmenu">
                        <a className="aSubmenu" href="#suspenso">
                          Suspenso
                        </a>
                      </li>
                      <li className="liSubmenu">
                        <a className="aSubmenu" href="#terror">
                          Terror
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </a>
            </li>
            <li>
              <a href="#peliculas">Peliculas</a>
            </li>
            <li>
              <a href="#series">Series</a>
            </li>
          </ul>
          <button
            className={`nav-toggler ${menuOpen ? "toggler-open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
          </button>
        </nav>
      </div>
    </div>
  );
}

export default Header;
