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
            <a><svg></svg>Personlig info</a>
            <a><svg></svg>Historik</a>
            <a><svg></svg>Säkerhet</a>
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