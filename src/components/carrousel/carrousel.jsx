import React from "react";
import "../../estilos/carrousel.css";

function Carrousel() {
    return (
        <div className="container">
            <h1 className="h1pub">Ultimas peliculas publicadas</h1>
            <div className="row">
                <div className="col-2 marcoPelis">
                    <img className="peli" src='./images/movies/freelance.png' alt="Peli1"></img>
                    <p className="d-flex justify-content-center pp">Freelance</p>
                </div>
                <div className="col-2 marcoPelis">
                    <img className="peli" src='./images/movies/la_guarida.png' alt="Peli2"></img>
                    <p className="d-flex justify-content-center pp">La guarida</p>
                </div>
                <div className="col-2 marcoPelis">
                    <img className="peli" src='./images/movies/la_lista_de_los_besos.png' alt="Peli3"></img>
                    <p className="d-flex justify-content-center pp">La lista de los besos</p>
                </div>
                <div className="col-2 marcoPelis">
                    <img className="peli" src='./images/movies/el_arte_de_matar.png' alt="Peli4"></img>
                    <p className="d-flex justify-content-center pp">El arte de matar</p>
                </div>
                <div className="col-2 marcoPelis">
                    <img className="peli" src='./images/movies/no_tengas_miedo.png' alt="Peli5"></img>
                    <p className="d-flex justify-content-center pp">No tengas miedo</p>
                </div>
                <div className="col-2 marcoPelis">
                    <img className="peli" src='./images/movies/juntos_en_combate.png' alt="Peli6"></img>
                    <p className="d-flex justify-content-center pp">Juntos en combate</p>
                </div>
            </div>
            <div className="row container">
                <div className="col-2 marcoPelis">
                    <img className="peli" src='./images/movies/te_estoy_amando_locamente.png' alt="Peli7"></img>
                    <p className="d-flex justify-content-center pp">Te estoy amando locamente</p>
                </div>
                <div className="col-2 marcoPelis">
                    <img className="peli" src='./images/movies/tripped_up.png' alt="Peli8"></img>
                    <p className="d-flex justify-content-center pp">Tripped up</p>
                </div>
                <div className="col-2 marcoPelis">
                    <img className="peli" src='./images/movies/los_que_se_quedan.png' alt="Peli9"></img>
                    <p className="d-flex justify-content-center pp">Los que se quedan</p>
                </div>
                <div className="col-2 marcoPelis">
                    <img className="peli" src='./images/movies/wish.png' alt="Peli10"></img>
                    <p className="d-flex justify-content-center pp">Wish: El poder de los deseos</p>
                </div>
                <div className="col-2 marcoPelis">
                    <img className="peli" src='./images/movies/hitmen.png' alt="Peli11"></img>
                    <p className="d-flex justify-content-center pp">Hitmen</p>
                </div>
                <div className="col-2 marcoPelis">
                    <img className="peli" src='./images/movies/bts.png' alt="Peli11"></img>
                    <p className="d-flex justify-content-center pp">BTS: Yet to come in cinemas</p>
                </div>
            </div>
        </div>
    );
}
export default Carrousel;