import React, { useState } from "react";
import "./itemDetail.css";
import { useCarritoContext } from "../../context/CarritoContext";
import ItemCount from '../ItemCount/ItemCount'

function ItemDetail ( { producto } ) { 

  const [irALCarro, setIrALCarro] = useState(false);
  const { agregarProducto } = useCarritoContext();



  const onAdd = (contador)  => {
    setIrALCarro(true);
       agregarProducto(producto , contador);
     
   }

  return (
    <div className="contenedorDetalle">
      <div className="items">
        <h2 className="title">{producto.nombre} </h2>
        <img className="imagen" src={producto.image} alt={producto.id} />
        <p className="precio">${producto.precio} </p>
        <ItemCount productos={producto} cantidad={producto.stock} onAdd={onAdd}/> 
      </div>
    </div>
  );
}

export default ItemDetail;
