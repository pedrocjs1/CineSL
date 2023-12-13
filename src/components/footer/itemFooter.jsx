import React from "react";
import "../../estilos/itemFooter.css";

function ItemFooter({ parametro }) {
  const elementos = parametro.map((texto, index) =>
    index === 0 ? (
      <h1 className="h1footer" key={index}>
        {texto}
      </h1>
    ) : (
      <h3 className="h3footer" key={index}>
        {texto}
      </h3>
    )
  );
  return <div>{elementos}</div>;
}
export default ItemFooter;
