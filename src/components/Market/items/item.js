import '../css/item.css';
import bfk from '../../../img/bfk-tt.png';

function Item() {
  return (
    <div className="item">
      <div className="item-header-container">
        <div className="item-info">
          <p className="item-name">Moto Gloves | 3rd Commando</p>
          <p className="item-exterior">Minimal Wear</p>
        </div>
      </div>
      <div className="item-image-container">
        <div className="item-image">
          <img src={bfk}/>
        </div>
      </div>
      <div className="item-price-container">
        <div className="item-price">
          <h1>5437KR</h1>
        </div>
      </div>
      <div className="button-container">
        <button>HYR IDAG</button>
      </div>
      <div className="item-wear-container">
        <div className="item-wear-pointer">
          <div className="item-wear-pointer-icon"><img/></div>
        </div>
        <div className="item-wear">
          <div className="item-wear-text">
            <p>Wear: 0.02981677</p>
          </div>
          <div className="wear-bar-container">
            <div className="wear-bar">
              <div className="wear-bar fn"></div>
              <div className="wear-bar mw"></div>
              <div className="wear-bar ft"></div>
              <div className="wear-bar ww"></div>
              <div className="wear-bar bs"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;