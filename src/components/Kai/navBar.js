import React from "react";
import "../../NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-custom">
      <a className="navbar-brand" href="#">
        Use My Tools
      </a>
      <ul className="nav">
        <li className="nav-item">
          <Link to="/toolList">
            <a className="nav-link" href="#">
              Link
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/profile">
            <a className="nav-link" href="#">
              Profile
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
