import React, { useState } from "react";
import "../../estilos/header.css";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header({ onSearch }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
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
    setSubmenuOpen(false);
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
            <img className="logo img-fluid" src="./images/cinesll.png" alt="Logo" />
          </div>

          <ul className={menuOpen ? "open" : ""} onClick={closeMenu}>
            <li onMouseEnter={openSubmenu} onMouseLeave={closeSubmenu}>
              <a className="bs-link-color" href="#generos">
                Generos
                {submenuOpen && (
                  <div className="submenu row" onMouseLeave={closeSubmenu}>
                    <ul className="col-6 d-flex flex-column space-between">
                      <li className="liSubmenu">
                        <Link to="/genero/28" className="aSubmenu">
                          Acción
                        </Link>
                      </li>
                      <li className="liSubmenu">
                        <Link to="/genero/12" className="aSubmenu">
                          Aventura
                        </Link>
                      </li>
                      <li className="liSubmenu">
                        <Link to="/genero/16" className="aSubmenu">
                          Animación
                        </Link>
                      </li>
                      <li className="liSubmenu">
                        <Link to="/genero/35" className="aSubmenu">
                          Comedia
                        </Link>
                      </li>
                    </ul>
                    <ul className="col-6 d-flex flex-column space-between">
                      <li className="liSubmenu">
                        <Link to="/genero/80" className="aSubmenu">
                          Crimen
                        </Link>
                      </li>
                      <li className="liSubmenu">
                        <Link to="/genero/10749" className="aSubmenu">
                          Romance
                        </Link>
                      </li>
                      <li className="liSubmenu">
                        <Link to="/genero/9648" className="aSubmenu">
                          Misterio
                        </Link>
                      </li>
                      <li className="liSubmenu">
                        <Link to="/genero/27" className="aSubmenu">
                          Terror
                        </Link>
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

          <form className="search-form" onSubmit={handleSearchSubmit}>
            <div className="search-group">
              <input
                onChange={handleSearchValue}
                value={search}
                type="text"
                placeholder="Buscar películas..."
                className="search-input"
              ></input>
              <button type="submit" className="search-button">
                <FaSearch />
              </button>
            </div>
          </form>
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
