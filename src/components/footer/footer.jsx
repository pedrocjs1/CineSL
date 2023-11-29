import React from "react";
import ItemFooter from './itemFooter';
import "../../estilos/footer.css";

function Footer() {
    const items = ['Tienda online', 'Funcionalidades', 'Tienda de diseños', 'Tienda de aplicaciones', 'Vender en tu tienda', 'Vender por Facebook', 'Vender por Instagram'];
    const items2 = ['Contenido', 'Universidad', 'Blog', 'Ejemplos'];
    return (
        <div className="footer pt-5 d-flex flex-column p-2">
            <div className="d-flex gap-3 p-2 justify-content-between">
                
            <h3>
                CineSL
            </h3>
            <ItemFooter
                parametro={items}
            />
            <ItemFooter
                parametro={items2}
            />
            </div>
            <div className="d-flex justify-content-center ">
                <h4>All right reserved</h4>
            </div>
        </div>
    );
}
export default Footer;