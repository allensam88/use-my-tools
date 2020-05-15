import React from "react";
import "../Components.css";
import { Link } from "react-router-dom";
import logo from "../img/Wht-Logo.png";

const NavBar = () => {
  const userId = localStorage.getItem("userId");
  return (
    <nav className="navbar navbar-custom">
      <Link to="/">
        <img src={logo} alt={"logo"} />
      </Link>
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" to="/tools">
            Tools
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={`/user/${userId}`}>
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
