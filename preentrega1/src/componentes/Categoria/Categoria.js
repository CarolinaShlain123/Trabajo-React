import { useState, useEffect } from "react";
import Item from "../Item/Item";
import { useParams } from "react-router-dom";

const ItemListCategorias = () => {
  const [prod, setProd] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((data) =>
        setProd(data.filter((item) => item.categoria === (categoria)))
      );
  }, [categoria]);
  
  return (
    <div className="productos">
      {prod.map((prod) => (
        <Item data={prod} key={prod.id} />
      ))}
    </div>
  );
};

export default ItemListCategorias;