import Header from '../components/Header-Footer/header';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import './css/Market.css';
import Item from '../components/Market/items/item';

function Market() {

  return (
      <div className="Market">
        <Header />
        <div className="items-section">
          <div className="items-container" >
            <Item />
          </div>
        </div>

      </div>
  );
}

export default Market;