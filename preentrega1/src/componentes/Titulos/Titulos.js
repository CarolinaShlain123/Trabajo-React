import Carrito from "../Carrito/Carrito.js";
import { Link } from "react-router-dom";
import './titulo.css'
const Titulos= ()=>{
    return(
        <div className="container">
            <nav className="nav">
            <Link className="home" to="/">Home</Link>
            <Link className="categorias" to="/categorias">Categorias</Link>
            <Link className="carrito" to="/carrito"><Carrito /></Link>
            </nav>
            
        </div>

    )
}
export default Titulos;