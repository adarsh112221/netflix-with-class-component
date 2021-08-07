import React, { Component } from "react";
import Logo from "../logo.svg";
import joker from "../joker1.jpg";
import { Link } from "react-router-dom";
import { firebase } from "../lib/firebase.prod";
class HeaderBrowse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchclass: false,
      searchTerm: "",
    };
  }
  setSearchTerm = (e) => {
    const { searchTerm } = this.state;
    this.setState(
      () => {
        return {
          searchTerm: e.target.value,
        };
      },
      () => {
        if(searchTerm.length>1)
        this.props.FuseSearch(searchTerm);
      }
    );
  };
  searchclassset = () => {
    const { searchclass } = this.state;
    if (searchclass == true) {
      this.setState({
        searchclass: false,
      });
    }
    if (searchclass == false) {
      this.setState({
        searchclass: true,
      });
    }
  };
  render() {
    const { user, changecategory, category } = this.props;
    const { searchTerm, searchclass } = this.state;
    return (
      <div
        className="header-background"
        style={{
          background: `linear-gradient( to bottom,rgba(0,0,0,0.35),rgba(0,0,0,0.1),rgba(0,0,0,0.35) ),url(${joker}) top left / cover no-repeat`,
        }}
      >
        <div className="header-container">
          <div className="header-Logo">
            <Link to={"/"}>
              <img className="header-Logo" alt="netflix" src={Logo} />
            </Link>
            <p
              onClick={() => changecategory('series')}
              className={`header-category ${
                category == "series" ? "categoryactive" : null
              }`}
            >
              Series
            </p>
            <p
              onClick={() => changecategory('films')}
              className={`header-category ${
                category == "films" ? "categoryactive" : null
              }`}
            >
              films
            </p>
          </div>
          <div className="search-container">
            <div className="header-search">
              <button onClick={() => this.searchclassset()}>
                <img src="/images/icons/search.png" />
              </button>
              <input
                className={
                  searchclass ? "header-search-input2" : "header-search-input1"
                }
                value={searchTerm}
                onChange={this.setSearchTerm}
              />
            </div>
            <div className="header-profile">
              <img src="/images/users/1.png" className="header-picture" />
              <div className="header-dropdown">
                <div className="header-group">
                  <img className="header-picture" src="/images/users/1.png" />
                  <p>{user.displayName}</p>
                </div>
                <div className="header-group ">
                  <p onClick={() => firebase.auth().signOut()}>Sign out</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-feature header-container">
          <h2>Watch Joker Now</h2>
          <p>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks
            connection as he walks the streets of Gotham City. Arthur wears two
            masks -- the one he paints for his day job as a clown, and the guise
            he projects in a futile attempt to feel like he's part of the world
            around him.
          </p>
          <button>Play</button>
        </div>
      </div>
    );
  }
}

export default HeaderBrowse;
