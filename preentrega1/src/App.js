import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './componentes/NavBar/NavBar';
//import Saludo from './componentes/ItemListContainer/ItemListContainer'
import Categoria from './routes/Categoria/Categoria';
import Home from './routes/Home/Home';
import Carrito from './routes/Carrito/Carrito';


function App() {
  return (
    <BrowserRouter>
    <header className="navBar">
      <NavBar/>
      </header>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/categorias" element={<Categoria />} />
      <Route exact path="/carrito" element={<Carrito />} />
    </Routes>
  </BrowserRouter>
);
}

export default App;



    
 
