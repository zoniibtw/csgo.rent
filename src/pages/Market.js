import Header from '../components/Header-Footer/header';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import './css/Market.css';

function Market() {

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch('localhost/Csgorent/API/User/createUser.php'
    );
    console.log(data);
  }

  return (
      <Header />
  );
}

export default Market;