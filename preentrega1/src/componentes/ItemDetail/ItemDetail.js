import React, { useState } from "react";
import "./itemDetail.css";
import { useCarritoContext } from "../../context/CarritoContext";
import ItemCount from '../ItemCount/ItemCount'

function ItemDetail ( { prod } ) { 

  const [goToCart, setGoToCart] = useState(false);
  const { agregarProducto } = useCarritoContext();



  const onAdd = (contador)  => {
     setGoToCart(true);
       agregarProducto(prod , contador);
     
   }

  return (
    <div className="contenedorDetalle">
      <div className="items">
        <h2 className="title">{prod.nombre} </h2>
        <img className="imagen" src={prod.image} alt={prod.id} />
        <p className="precio">${prod.precio} </p>
        <ItemCount prod={prod} cantidad={prod.stock} onAdd={onAdd}/> 
      </div>
    </div>
  );
}

export default ItemDetail;
