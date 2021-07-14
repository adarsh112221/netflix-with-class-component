import React, { Component } from "react";
import Optform from "./Opt-form";

class Header extends Component {
  render() {
    return (
      <div className="header-background">
        <div className="header-container">
            { <a><img/></a> /*acctually these are lin ks of react-dom */}
        </div>
        <div className="feature-container">
            <h1 className="faeture-title"></h1>
            <h2 className="faeture-subtitle"></h2>
            <Optform/>
        </div>
      </div>
    );
  }
}

export default Header;
