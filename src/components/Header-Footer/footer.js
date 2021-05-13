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
          <div className="social-media-container">
            <a href="https://twitter.com/csgo_rent" target="_blank"><img src={Twitter}></img></a>
            <a href="https://www.facebook.com/" target="_blank"><img src={Facebook}></img></a>
            <a href="https://www.instagram.com/" target="_blank"><img src={Instagram}></img></a>
          </div>
        </div>

        <div className="footer-links">
          <Link><a>Information</a></Link>
          <Link><a>Abonnemang</a></Link>
          <Link><a>Vilka vi är</a></Link>
          <Link><a>Köp idag</a></Link>
        </div>

        <div className="terms-privacy">
          <div className="terms-privacy-container">
            <a>Terms of Use</a>
            <a>Privacy & Policy</a>
          </div>
        </div>

        <div className="copy-right">
          <a>© 2021 csgo.rent</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;