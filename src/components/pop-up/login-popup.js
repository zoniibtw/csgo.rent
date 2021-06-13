import React, { Component } from 'react';
import './css/login.css';

class Popup extends React.Component {

    render() {
      return (
        <div className="popup">
          <div className="popup-bg" onClick={this.props.closePopup}></div>
          <div className="popup_inner">
            <div className="popup-title">
              <h1>Logga in</h1>
              <button className="popup-exit" onClick={this.props.closePopup}>X</button>
            </div>
            <div className="popup-container">
              <input className="popup-item" placeholder="Skriv ditt personnummer här!" type="number"></input>
              <button className="login-btn popup-item">Logga in</button>
              <button className="register-btn popup-item">Registrera</button>
            </div>
            <div className="popup-information">
              <a>Information</a>
              <a>EULA</a>
            </div>
          </div>
        </div>
      );
    }
  }

  export default Popup;