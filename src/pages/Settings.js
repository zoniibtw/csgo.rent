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
            <li><img /><p>Personlig info</p></li>
            <li><img /><p>Transaktioner</p></li>
          </ul>
        </div>
        <div className="settings-container">
          <div className="personal-settings">
            <div className="row-system">
              <div className="first-row-section">
                <div className="profile"></div>
                <div className="subscription"></div>
              </div>
              <div className="second-row-section">
                <div className="general-information"></div>
              </div>
            </div>
          </div>
          <div className="transactions-settings">
            <div className="transaction-header"></div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;