import React,{useState} from "react";
import "../../estilos/header.css"
function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  
    const closeMenu = () => {
      setMenuOpen(false);
    };
  
    return (
      <div className="navbar-area">
        <div className="container">
          <nav className="site-navbar d-flex justify-content-between align-items-center">
            <a href="#inicio" className="site-logo">
              Cine SL
            </a>
            <ul className={menuOpen ? "open" : ""} onClick={closeMenu}>
              <li>
                <a href="#generos">Generos</a>
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