import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './componentes/NavBar/NavBar';
import Home from './routes/Home/Home';
import Carrito from './routes/Carrito/Carrito';
import 'boxicons'
import Producto from './routes/Productos/Productos';


function App() {
  return (
    <BrowserRouter>
    <header className="navBar">
      <NavBar/>
      </header>
      
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/productos" element={<Producto />} />
      <Route exact path="/carrito" element={<Carrito />} />
    </Routes>
  </BrowserRouter>
);
}

export default App;



    
 
