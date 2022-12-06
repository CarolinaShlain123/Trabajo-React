import { Link } from "react-router-dom";
import './navBar.css'
import Carrito from "../Carrito/Carrito";

const NavBar= ()=>{
    return(
        <div className="container">
            <h2> Harry's Book</h2>
            <nav className="nav">  
            <Link className="home" to="/">Home</Link>
            <Link className="productos" to="/productos">Productos</Link>
            <Link className="carrito" to="/carrito"><Carrito /></Link>
            </nav>
            
        </div>

    )
}
export default NavBar;
