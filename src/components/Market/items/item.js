import '../css/item.css';
import React, { useEffect, useState } from 'react';

function Item() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    fetch('https://csgo-rent-api-lrib5.ondigitalocean.app/API/Skins/readSkins.php')
    .then((res) => res.json())
    .then((data) => {
      setData(data.data);
    })
    .catch((err) => {
      setError(err);
    })
    .finally(() => {
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>Data is loading...</p>;
  }

  if (error || !Array.isArray(data)) {
    return <p>There was an error loading your data!</p>;
  }

  return (
    <container className="cont">
    {data.map((item) => (
    <div className="item">
      <div className="item-header-container">
        <div className="item-info">
          <p className="item-name" key={item.skinID}>{item.name}</p>
          <p className="item-exterior">Minimal Wear</p>
        </div>
      </div>
      <div className="item-image-container">
        <div className="item-image" key={item.skinID}>
        <img src={"https://community.cloudflare.steamstatic.com/economy/image/" + item.icon_url}/>
        </div>
      </div>
      <div className="item-price-container">
        <div className="item-price">
          <h1 key={item.skinID}>{item.price}</h1>
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
    ))}
    </container>
  );
}
export default Item;