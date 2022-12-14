import "./carrito.css";
import { useCarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";

const Carrito = () => {
  const {
    carrito,
    precioTotal,
    limpiarCarrito,
    borrarProducto,
    productoRepetido,
    borrarArticulo,
  } = useCarritoContext();

  return (
    <div className="todoCarro">
      <div className="carrito">
        {
       <div>
           {carrito.map((prod, inicio) => (
              <div className="detalle" key={inicio}>
                <div>
                  <div className="descripcion">
                    <h3 className="nombre">{prod.nombre}</h3>
                    <img src={prod.image} alt={prod.image} className="imagen" />
                    <p className="precio">${prod.precio}</p>
                    <p className="cantidad">Cantidad : {prod.stock}</p>
                    <div className="eliminar">
                      <button
                        className="sacarProducto"
                        disabled={prod.stock <= 0 && productoRepetido(prod.id)}
                        onClick={() => borrarProducto(prod.id)}
                      >
                        Eliminar
                      </button>
                      <button onClick={() => borrarArticulo(prod.id)}>
                        Eliminar articulo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        }
      </div>
      <div>
        <p className="titulo">Total: ${precioTotal()}</p>
        <Link to={'/FormularioVenta'} className="vaciarCarro">
          Terminar compra
        </Link>
        <button onClick={limpiarCarrito} className="vaciarCarro">
          Vaciar Carrito
        </button>
      </div>
    </div>
  );
};

export default Carrito;
