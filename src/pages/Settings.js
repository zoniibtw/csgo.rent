import Header from '../components/Header-Footer/header';
import React from 'react';
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
              <div className="settings-grid">
                <div className="grid-item profile">
                  <div className="profile-container">
                    <h1>Profil</h1>
                  </div>
                  <div className="profile">
                    <div className="profile-container inf-container">
                      <img></img>
                      <a>Anton Persson Somoza</a>
                    </div>
                    <div className="information-container">
                      <div className="citizens-container inf-container">
                        <p>Personnummer:</p><input></input>
                      </div>
                      <div className="register-date-container inf-container">
                        <p>Registerings datum:</p><a>2021-06-08</a>
                      </div>
                      <div className="total-loan-container inf-container">
                        <p>Totala lån:</p><a>5</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid-item sub">
                  <div className="sub-container">
                    <h1>Prenumeration</h1>
                  </div>
                  <div className="subscription">
                    <p className="first-sub-text">Du har inga aktiva prenumerationer. Du kan välja en prenumeration som passar dig under csgo.rent/plans.</p>
                    <p className="second-sub-text">Nu kan du prova en 7 dagar fri period.</p>
                  </div>
                  <div className="sub-button-container">
                    <button>PROVA NU</button>
                  </div>
                </div>
                <div className="grid-item info">
                  <div className="info-container">
                    <h1>Allmän information</h1>
                    <div className="info">
                      <div className="trade-url inf-container">
                        <div className="trade-url-item inf-container">
                          <p>Trade-URL:</p><input></input>
                        </div>
                        <div className="trade-btns inf-container">
                          <a>Få länken</a><a>Ange</a>
                        </div>
                      </div>
                      <div className="steam-info inf-container">
                        <p>Steam ID64:</p><a>76561199159859756</a>
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