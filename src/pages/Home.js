import HeaderHome from '../components/Header-Footer/header-home';
import SectionOne from '../components/Home/section-one';
import SectionTwo from '../components/Home/section-two';
import SectionThree from '../components/Home/section-three';
import React from 'react';
import './css/Home.css';

function Home() {
  return (
    <div className="home">
      <div className="fullpage-container">
          <HeaderHome className="header-home"></HeaderHome>
          <SectionOne className="section-one"></SectionOne>
        <div className="background-image"></div>
      </div>
      <SectionTwo className="section-two"></SectionTwo>
      <SectionThree className="section-three"></SectionThree>
    </div>
  );
}

export default Home;