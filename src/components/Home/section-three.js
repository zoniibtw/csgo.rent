import './css/section-three.css';

function SectionThree() {
  return (
    <div className="section-three">
      <div className="about-us-container">
        <div className="about-title">
          <h1>Vem/vilka består vi av?</h1>
        </div>
        <div className="management-container">
          <div className="management-item">
            <img></img>
            <div className="management-info">
              <h3>Niklas Jörgensen</h3>
              <p>Projekt Ledare</p>
            </div>
          </div>

          <div className="management-item">
            <img></img>
            <div className="management-info">
              <h3>Anton Persson</h3>
              <p>Grundare & Ägare</p>
            </div>
          </div>

          <div className="management-item">
            <img></img>
            <div className="management-info">
              <h3>Eric Jörgensen</h3>
              <p>Redovisningsekonom</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionThree;