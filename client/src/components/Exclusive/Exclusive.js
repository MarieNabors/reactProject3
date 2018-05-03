import React from "react";
import "./Exclusive.css";

const Exclusive = () => (

  <div className="container">
  <div id="exclusive">
    <h2 className="text-center">MEMBER CONTENT</h2>
      <ul className="nav nav-tabs">
          <li className="active tabText"><a data-toggle="tab" href="#home">Newsletters</a></li>
          <li className="tabText"><a data-toggle="tab" href="#menu6">Professional Development</a></li>
          <li className="tabText"><a data-toggle="tab" href="#menu2">Printable Resources</a></li>
          <li className="tabText"><a data-toggle="tab" href="#menu3">Patient Education</a></li>
          <li className="tabText"><a data-toggle="tab" href="#menu4">Symposium Content</a></li>
          <li className="tabText"><a data-toggle="tab" href="#menu5">Member Directory</a></li>
      </ul>

      <div className="tab-content">
          <div id="home" className="tab-pane fade in active">
              <h3>Newsletters</h3>
                  <p className="bioText"><br/>Newsletter Links Here</p>
          </div>

          <div id="menu2" className="tab-pane fade">
              <h3>Professional Development</h3>
                  <p className="bioText"><br/>Clnical Practice Guidelines, etc.</p>
          </div>

          <div id="menu3" className="tab-pane fade">
              <h3>Printables</h3>
                  <p className="bioText">\<br/>Brochures, etc. (links coming)</p>
          </div>

          <div id="menu4" className="tab-pane fade">
              <h3>Patient Education</h3>
                  <p className="bioText"><br/>Links to Patient Resources Here</p>
          </div>

          <div id="menu5" className="tab-pane fade">
              <h3>Symposium Content</h3>
                  <p className="bioText"><br/>Symposium Videos and Printable Documents</p>
          </div>
          <div id="menu6" className="tab-pane fade">
              <h3>Member Directory</h3>
                  <p className="bioText"><br/>Connect with other members using the directory!</p>
          </div>
      </div>
  </div>
  </div>

  );
export default Exclusive;
