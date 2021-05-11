import './css/header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <div className="header-container">
        <div className="logo-type"></div>
        <ul className="header-links">
          <li><Link to="/home"></Link></li>
          <li><Link to="/home"></Link></li>
          <li><Link to="/home"></Link></li>
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