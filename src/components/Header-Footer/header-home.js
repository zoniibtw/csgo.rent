import './css/header-home.css';
//import logo, { ReactComponent } from '../../img/logo.svg';
import Popup from '../../Popup';
import './css/popup.css';
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
    <div className="header">
      <div className="header-container">
        <div className="logo-type">
          <a>CSGO.RENT</a>
        </div>
        <div className="log-in">
        <button onClick={this.togglePopup.bind(this)} className="login-button">Logga in med BankID</button>
          {this.state.showPopup ? <Popup text='Close Me' closePopup = {this.togglePopup.bind(this)} /> : null}
        </div>
      </div>
    </div>
        );

      }

}

export default HeaderHome;