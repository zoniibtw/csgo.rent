import Header from '../components/Header-Footer/header';
import React from 'react';
import Avatar from '../img/avatar.jpg'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import './css/Settings.css';

function Settings() {
  return (
    <div className="Settings">
      <Header />
      <div className="settings-page">
        <div className="settings-container">
          <div className="setting-nav">
            <a>Personlig info</a>
            <a>Historik</a>
            <a>Säkerhet</a>
          </div>
          <div className="settings-overall">
            <div className="settings-overall-container">
              <div className="settings-h1">
                <h1>Personlig info</h1>
              </div>
              <div className="settings-boxes">
                <div className="settings-wrap">
                  <div className="settings-wrap-item">
                    <div className="settings-wrap-title">
                      <div className="settings-wrap-title-container">
                        <h1>Profil</h1>
                      </div>
                    </div>
                    <div className="settings-wrap-column">
                      <div className="settings-user">
                        <div className="settings-user-container">
                          <img src={Avatar}></img>
                          <p>zoniibtw csgo.rent</p>
                        </div>
                      </div>
                      <div className="settings-divider-container">
                        <div className="settings-divider"></div>
                      </div>
                      <div className="settings-fullname">
                        <div className="settings-fullname-container">
                          <p>För-Efternamn: </p>
                          <p>Per Anton Marcus Persson Somoza</p>
                        </div>
                      </div>
                      <div className="settings-divider-container">
                        <div className="settings-divider"></div>
                      </div>
                      <div className="settings-register-date">
                        <div className="settings-register-date-container">
                          <p>Registering Datum: </p>
                          <p>2021-06-22</p>
                        </div>
                      </div>
                      <div className="settings-divider-container">
                        <div className="settings-divider"></div>
                      </div>
                      <div className="settings-total-trades">
                        <div className="settings-total-trades-container">
                          <p>Total byten: </p>
                          <p>22</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="settings-wrap-item">
                    <div className="settings-wrap-title">
                      <div className="settings-wrap-title-container">
                        <h1>Subscription</h1>
                      </div>
                    </div>
                    <div className="subscription-wrap">
                      <div className="subscription-wrap-container">
                        <div className="subscription-none-active">
                          <p>Du har inga aktiva prenumerationer. Du kan lära dig mer om prenumerationerna i csgo.rent/subscriptions.</p>
                        </div>
                        <div className="subscription-where">
                          <p>Nu får du 25% rabatt första månaden.</p>
                        </div>
                        <button>PROVA IDAG</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overall-information">
                <div className="overall-information-container">
                <div className="settings-wrap-title">
                      <div className="settings-wrap-title-container">
                        <h1>Profil</h1>
                      </div>
                    </div>
                    <div className="settings-wrap-column">
                      <div className="settings-citizens-id">
                        <div className="settings-citizens-id-container">
                          <p>Personnummer: </p><input></input>
                        </div>
                      </div>
                      <div className="settings-divider-container">
                        <div className="settings-divider"></div>
                      </div>
                      <div className="settings-trade-link-container">
                        <div className="settings-trade-link">
                          <p>Trade-Link: </p><input></input>
                        </div>
                      </div>
                      <div className="settings-divider-container">
                        <div className="settings-divider"></div>
                      </div>
                      <div className="settings-trade-link-container">
                        <div className="settings-trade-link">
                          <p>SteamID64: </p><p>76561199159859756</p>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}

export default Settings;