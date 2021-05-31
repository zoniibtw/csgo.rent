import './css/section-three.css';
import Anton from '../../img/anton-persson2.jpg'
import Eric from '../../img/eric-locher.png'
import Avatar from '../../img/avatar.jpg'

function SectionThree() {
  return (
    <div className="section-three">
      <div className="about-us-container">
        <div className="about-title">
          <h1>Vem/vilka består vi av?</h1>
        </div>
        <div className="management-container">
          <div className="management-item">
            <img src={Avatar}></img>
            <div className="management-info">
              <h3>Niklas Jörgensen</h3>
              <p>Delägare</p>
            </div>
          </div>

          <div className="management-item">
            <img src={Avatar}></img>
            <div className="management-info">
              <h3>Anton Persson</h3>
              <p>Grundare & Ägare</p>
            </div>
          </div>

          <div className="management-item">
            <img src={Avatar}></img>
            <div className="management-info">
              <h3>Eric Locher</h3>
              <p>Delägare</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionThree;