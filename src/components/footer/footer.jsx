import React from "react";
import ItemFooter from "./itemFooter";
import "../../estilos/footer.css";

function Footer() {
  return (
    <div className="footerr pt-3 d-flex flex-column">
      <div className="d-flex justify-content-between">
        <img className="logof ms-5" src="/images/cineslll.png" alt="Logo" />
        <div className="me-5">
          <a href="https://twitter.com/MoviesCineSL" target="_blank">
            <img className="logot" src="/images/twitter.png" alt="Logo" />
          </a>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <h4>CINESL - All right reserved</h4>
      </div>
    </div>
  );
}
export default Footer;
