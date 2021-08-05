import React, { Component } from "react";
import Logo from "../logo.svg";
import joker from "../joker1.jpg";
import { Link } from "react-router-dom";

class HeaderBrowse extends Component {
  constructor(props)
  {
    super(props)
    this.state={
      searchclass:false
    }
  }
  searchclassset=()=>{
    const{searchclass}=this.state
    if(searchclass==true)
    {
      this.setState({
        searchclass:false
      })
    }
    if(searchclass==false)
    {
      this.setState({
        searchclass:true
      })
    }
  }
  render() {
    const { src } = this.props;
    const{searchclass}=this.state
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
            <div className="header-category">
              <p>Series</p>
              <p>films</p>
            </div>
          </div>
          <div className="search-container">
          <div className="header-search">
            <button onClick={()=>this.searchclassset()} >
              <img src="/images/icons/search.png" />
            </button>
            <input className={searchclass?"header-search-input2":"header-search-input1"} 
              placeholder="search films and series
            "
            />
          </div>
          <div className="header-profile">
            <img src="/images/users/1.png" className="header-picture"/>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderBrowse;
