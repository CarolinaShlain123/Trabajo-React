import { Link } from "react-router-dom";
import './navBar.css'
import Cart from "../Cart/Cart";

const NavBar= ()=>{
    return(
        <div className="container">
            <h2> Harry's Book</h2>
            <nav className="nav">  
            <Link className="home" to="/">Home</Link>
            <Link className="productos" to="/productos">Productos</Link>
            <Link className="carrito" to="/carrito"><Cart /></Link>
            </nav>
            
        </div>

    )
}
export default NavBar;
