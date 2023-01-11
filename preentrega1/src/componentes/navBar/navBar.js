import { Link } from "react-router-dom";
import "./navBar.css";
import Cart from "../Cart/Cart";

const NavBar = () => {
  return (
    <div className="container">
      <h2> Harry's Book</h2>
      <nav className="nav">
        <Link className="link" to="/">
          Home
        </Link>

        <Link className="link" to="/productos">
          Productos
        </Link>

        <Link className="link" to={"/categoria/original"}>
          Originales
        </Link>

        <Link className="link" to={"/categoria/edicionEspecial"}>
          Edicion especial
        </Link>

          <Cart />
        
      </nav>
    </div>
  );
};
export default NavBar;
