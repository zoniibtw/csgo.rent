import './css/header-home.css';
import Login from '../pop-up/login-popup'
import '../pop-up/css/popup.css';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class HeaderHome extends React.Component {

  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    return (
      <div className="header-home">
        <div className="header-container">
          <div className="logo-type">
            <Link to="/home" className="logo-type-link">CSGO.RENT</Link>
          </div>
          <div className="log-in">
            <button onClick={this.togglePopup.bind(this)} className="login-button">Logga in med BankID</button>
            {this.state.showPopup ? <Login text='Close Me' closePopup={this.togglePopup.bind(this)} /> : null}
          </div>
        </div>
      </div>
    );

  }

}

export default HeaderHome;