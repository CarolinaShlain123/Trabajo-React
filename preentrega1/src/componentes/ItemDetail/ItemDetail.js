import React, { useState } from "react";
import "./itemDetail.css";
import { useCarritoContext } from "../../context/CarritoContext";
import ItemCount from '../ItemCount/ItemCount'

function ItemDetail ( { data } ) { 

  const [irALCarro, setIrALCarro] = useState(false);
  const { agregarProducto } = useCarritoContext();



  const onAdd = (contador)  => {
    setIrALCarro(true);
       agregarProducto(data , contador);
     
   }

  return (
    <div className="contenedorDetalle">
      <div className="items">
        <h2 className="nombre">{data.nombre} </h2>
        <img className="imagen" src={data.image} alt={data.id} />
        <p className="precio">${data.precio} </p>
        <ItemCount prod={data} stock={data.stock} onAdd={onAdd}/> 
      </div>
    </div>
  );
}

export default ItemDetail;
