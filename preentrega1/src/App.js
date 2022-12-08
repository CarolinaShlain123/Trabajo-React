import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './componentes/NavBar/NavBar';
import Home from './componentes/Home/Home';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Carrito from './componentes/Carrito/Carrito'
import 'boxicons';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import ItemListCategorias from './componentes/Categoria/Categoria';

function App() {
  return (
    <BrowserRouter>
      <NavBar/> 
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/productos" element={<ItemListContainer/>}/>
        <Route exact path="/categoria/:categoria" element={<ItemListCategorias />} />
        <Route exact path="/carrito" element={<Carrito/>}/>
        <Route exact path="/DetalleProducto/:id" element={<ItemDetailContainer />} />
      </Routes>
  </BrowserRouter>
);
}

export default App;



    
 
