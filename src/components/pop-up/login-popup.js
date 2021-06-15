import React, { Component } from "react";
import './css/login.css';
import Cookies from "js-cookie";

class Popup extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      userInputPersonNummer: '',
      personNummer: '',
      data: []
    }
  }

  componentDidMount() {
    fetch('https://csgo-rent-api-lrib5.ondigitalocean.app/API/User/readUser.php')
        .then(res => res.json())
        .then(json => {
            const { personNummer, data} = json;
            this.setState({ personNummer, data});
        }).catch((err) => {
            console.log(err);
        });
}


  handleChange = (event) => {
    this.setState({ userInputPersonNummer: event.target.value });
  }

  login = (userInputPersonNummer, data) => {
    //bankid kod ska in här sen
    
    for(var i = 0; i < this.state.data.length; i++){

    if(this.state.userInputPersonNummer === this.state.data[i].personNummer){
      Cookies.set("user", "LOGGED_IN");
      console.log("logged in!");
    }else{
      
    }
  }
}

  handleSubmit = () => {
    this.login();
    this.props.closePopup();
  }

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
              <input className="popup-item" placeholder="Skriv ditt personnummer här!" type="number" onChange={this.handleChange}></input>
              <button className="login-btn popup-item" onClick={this.handleSubmit}>Logga in</button>
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