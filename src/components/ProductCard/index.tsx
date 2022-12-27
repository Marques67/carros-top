import './styles.css';
import carImg from 'assets/images/car-card.png';
import ProductDescription from 'components/ProductDescription';

const ProductCard = () => {
  return (
    <div className="base-card product-card">
      <div className="card-top-container">
        <img src={carImg} alt="Nome do produto" />
      </div>
      <div className="card-bottom-container">
        <h6>Audi Supra TT</h6>
        <ProductDescription />
      </div>
    </div>
  );
};

export default ProductCard;
