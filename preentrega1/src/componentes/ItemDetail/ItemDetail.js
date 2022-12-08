import React, { useState } from "react";
import "./itemDetail.css";

function ItemDetail({ prod }) {
  const [contador, setContador] = useState(0);

  const botonAumentar = () => {
    setContador(contador + 1);
    if (contador >= prod.stock) {
      botonBajar();
    } else {
      botonAumentar();
    }
  };
  const botonBajar = () => {
    setContador(contador - 1);
    if (contador <= 0) {
      botonAumentar();
    } else {
      botonBajar();
    }
  };
  return (
    <div className="contenedorDetalle">
      <div className="items">
        <h2 className="title">{prod.nombre} </h2>
        <img className="imagen" src={prod.image} alt={prod.id} />
        <p className="precio">${prod.precio} </p>
      </div>
      <div className="botoncant">
        <button onClick={botonAumentar}>+</button>
        <div className="cantidad">Cantidad:{contador}</div>
        <button onClick={botonBajar}>-</button>
      </div>
    </div>
  );
}

export default ItemDetail;
