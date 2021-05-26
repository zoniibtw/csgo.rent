import Header from '../components/Header-Footer/header';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import './css/Market.css';

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
                <button>KÖP IDAG</button>
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
          </div>
        </div>

      </div>
  );
}

export default Market;