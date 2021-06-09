import Header from '../components/Header-Footer/header';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import './css/Settings.css';

function Settings() {
  return (
    <div className="Settings">
      <Header />
      <div className="left-navbar">
        <ul>
          <li><img /><p></p></li>
          <li><img /><p></p></li>
          <li><img /><p></p></li>
        </ul>
      </div>
      <div className="settings-overall">
        <div className=""></div>
      </div>
    </div>
  );
}

export default Settings;