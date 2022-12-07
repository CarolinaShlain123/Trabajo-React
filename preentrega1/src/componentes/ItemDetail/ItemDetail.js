import React, { useState} from 'react';


function ItemDetail ({prod}) {

  const [contador, setContador] = useState(0);

  const botonAumentar =()=> {
    setContador(contador +1)
    if(contador>= prod.stock){
      botonBajar()
    }else{
      botonAumentar()
    }
  } 
  const botonBajar =()=> {
    setContador(contador -1)
    if(contador<=0){
botonAumentar()
    }else{
      botonBajar()
    }
  } 
  return(
    <div className='contenedorDetalle'>
      <h2 className='nombre'>{prod.nombre} </h2>
      <img className='imagen' src={prod.imagen} alt={prod.id} />
      <p className='precio'>${prod.precio} </p>
      <button onClick= {botonAumentar}>+</button>
      <button onClick= {botonBajar}>-</button>
      <div className='cantidad'>Cantidad:{contador}</div>
    </div>
  )
}

export default ItemDetail;
