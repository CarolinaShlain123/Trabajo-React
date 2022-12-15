import "./cart.css";
import { useCarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cantidadItem } = useCarritoContext();

  return (
    <div >
      <Link to="/carrito">
        <box-icon name="cart"></box-icon>
      </Link>
      <p className="cartSpan">{parseInt(cantidadItem())}</p>
    </div>
  );
}

export default Cart;
