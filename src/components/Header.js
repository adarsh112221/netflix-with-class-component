import React, { Component } from "react";
import Logo from "../logo.svg";
import Feature from "./Feature";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="header-background">
        <div className="header-container">
          <Link to={"/"}>
            <img alt="netflix" src={Logo} className="header-Logo" />
          </Link>
          <Link to={"/signin"} className="header-Button">
            Sign In
          </Link>
        </div>
        <Feature />
      </div>
    );
  }
}

export default Header;
