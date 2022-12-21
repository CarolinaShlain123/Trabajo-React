import "./item-list-container.css";
import { useState, useEffect } from "react";
import Item from "../Item/Item";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
  // Inicamos estado
  const [productos, setProductos] = useState([]);

  // Enganchamos el fetch a la mutacion del estado.
  useEffect(() => {
    // Hacemos la llamada al Firebase.

    const db = getFirestore();

    const itemsCollection = collection(db, "productos");

    getDocs(itemsCollection).then((snapshot) => {
      const productos = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProductos(productos);
    });
  }, []);
  // pasamos como segundo parametro un array vacio, para indicar que se ejecute al redireccionar.

  return (
      <div className="productos">
        {productos.length === 0 ? (
          <div>Cargando...</div>
        ) : (
          <div>
            {productos.map((producto) => (
              <Item producto={producto} key={producto.id} />
            ))}
          </div>
        )}
      </div>
  );
};

export default ItemListContainer;
