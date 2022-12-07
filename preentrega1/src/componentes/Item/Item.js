import "./item.css";
import ItemList from "../ItemList/ItemList";
import { Link } from "react-router-dom";

const Item = ({ data }) => {
  return (
    <ItemList>
      <div className="producto">
        <div className="producto_image">
          <img src={data.image} alt={data.image} />
        </div>
        <div className="producto__footer">
          <h1 className="title">{data.nombre}</h1>
          <p className="precio">${data.precio}</p>
          <div className="button">
            <Link className="btn" to="/DetalleProducto">
              Ver Detalle
            </Link>
            <button className="btn"> Añadir al carrito</button>
          </div>
        </div>
      </div>
    </ItemList>
  );
};

export default Item;
