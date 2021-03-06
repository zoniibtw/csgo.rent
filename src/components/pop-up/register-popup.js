import React, { Component } from 'react';

class Popup extends React.Component¬†{

    render() {
      return (
        <div className="popup">
          <div className="popup-bg" onClick={this.props.closePopup}></div>
          <div className="popup_inner">
            <div className="popup-title">
              <h1>Sign up</h1>
              <button className="popup-exit" onClick={this.props.closePopup}>X</button>
            </div>
            <div className="popup-container">
              <input className="input-id"></input>
              <button className="login-btn">Logga in</button>
              <button className="register-btn">Registrera</button>
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