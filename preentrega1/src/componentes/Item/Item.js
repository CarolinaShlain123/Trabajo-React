import "./item.css";
import { Link } from "react-router-dom";

const Item = ({ data }) => {
  return (
      <div className="producto">
        <div className="producto_image">
          <img src={data.image} alt={data.image} />
        </div>
        <div className="producto__footer">
          <h1 className="title">{data.nombre}</h1>
          <p className="precio">${data.precio}</p>
          <div className="button">
            <Link to={`/item/${data.id}`}  className="btn">
              Ver detalle
            </Link>
          </div>
        </div>
      </div>
  );
};

export default Item;
