import './css/header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <div className="header-container">
        <div className="logo-type-img">
          <a><Link to="/home">CSGO.RENT</Link></a>
        </div>

        <ul className="header-links">
          <li><Link className="header-link-text" to="/home">HOME</Link></li>
          <li><Link className="header-link-text" to="/market">MARKET</Link></li>
          <li><Link className="header-link-text" to="/settings">SUBSCRIPTIONS</Link></li>
        </ul>

        <div className="header-account">
          <div className="header-nickname"></div>
          <div className="header-avatar"></div>
          <div className="sign-out"></div>
        </div>
      </div>
    </div>
  );
}

export default Header;