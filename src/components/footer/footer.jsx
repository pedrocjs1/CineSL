import React from "react";
import ItemFooter from "./itemFooter";
import "../../estilos/footer.css";

function Footer() {
  const items = ["NUESTROS INSTRAGRAM", "@lucero.miguel", "@vgpedrooo"];
  const items2 = ["CONTACTANOS", "link1", "link2", "link3"];
  return (
    <div className="footerr pt-5 d-flex flex-column p-2">
      <div className="d-flex gap-3 p-2 justify-content-between">
        <img className="logof" src="./images/cineslll.png" alt="Logo" />
        <ItemFooter parametro={items} />
        <ItemFooter parametro={items2} />
      </div>
      <div className="d-flex justify-content-center ">
        <h4>CINESL pintesa - All right reserved</h4>
      </div>
    </div>
  );
}
export default Footer;
