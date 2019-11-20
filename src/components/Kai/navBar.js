import React from "react";
import "../../Components.css";
import { Link } from "react-router-dom";
import logo from "../../img/Wht-Logo.png";


const NavBar = () => {
    const userId = localStorage.getItem('userId');

    return (
    <nav className="navbar navbar-custom">
      <img src={logo} alt={"logo"} />
      <ul className="nav">
        <li className="nav-item">
          <Link to="/tools" className="nav-link">Tool List</Link>
        </li>
        <li className="nav-item">
          <Link to={`/user/${userId}`} >
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
