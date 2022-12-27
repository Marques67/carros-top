import './styles.css';

import Input from 'components/Input';

const CarSearch = () => {
  return (
    <div className="base-card">
      <div className="search-card">
        <div className="button-container">
          <button className="btn">
            <h1>Buscar</h1>
          </button>
        </div>
        <div className="edit-container">
          <Input />
        </div>
      </div>
    </div>
  );
};

export default CarSearch;
