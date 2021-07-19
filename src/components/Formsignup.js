import React, { Component } from "react";
import { Link } from "react-router-dom";

class Formsignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Emailaddress: "",
      password: "",
      confirmpassword: "",
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
  setconfirmpassword = (e) => {
    this.setState({
      confirmpassword: e.target.value,
    });
  };
  Check = () => {
    const { Emailaddress, password, confirmpassword } = this.state;
    if (Emailaddress !== "" && password !== "" && confirmpassword !== "") {
      return true;
    }
    return false;
  };
  render() {
    const { Emailaddress, password, confirmpassword } = this.state;
    return (
      <div className="form-container">
        <h1 className="form-title">Sign up</h1>
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
          <input
            className="form-input"
            type="password"
            onChange={this.setconfirmpassword}
            value={confirmpassword}
            placeholder="Confirm password"
          />

          {this.Check() ? (
            <button className="form-submit">Sign Up</button>
          ) : (
            <button disabled className="form-submit">
              Sign Up
            </button>
          )}
        </form>
        <p className="form-text">
          Already a User?
          <Link className="form-link" to="/signin">
            Sign In
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

export default Formsignup;
