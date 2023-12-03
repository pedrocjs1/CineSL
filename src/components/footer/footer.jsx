import React from "react";
import ItemFooter from "./itemFooter";
import "../../estilos/footer.css";

function Footer() {
  const items = ["NUESTROS INSTRAGRAM", "@lucero.miguel", "@vgpedrooo"];
  const items2 = ["CONTACTANOS", "link1", "link2", "link3"];
  return (
    <div className="footer pt-5 d-flex flex-column p-2">
      <div className="d-flex gap-3 p-2 justify-content-between">
        <img className="logo" src="./images/logo.png" alt="Logo" />
        <ItemFooter parametro={items} />
        <ItemFooter parametro={items2} />
        <img className="moviedb" src="./images/moviedb.png" alt="Logo" />
      </div>
      <div className="d-flex justify-content-center ">
        <h4>All right reserved</h4>
      </div>
    </div>
  );
}
export default Footer;
