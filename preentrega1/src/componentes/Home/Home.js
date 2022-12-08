import IMG from "../../assets/Inicio.jpg"
import IMG2 from "../../assets/7librosNuevos.jpg"
import './home.css'

const Home = () => {
    return (
      <div className="div">
        <h1>Bienvenidos Harry's Book</h1>
          <img src={IMG} alt="" className="img-main"/>
          <img src={IMG2} alt="" className="img-main"/>
      </div>
    );
  };
  
  export default Home;