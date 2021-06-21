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
              <div className="settings-boxes">
                <div className="settings-wrap">
                  <div className="settings-wrap-item">
                    <div className="settings-wrap-title">
                      <h1>Profil</h1>
                    </div>
                    <div className="settings-wrap-column">
                      <div className="settings-user">
                        <img></img>
                        <p></p>
                      </div>
                      <div className="settings-fullname"></div>
                      <div className="settings-register-date"></div>
                      <div className="settings-total-trades"></div>
                    </div>
                  </div>
                  <div className="settings-wrap-item">
                    <div className="settings-wrap-title">
                      <h1>Profil</h1>
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