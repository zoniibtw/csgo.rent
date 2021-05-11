import './css/footer.css';
import { Link } from 'react-router-dom'; 
import Twitter from '../../img/icon-twitter.svg'
import Facebook from '../../img/icon-facebook.svg'
import Instagram from '../../img/icon-instagram.svg'

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="social-media">
          <a><img src={Twitter}></img></a>
          <a><img src={Facebook}></img></a>
          <a><img src={Instagram}></img></a>
        </div>

        <div className="footer-links">
          <Link><a>Information</a></Link>
          <Link><a>Subscriptions</a></Link>
          <Link><a>Who we are</a></Link>
          <Link><a>Buy today</a></Link>
        </div>

        <div className="terms-privacy">
          <a>Terms of Use</a>
          <a>Privacy & Policy</a>
        </div>

        <div className="copy-right">
          <a>© 2021 csgo.rent</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;