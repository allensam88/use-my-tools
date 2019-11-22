import React from "react";
import "../Components.css";
import logo from "../img/Wht-Logo.png";
import { Link } from "react-router-dom";

const NavBarLogin = () => {
  return (
    <nav className="navbar navbar-custom">
      <Link to="/">
        <img src={logo} alt={"logo"} />
      </Link>
    </nav>
  );
};

export default NavBarLogin;
