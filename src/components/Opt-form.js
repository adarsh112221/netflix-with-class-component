import React, { Component } from "react";

class Optform extends Component {
  render() {
    return (
      <div className="opt-form-container">
        <input placeholder="Email address" className="opt-form-Input" />
        <button class="opt-form-button"> Try it now<img src="/images/icons/chevron-right.png" alt="Try Now"/></button>
        <div className="opt-form-break"></div>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
      </div>
    );
  }
}

export default Optform;
