import React, { Component } from "react";
import Logo from "../logo.svg";
import { Link } from "react-router-dom";
class Profile extends Component {
  render() {
      const{loading,src,name}=this.props
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
                src={!loading?`/images/users/${src}.png`:'images/misc/loading.gif'}
              />
              <p className="profile-Name">{!loading ? name: null}</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Profile;
