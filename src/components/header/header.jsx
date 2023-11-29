import React, { useState } from "react";
import "../../estilos/header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

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

  return (
    <div className="navbar-area">
      <div className="container">
        <nav className="site-navbar d-flex justify-content-between align-items-center">
          <a href="#inicio" className="site-logo">
            Cine SL
          </a>

          <ul className={menuOpen ? "open" : ""} onClick={closeMenu}>
            <li
              onMouseEnter={openSubmenu}
              onMouseLeave={closeSubmenu}
            >
              <a
                className="bs-link-color"
                href="#generos"
              >
                Generos
                {submenuOpen && (
                  <div className="submenu row" onMouseLeave={closeSubmenu}>
                    <ul className="col-6 d-flex flex-column space-between">
                      <li className="liSubmenu">
                        <a className="text-primary aSubmenu" href="#accion">Acción</a>
                      </li>
                      <li className="liSubmenu">
                        <a className="text-primary aSubmenu" href="#aventura">Aventura</a>
                      </li>
                      <li className="liSubmenu">
                        <a className="text-primary aSubmenu" href="#cienciaFiccion">Ciencia Ficción</a>
                      </li>
                      <li className="liSubmenu">
                        <a className="text-primary aSubmenu" href="#comedia">Comedia</a>
                      </li>
                    </ul>
                    <ul className="col-6 d-flex flex-column space-between">
                      <li className="liSubmenu">
                        <a className="text-primary aSubmenu" href="#crimen">Crimen</a>
                      </li>
                      <li className="liSubmenu">
                        <a className="text-primary aSubmenu" href="#romance">Romance</a>
                      </li>
                      <li className="liSubmenu">
                        <a className="text-primary aSubmenu" href="#suspenso">Suspenso</a>
                      </li>
                      <li className="liSubmenu">
                        <a className="text-primary aSubmenu" href="#terror">Terror</a>
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
