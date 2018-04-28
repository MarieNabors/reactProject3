import React from "react";
import "./Eduction.css";

const Education = () => (

<div  className="bg-1">
    <div className="container">
        <h1 className="text-center">ENS Education</h1>
    </div>

      <div className="col-sm-6">
        <div className="thumbnail">
            // <img className="Boston" src={require('./pic/boston.jpg')} alt="Boston" href="https://www.aace.com/annualmeeting/aace-2018" />
                <p><strong>Professional Development</strong></p>
                // <p>May 16-20</p>
            <button className="btn"><a href=" " target="_blank">Resources</a></button>
        </div>
      </div>



        <div className="col-sm-6">
          <div className="thumbnail">
            // <img className="CapeTown" src={require('./pic/cape.jpg')} alt="Cape Town" href="http://www.ice2018.org/" />
                <p><strong>Symposium Content</strong></p>
                // <p>Symposium Videos</p>
            <button className="btn"><a href="http://www.ice2018.org/" target="_blank">Videos</a></button>
          </div>
        </div>
</div>

);

export default Events;
