import "./item.css";
import ItemList from "../ItemList/ItemList";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <ItemList>
      <div className="producto">
        <div className="producto_image">
          <img src={producto.image} alt={producto.image} />
        </div>
        <div className="producto__footer">
          <h1 className="title">{producto.nombre}</h1>
          <p className="precio">${producto.precio}</p>
          <div className="button">
            <Link className="btn" to={`/DetalleProducto/ ${producto.id}`}>
              Ver detalle
            </Link>
          </div>
        </div>
      </div>
    </ItemList>
  );
};

export default Item;
