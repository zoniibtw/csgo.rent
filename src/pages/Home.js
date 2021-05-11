import HeaderHome from '../components/Header-Footer/header-home';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import './css/Home.css';

function Home() {
  return (
    <HeaderHome />
  );
}

export default Home;