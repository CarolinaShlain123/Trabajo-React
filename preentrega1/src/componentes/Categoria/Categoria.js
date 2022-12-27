import { useState, useEffect } from "react";
import {getFirestore,collection,getDocs,query,where} from 'firebase/firestore';
import Item from "../Item/Item";
import { useParams } from "react-router-dom";

const ItemListCategorias = () => {
  const [data, setData] = useState([]);
  //const [filter, setFilter] = useState('original');
  const { categoriaId } = useParams();


  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "productos");
    if (categoriaId) {
      const queryFilter = query(queryCollection,where("categoria", "==", categoriaId) );
      getDocs(queryFilter).then((res) =>
        setData(res.docs.map((prod) => ({ id: prod.id, ...prod.data() })))
      );
    }
  }, [categoriaId]);

  return (
    <div>
    
      {data.length === 0 ? (
        <div>Cargando...</div>
      ) : (
        <div>
          {data.map((producto) => (
            <div>
               <Item producto={producto} key={producto.id} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemListCategorias;


    
 


