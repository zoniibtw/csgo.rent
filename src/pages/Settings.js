import Header from '../components/Header-Footer/header';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import './css/Settings.css';

function Settings() {
  return (
    <div className="Settings">
      <Header />
      <div className="settings-page">
        <div className="left-navbar">
          <ul>
            <li><img /><a>Personlig info</a></li>
            <li><img /><a>Historik</a></li>
            <li><img /><a>Säkerhet</a></li>
          </ul>
        </div>
      <div className="settings-page-container">
        <div className="settings-container">
            <div className="row-system-one">
              <div className="first-row-section">
                <div className="profile">
                  <div className="profile-title"><h1>Profil</h1></div>
                  <div className="avatar-name">
                    <div>
                      <img />
                      <p>Per Anton Marcus Persson Somoza</p>
                    </div>
                  </div>
                  <div className="bankid-info">
                    <div className="reg-date-container">
                      <p className="reg-title">Registrering:</p><p className="reg-number">2021-06-09</p>
                    </div>
                    <div className="citizens-container">
                      <p className="citizens-title">Personnummer:</p><p className="citizens-number">20010915-5770</p>
                    </div>
                    <div className="trades-container">
                      <p className="trades-title">Byten:</p><p className="trades-number">24</p>
                    </div>
                  </div>
                </div>
                <div className="subscription">
                  <div className="subcription-container sub-off">
                    <div className="sub-title-container">
                      <h1>Prenumeration</h1>
                    </div>
                    <div className="sub-info-container">
                      <p>Du har inga aktiva prenumerationer. Du kan lära dig mer om prenumerationen i Home sidan.</p>
                    </div>
                    <div className="sub-button-container">
                      <button>PROVA NU</button>
                    </div>
                  </div>
                  <div className="subcription-container sub-on disable">
                    <div className="sub-title-container">
                      <h1>Prenumeration</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="second-row-section">
                <div className="general-information">
                  <div className="general-title-container">
                    <h1>Allmän information</h1>
                  </div>
                  <div className="trade-url-container">
                    <p className="trade-url-title">Trade länk:</p>
                    <input className="trade-url-input"></input>
                    <div className="trade-url-buttons">
                      <a>FÅ LÄNKEN</a>
                      <a>ANGE</a>
                    </div>
                  </div>
                  <div className="steamid-container">
                    <p className="steamid-title">Steam ID64:</p><p className="steamid-display">76561199159859756</p>
                  </div>
                </div>
              </div>
            </div>
          <div className="row-system-two">
            <div className="transaction-header"></div>
            <div className="transaction-list"></div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Settings;