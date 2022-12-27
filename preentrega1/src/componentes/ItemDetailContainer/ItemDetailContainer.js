import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);
  const { id } = useParams();



  useEffect(() => {
    const db = getFirestore();
    const itemRef = doc(db, "productos", id);
    getDoc(itemRef).then((snapshot) => {
      if (snapshot.exists()) {
        setProducto({ id: snapshot.id, ...snapshot.data() });
      }
    });
  }, [id]);

  return (
    <div className="item-container">
      {!producto ? <div>Cargando...</div> : <ItemDetail producto={producto} />}
    </div>
  );
};
export default ItemDetailContainer;
