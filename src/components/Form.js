import React, { Component } from "react";
import { Link } from "react-router-dom";

class Form extends Component {
  render() {
    return (
      <div className="form-container">
        <h1 className="form-title">Sign In</h1>
        <form className="form-base">
          <input className="form-input" placeholder="Email Address" />
          <input
            className="form-input"
            type="password"
            placeholder="password"
          />
          <button disabled className="form-submit">
            Sign In
          </button>
        </form>
        <p className="form-text">
          New To Netflix?
          <Link className="form-link" to="/signup">
            Sign Up now
          </Link>
        </p>
        <p className="form-small-text">
          This page is protected by Google reCAPTCHA to ensure you are not a
          bot. Learn more.
        </p>
      </div>
    )
  }
}

export default Form;
