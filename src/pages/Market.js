import Header from '../components/Header-Footer/header';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import './css/Market.css';
import Item from '../components/Market/items/item';

function Market(){

  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    fetch("https://sample-php-qzuyy.ondigitalocean.app/API/Skins/searchSkin.php?name="+name)
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
  }, [name]);

    return (
        <div className="Market">
          <Header />
          <div className="items-section">
            <div className="items-container" >
              <input type="text" placeholder="Search..." value={name} onChange={e => setName(e.target.value)} />
              <p>{data.map((item) => item.name)}</p><br></br>
              <Item />
            </div>
          </div>
  
        </div>
    );
}


export default Market;