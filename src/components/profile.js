import React, { Component } from "react";
import Logo from "../logo.svg";
import { Link } from "react-router-dom";
class Profile extends Component {
    adarsh=()=>{
        this.setState({name:"adarsh"})
    }
  render() {
    const { user,loading,src,name} = this.props;
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
            <li className="profile-item" onClick={()=>this.props.setShow()}>
              <img
                className="profile-picture"
                src={
                  !loading&&user.photoURL!=null
                    ? `/images/users/${src}.png`
                    : "images/misc/loading.gif"
                }
              />
              <p className="profile-Name">
                {!loading&&user.displayName!=null ?name:null}
              </p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Profile;
