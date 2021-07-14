import React, { Component } from "react";
import Optform from "./Opt-form";

class Feature extends Component {
  render() {
    return (
      <div className="feature-container">
        <h1 className="feature-title">Unlimited films, TV shows and more.</h1>
        <h2 className="feature-subtitle">
          Watch anywhere . cancle at any time.
        </h2>
        <Optform />
      </div>
    );
  }
}

export default Feature;
