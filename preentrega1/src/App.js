import './App.css';
import NavBar from './componentes/navBar/navBar';
import Producto from './componentes/productos/productos'

function App() {
  return (
    <div className="App">
      <header className="navBar">
      <NavBar/>

      </header>
      <Producto message= 'bienvenidos a la pagina'/>
    </div>
  );
}

export default App;



    
 
