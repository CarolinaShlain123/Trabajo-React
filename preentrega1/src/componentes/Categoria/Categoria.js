import { useState, useEffect } from "react";
import Item from "../Item/Item";
import { useParams } from "react-router-dom";

const ItemListCategorias = () => {
  const [posts, setPosts] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((data) =>
        setPosts(data.filter((item) => item.categoria === (categoria)))
      );
      console.log(posts)
  }, [categoria]);
  
  return (
    <div className="productos">
      {posts.map((prod) => (
        <Item data={prod} key={prod.id} />
      ))}
    </div>
  );
};

export default ItemListCategorias;