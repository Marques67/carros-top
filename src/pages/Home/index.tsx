import mainImage from 'assets/images/car-header 1.svg';
import ButtonIcon from 'components/Button';
import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="base-card home-card">
        <div className="home-content-container">
          <div>
            <h1>O carro perfeito para você</h1>
            <p>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho
            </p>
          </div>
        </div>
        <div className="home-image-container">
          <img src={mainImage} alt="Nome do produto" />
        </div>
      </div>
      <div className="home-button-container">
        <div>
          <Link to="/products">
            <ButtonIcon />
          </Link>
        </div>
        <p>Comece agora a navegar</p>
      </div>
    </div>
  );
};

export default Home;
