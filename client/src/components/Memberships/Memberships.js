import React from "react";
import "./Memberships.css";



const Membership = () => (

  <div className="container" id="memberships">
  <h2 className="text-center">MEMBERSHIP TYPES</h2>
    <ul className="nav nav-tabs">
        <li className="active tabText"><a data-toggle="tab" href="#home">Associate/1 Year</a></li>
        <li className="tabText"><a data-toggle="tab" href="#menu6">Associate/2 Years</a></li>
        <li className="tabText"><a data-toggle="tab" href="#menu2">RN 1 Year</a></li>
        <li className="tabText"><a data-toggle="tab" href="#menu3">RN 2 Years</a></li>
    </ul>

    <div className="tab-content">
        <div id="home" className="tab-pane fade in active">
            <h3>Associate (Non-RN) Annual Membership</h3>
                <ul className="bioText">
                  <li>$100.00 (USD)</li>


                <li>  Membership is recognized for one year from the date of membership activation.</li>
                </ul>
        </div>

        <div id="menu2" className="tab-pane fade">
            <h3>Associate (Non-RN) 2 Year Membership</h3>
                <ul className="bioText">
              <li> $180.00 (USD)</li>


                <li>Membership is recognized for 2 years form the date of membership activation.</li>
              </ul>
        </div>

        <div id="menu3" className="tab-pane fade">
            <h3>Full RN Status ~ 1 Year Membership</h3>
                <ul className="bioText">
                <li>$100.00 (USD)</li>


                <li>Membership is recognized for one year from the date of membership activation.</li>
                </ul>
        </div>

        <div id="menu4" className="tab-pane fade">
        <h3>Full RN Status ~ 2 Year Membership</h3>
            <ul className="bioText">
            <li>Full (RN Status) One Year Membership - $100.00 (USD)</li>
            <li>Subscription period: 2 years</li>
            
            <li>Membership is recognized for two years from the date of membership activation.</li>
            </ul>
        </div>

    </div>
</div>

);

export default Membership;
