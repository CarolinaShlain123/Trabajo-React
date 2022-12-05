import './item-list-container.css'
import IMG from '../../images/La-piedra-filosofal.jpg'
const ProductList =() => {
    return(
        <>
        <h1 className= 'title'> PRODUCTOS</h1>
        <div className='productos'>
         <div className='producto'>
            <a href= "#">
            <div className='producto_image'>
                <img src= {IMG} alt="" />
            </div>
            </a>
            <div className="producto__footer">
                <h1>Title</h1>
                <p>Categoria</p>
                <p className="price">$21</p>
            </div>
            <div className="button">
                <button className='btn'> Añadir al carrito</button>
                <div>
                    <a href="#" className='btn'> Detalle</a>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default ProductList;