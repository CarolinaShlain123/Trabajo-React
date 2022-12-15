import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { toast } from "react-hot-toast";

const CarritoContext = React.createContext([]);
export const useCarritoContext = () => useContext(CarritoContext);

const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  
  const precioTotal = () => {
    return carrito.reduce((acc, prod) => (acc += prod.stock * prod.precio), 0);
  };

  const cantidadItem = () => {
    return carrito.reduce((acc, prod) => (acc += prod.stock), 0);
  };
  const limpiarCarrito = () => setCarrito([]);
  const borrarArticulo = (id) => setCarrito(carrito.filter((prod) => prod.id !== id));

  const borrarProducto = (id) =>
    setCarrito(
      carrito.map((prod) => {
        if (prod.id === id) {
          return { ...prod, stock: prod.stock - 1 };
        } else {
          return prod;
        }
      })
    );
    const productoRepetido = (id) => (carrito.find((prod) => prod.id === id) ? true : false);
    
    const agregarProducto = (item, stock) => {
      toast.success('Se agrego al Carrito')
      if (productoRepetido(item.id)) {
        setCarrito(
          carrito.map((prod) => {
            return prod.id === item.id
              ? { ...prod, stock: prod.stock + stock }
              : prod;
          })
        );
      } else {
        setCarrito([...carrito, { ...item, stock }]);
      }
    };
  return (
    <>
      <CarritoContext.Provider
        value={{
          carrito,
          precioTotal,
          cantidadItem,
          limpiarCarrito,
          borrarProducto,
          productoRepetido,
          agregarProducto ,
          borrarArticulo
         }}
      >
        {children}
      </CarritoContext.Provider>
    </>
  );
};

export default CarritoProvider;
