import React, { Component } from "react";
import { Link } from "react-router-dom";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Emailaddress: "",
      password: "",
    };
  }
  setemailaddress = (e) => {
    this.setState({
      Emailaddress: e.target.value,
    });
  };
  setpassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  Check = () => {
    const { Emailaddress, password } = this.state;
    if (Emailaddress !== "" && password !== "") {
      return true;
    }
    return false;
  };
  render() {
    const { Emailaddress, password } = this.state;
    return (
      <div className="form-container">
        <h1 className="form-title">Sign In</h1>
        <form className="form-base">
          <input
            className="form-input"
            onChange={this.setemailaddress}
            value={Emailaddress}
            placeholder="Email Address"
          />

          <input
            className="form-input"
            type="password"
            onChange={this.setpassword}
            value={password}
            placeholder="password"
          />

          {this.Check() ? (
            <button  className="form-submit">Sign In</button>
          ) : (
            <button disabled  className="form-submit">
              Sign In
            </button>
          )}
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
    );
  }
}

export default Form;
