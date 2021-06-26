import './css/section-two.css';
import Item from '../../img/budget.png';
import Check from '../../img/icon-check.png'

function SectionTwo() {
  return (
    <div className="section-two">
      <div className="section-two-container">
        <h1>Vi erbjuder dessa abonnemang</h1>
        <div className="subscription-container">

        <div className="sub-item">
          <div className="title-box">
            <h1>BUDGET</h1>
            <div className="border-container">
              <div className="border-box"></div>
              <div className="border-box-two"></div>
            </div>
          </div>
          <div className="item-img">
            <img src={Item}></img>
          </div>
          <div className="item-price">
            <div className="item-container">
              <div className="item-value"><p>SEK</p></div>
              <div className="item-price"><p>149</p></div>
              <div className="item-month"><p>/månaden</p></div>
            </div>
          </div>
          <div className="item-button">
          <button className="btn">BÖRJA IDAG<span></span></button>
          </div>
          <div className="info-box">
            <ul className="info-container">
              <li className="info-item">
                <img src={Check}></img>
                <p>Låna upp till en kniv totalt</p>
              </li>
              <li className="info-item">
                <img src={Check}></img>
                <p>Låna en kniv upp till 1.800 SEK totalt</p>
              </li>
              <li className="info-item">
                <img src={Check}></img>
                <p>Låna kniven upp till 7 dagar</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="sub-item">
          <div className="title-box">
            <h1>ENKEL</h1>
            <div className="border-container">
              <div className="border-box"></div>
              <div className="border-box-two"></div>
            </div>
          </div>
          <div className="item-img">
            <img src={Item}></img>
          </div>
          <div className="item-price">
            <div className="item-container">
              <div className="item-value"><p>SEK</p></div>
              <div className="item-price"><p>249</p></div>
              <div className="item-month"><p>/månaden</p></div>
            </div>
          </div>
          <div className="item-button">
            <button className="btn">BÖRJA IDAG<span></span></button>
          </div>
          <div className="info-box">
            <ul className="info-container">
              <li className="info-item">
                <img src={Check}></img>
                <p>Låna upp till fyra items totalt</p>
              </li>
              <li className="info-item">
                <img src={Check}></img>
                <p>Låna skins upp till 4.000 SEK totalt</p>
              </li>
              <li className="info-item">
                <img src={Check}></img>
                <p>Låna skins upp till 10 dagar</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="sub-item">
          <div className="title-box">
            <h1>STANDARD</h1>
            <div className="border-container">
              <div className="border-box"></div>
              <div className="border-box-two"></div>
            </div>
          </div>
          <div className="item-img">
            <img src={Item}></img>
          </div>
          <div className="item-price">
            <div className="item-container">
              <div className="item-value"><p>SEK</p></div>
              <div className="item-price"><p>349</p></div>
              <div className="item-month"><p>/månaden</p></div>
            </div>
          </div>
          <div className="standard">
          <button className="btn">BÖRJA IDAG<span></span></button>
          </div>
          <div className="info-box">
            <ul className="info-container">
              <li className="info-item">
                <img src={Check}></img>
                <p>Låna upp till sju items totalt</p>
              </li>
              <li className="info-item">
                <img src={Check}></img>
                <p>Låna skins upp till 8.000 SEK totalt</p>
              </li>
              <li className="info-item">
                <img src={Check}></img>
                <p>Låna skins upp till 14 dagar</p>
              </li>
            </ul>
          </div>
          <div className="popular"><p>MEST POPULÄR BLAND ANVÄNDARNA</p></div>
        </div>

        <div className="sub-item">
          <div className="title-box">
            <h1>PREMIUM</h1>
            <div className="border-container">
              <div className="border-box"></div>
              <div className="border-box-two"></div>
            </div>
          </div>
          <div className="item-img">
            <img src={Item}></img>
          </div>
          <div className="item-price">
            <div className="item-container">
              <div className="item-value"><p>SEK</p></div>
              <div className="item-price"><p>549</p></div>
              <div className="item-month"><p>/månaden</p></div>
            </div>
          </div>
          <div className="item-button">
            <button>BÖRJA IDAG<span></span></button>
          </div>
          <div className="info-box">
            <ul className="info-container">
              <li className="info-item">
                <img src={Check}></img>
                <p>Låna upp till femton items totalt</p>
              </li>
              <li className="info-item">
                <img src={Check}></img>
                <p>Låna skins upp till 18.000 SEK totalt</p>
              </li>
              <li className="info-item">
                <img src={Check}></img>
                <p>Låna skins upp till 14 dagar</p>
              </li>
            </ul>
          </div>
          <div className="price-worth"><p>MEST PRISVÄRDA ALTERNATIVET</p></div>
        </div>
        </div>

      </div>
    </div>
  );
}

export default SectionTwo;
