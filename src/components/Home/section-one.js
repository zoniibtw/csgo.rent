import React from 'react';
import './css/section-one.css';
import Arrows from '../../img/icon-arrows.png';
import Happy from '../../img/icon-satisfied.png';
import Contract from '../../img/icon-contract.png';
import Money from '../../img/icon-money.png';
import {postData} from '../API/post';

function SectionOne() {
  return (
    <div className="section-one">
      <div className="description-container">
        <div className="description-login">
          <div className="description">
            <h1>Byt skins varje månad för en låg månadskostnad</h1>
            <p>Vi erbjuder en tjänst där du som användare slipper att spendera eller investera stora summor pengar för att kunna använda dig av skins. Istället betalar du varje månad en bestämd summa för att kunna ta ut det skin du vill spela med. </p>
          </div>
          <div className="login">
            <button onClick={ postData() }>Prova nu med BankID</button>
          </div>
        </div>
      </div>


      <div className="instruction">
        <div className="instruction-container-all">
        <div className="title">
          <h1>Så här fungerar det</h1>
        </div>
        <div className="instruction-container">
          <div className="instruction-item item-one">
            <div className="instruction-icon money-icon"><img src={Money} /></div>
            <div className="item-text">
              <p>Välj vilken prenumerations plan du vill prenumerera till. Alternativt väljer du skinet du vill låna och väljer hur länge du vill låna skinet.</p>
            </div>
          </div>
          <div className="instruction-item item-two">
            <div className="instruction-icon"><img src={Contract} /></div>
            <div className="item-text">
              <p>Där efter behöver du godkänna avtalet via din BankID. Avtalet kan du läsa mer om under csgo.rent/avtal</p>
            </div>
          </div>
          <div className="instruction-item item-three">
            <div className="instruction-icon"><img src={Arrows} /></div>
            <div className="item-text">
              <p>Du kommer nu få en trade skickad till steam kontot som är länkat till ditt csgorent konto. Kan ta upp till 20 minuter.</p>
            </div>
          </div>
          <div className="instruction-item item-four">
            <div className="instruction-icon"><img src={Happy} /></div>
            <div className="item-text">
              <p>Nu kan du använda och spela med dina nya skins fram tills datumet den ska lämnas tillbaka enligt avtalet.</p>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="background-img"></div>
    </div>
  );
}

export default SectionOne;