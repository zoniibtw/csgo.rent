import './css/header-home.css';
import logo from '../../img/logo.svg';

function HeaderHome() {
  return (
    <div className="header">
      <div className="header-container">
        <div className="logo-type">
          <a>CSGO.RENT</a>
        </div>
        <div className="log-in">
          <button className="login-button">Logga in med BankID</button>
        </div>
      </div>
    </div>
  );
}

export default HeaderHome;