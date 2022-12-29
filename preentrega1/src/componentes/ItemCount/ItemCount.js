import "./itemCount.css";
import React, { useState } from "react";

const ItemCount = ({ prod, onAdd }) => {

    const [contador, setContador] = useState(1);
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
        setContador(0);
      } else {
        botonBajar();
      }
    };
    const agregarProducto = () => {
      onAdd(contador);
    };
  
    return (
      
        <div className="botonCant">
          <button className="boton" onClick={botonBajar}>-</button>
          <div className="cantidad">Cantidad:{contador}</div>
          <button className="boton" onClick={botonAumentar}>+</button>
          <button className="btn" onClick={agregarProducto}> Añadir al carrito</button>
        </div>
    );
  }
  export default ItemCount;