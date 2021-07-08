import Header from '../components/Header-Footer/header';
import React, { Component, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import './css/Market.css';
import Item from '../components/Market/items/item';

class Market extends React.Component{
  state = {
    name: ""
  };

  handleChange = event => {
    console.log(event.target.value);
    this.setState({ name: event.target.value });
  };

  async componentDidMount() {
    const url = "https://sample-php-qzuyy.ondigitalocean.app/API/Skins/readSkins.php";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  }

  render() {
    return (
        <div className="Market">
          <Header />
          <div className="items-section">
            <div className="items-container" >
              <input type="text" placeholder="Search..." onChange={this.handleChange} />
              <Item />
            </div>
          </div>
  
        </div>
    );
  }
}


export default Market;