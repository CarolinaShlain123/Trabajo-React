import IMG from "../../images/Inicio.jpg"
const Home = () => {
    return (
      <div>
        <h1>Bienvenidos Harry's Book</h1>
        <div className="image">
          <img src={IMG} alt="" />
        </div>
      </div>
    );
  };
  
  export default Home;