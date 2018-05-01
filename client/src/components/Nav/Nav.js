import React from "react";
import {Link} from "react-router-dom";
import "./Nav.css";

const Nav = () => (

<nav className="navbar navbar-default navbar-fixed-top">
  <div className="navbar-brand">
  </div>
    <div className="container-fluid">
      <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>

        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="#myCarousel">HOME</Link></li>
            <li><Link to="#memberships">MEMBERSHIP</Link></li>
            <li><Link to="#newEvents">EVENTS</Link></li>
            <li><Link to="#boardmembers">LEADERSHIP</Link></li>
            <li><Link to="#contact">CONTACT</Link></li>

            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" href="">AWARDS
              <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="www.endo-nurses.org/2018-ENS-Grant-Awards">ENS Poster Award</a></li>
                  <li><a href="www.endo-nurses.org/2018-Betsy-Love-McClung-Award">Betsy Love McClung Award</a></li>
                  <li><a href="www.endo-nurses.org/page-1428935">Media</a></li>
                </ul>
            </li>
            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" href="#">GRANTS
              <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><Link to="/">Clinical Project Grant</Link></li>
                  <li><Link to="/">Clinical Research Grant</Link></li>
                  <li><Link to="/">Travel Grant Application</Link></li>
                </ul>
            </li>
            <li><a href="wwww.google.com"><span className="glyphicon glyphicon-search"></span></a></li>
          </ul>
        </div>
      </div>
    </div>
</nav>


);

export default Nav;
