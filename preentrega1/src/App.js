import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import Saludo from './componentes/ItemListContainer/ItemListContainer'


function App() {
  return (
    <div className="App">
      <header className="navBar">
      <NavBar/>
      </header>
      <Saludo greeting='Bienvenidos a la pagina' />
      </div>
  );
}

export default App;



    
 
