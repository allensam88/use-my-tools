import React from "react";
import "../Components.css";
import logo from "../img/Wht-Logo.png";

const NavBarLogin = () => {
  return (
    <nav className="navbar navbar-custom">
      <img src={logo} alt={"logo"} />
    </nav>
  );
};

export default NavBarLogin;
