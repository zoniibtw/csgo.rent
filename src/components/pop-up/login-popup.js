import React, { Component } from "react";
import './css/popup.css';
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

            <div className="title-bar">
                <h1>Logga in</h1>
            </div>

            <div className="form-container-flex">
              <div className="form-container">
                <div className="input-container">
                  <input placeholder="ÅÅÅÅMMDDNNNN" type="number" maxlength="10" aria-required="true" aria-invalid="true"></input>
                </div>
                <div className="button-container-login">
                  <button className="login-btn" onClick={this.handleSubmit}>Logga in med BankID</button>
                </div>
                <div className=""></div>
                <div className="button-container-register">
                  <button className="register-btn">Registrera</button>
                </div>
                <div className="overall-login-information">
                  <div className="a-container">
                  <a>Information</a>
                  <a>EULA</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  export default Popup;