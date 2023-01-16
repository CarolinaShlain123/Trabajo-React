import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './componentes/navBar/navBar';
import Home from './componentes/Home/Home';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Carrito from './componentes/carrito/carrito'
import 'boxicons';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import ContactForm from './componentes/ContactForm/ContactForm';
import CarritoProvider from '../src/context/CarritoContext'
function App() {
  return (
    <BrowserRouter>
     <CarritoProvider>
      <NavBar/> 
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/productos" element={<ItemListContainer/>}/>
        <Route exact path="/categoria/:categoriaId" element={<ItemListContainer/>} />
        <Route exact path="/carrito" element={<Carrito/>}/>
        <Route exact path="/DetalleProducto/:id" element={<ItemDetailContainer />} />
        <Route exact path="/FormularioVenta" element={<ContactForm />} />
      </Routes>
      </CarritoProvider>
  </BrowserRouter>
);
}

export default App;



    
 
