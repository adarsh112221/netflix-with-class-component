import React, { Component } from "react";
import Logo from "../logo.svg";
import { Link } from "react-router-dom";
class Profile extends Component {
  render() {
      const{user}=this.props
    return (
      <div>
        <div className="header-container">
          <Link to={"/"}>
            <img alt="netflix" src={Logo} className="header-Logo" />
          </Link>
        </div>
        <div className="profiles-container">
          <h1>Who's watching?</h1>
          <ul className="profile-list">
            <li className="profile-item">
              <img
                className="profile-picture"
                src={`/images/users/${user.photoURL}.png`}
              />
              <p className="profile-Name">{user.displayName}</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Profile;
