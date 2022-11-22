import Carrito from "../Carrito/Carrito.js";
import './titulo.css'
const Titulos= ()=>{
    return(
        <div className="container">
            <nav className="nav">
            <a className="categorias" href="a">Categorias</a>
            <a className="login" href="a">Login</a>
            <a className="carrito" href="a"><Carrito /></a>
            </nav>
            
        </div>

    )
}
export default Titulos;