import React, { Component } from "react";
import Logo from "../logo.svg";

import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { Comp } = this.props;
    return (
      <div className="header-background">
        <div className="header-container">
          <Link to={"/"}>
            <img alt="netflix" src={Logo} className="header-Logo"/>
          </Link>
          <Link to={"/signin"} className="header-Button">
            Sign In
          </Link>
        </div>
        <Comp />
      </div>
    );
  }
}

export default Header;
