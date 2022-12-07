import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [prod, setProd] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((data) => setProd(data.find((item) => (item.id = parseInt(id)))));
  }, [id]);
  return (
    <div className="item-container">
      <ItemDetail prod={prod} />
    </div>
  );
};

export default ItemDetailContainer;
