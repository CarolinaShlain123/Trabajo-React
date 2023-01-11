import "./itemCount.css";
import React, { useState } from "react";

const ItemCount = ({ prod, onAdd }) => {

    const [contador, setContador] = useState(1);  


     const buttonAument = () => {
      if (contador + 1 > prod.stock ) {
        setContador(prod.stock);
      } else {
        setContador(contador + 1);
      }
    };
  
  const buttonDecrement = () => {
    contador > 0 ? setContador(contador - 1) : setContador(0);
  };
    const agregarProducto = () => {
      onAdd(contador);
    };
  
    return (
      
        <div className="botonCant">
          <button className="boton" onClick={buttonDecrement}>-</button>
          <div className="cantidad">Cantidad:{contador}</div>
          <button className="boton" onClick={buttonAument}>+</button>
          <button className="btn" onClick={agregarProducto}> Añadir al carrito</button>
        </div>
    );
  }
  export default ItemCount;











