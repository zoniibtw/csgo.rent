import '../css/item.css';

function Item() {
  return (
    <div className="item">
    <div className="item-header-container">
      <div className="item-name"></div>
      <div className="item-exterior"></div>
    </div>
    <div className="item-image">
      <img/>
    </div>
    <div className="item-price">
      <h1>5437KR</h1>
    </div>
    <div className="buttons">
      <button>HYR IDAG</button>
    </div>
    <div className="item-wear">
      <p>Wear</p>
      <p>0.02981677</p>
      <div className="wear-bar">
        <div className="epic"></div>
        <div className="good"></div>
        <div className="normal"></div>
        <div className="bad"></div>
      </div>
    </div>
  </div>
  );
}

export default Item;