import Carrito from "../Carrito/Carrito.js";
import { Link } from "react-router-dom";
import './titulo.css'

const Titulos= ()=>{
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
export default Titulos;