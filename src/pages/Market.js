import Header from '../components/Header-Footer/header';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import './css/Market.css';
import Item from '../components/Market/items/item';

function Market() {

  return (
      <div className="Market">
        <Header />
        <div className="search">
          <div className="search-container">
            <div className="search-filter">
              <div className="search-price-option"> 
                <div className="search-bar"></div>
                <div className="price-range"></div>
                <div className="item-ban-range"></div>
              </div>
              <div className="filter-option">
                <div className="option-one">
                  <div className="weapon-option"></div>
                  <div className="weapon-option"></div>
                  <div className="weapon-option"></div>
                  <div className="weapon-option"></div>
                  <div className="weapon-option"></div>
                  <div className="weapon-option"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="items-section">
          <div className="items-container">
            <Item></Item>
          </div>
        </div>

      </div>
  );
}

export default Market;