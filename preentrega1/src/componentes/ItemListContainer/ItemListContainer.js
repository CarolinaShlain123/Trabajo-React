import "./item-list-container.css";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { getFirestore, collection, getDocs ,where, query } from "firebase/firestore";
import  {useParams} from 'react-router-dom' 

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const {categoriaId} = useParams();
 
  useEffect(() => {
    
    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'productos');
    if(categoriaId){
      const queryFilter = query(queryCollection, where('categoria', '==', categoriaId))
      getDocs(queryFilter)
        .then(res => setData(res.docs.map(prod => ({id:prod.id, ...prod.data()}))))
    }else{
      getDocs(queryCollection)
      .then(res => setData(res.docs.map(prod => ({id: prod.id, ...prod.data()}))))
      
    }
  
}, [categoriaId]);

  return (
    <div className="productosContainer">
     <ItemList data= {data}/>
    </div>
  );
};

export default ItemListContainer;