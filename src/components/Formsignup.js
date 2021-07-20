import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { BROWSE } from "../fixtures/Routes";
import { firebase } from "../lib/firebase.prod";
class Formsignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Emailaddress: "",
      password: "",
      FirstName: "",
      error: "",
      isloggedin: false,
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
  setname = (e) => {
    this.setState({
      FirstName: e.target.value,
    });
  };
  Check = () => {
    const { Emailaddress, password, FirstName } = this.state;
    if (Emailaddress !== "" && password !== "" && FirstName !== "") {
      return true;
    }
    return false;
  };
  handleSignin = (event) => {
    const { Emailaddress, FirstName, password } = this.state;
    event.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(Emailaddress, password)
      .then((result) => {
        result.user
          .updateProfile({
            displayName: FirstName,
            photoURl: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            this.setState({ isloggedin: true });
          });
      })
      .catch((errors) => {
        console.log("hello");
        this.setState({
          Emailaddress: "",
          password: "",
          FirstName: "",
          error: errors.message,
        });
      });
  };
  render() {
    const { Emailaddress, password, isloggedin, FirstName, error } = this.state;
    if(isloggedin)
    { return <Redirect to={BROWSE}/>}
    return (
      <div className="form-container">
        <h1 className="form-title">Sign up</h1>
        <form className="form-base" onSubmit={this.handleSignin}>
          {error && <div className="form-error">{error}</div>}
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
            onChange={this.setname}
            value={FirstName}
            placeholder="Name"
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
