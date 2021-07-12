import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer-main">
        <a href="#" style={{marginBottom:'40px',color:'gray',textDecoration:'none'}}>Questions?Call 000-8000-080-1843</a>
        <div className="footer-break"/>
        <div className="footer-row">
          <div className="footer-coloumn">
            <a href="#" className="footer-link">FAQ</a>
            <a href="#" className="footer-link">Investor Relations</a>
            <a href="#" className="footer-link">Ways To Watch</a>
            <a href="#" className="footer-link">Corporate Information</a>
            <a href="#" className="footer-link">Netflix Orignals</a>``
          </div>
          <div className="footer-coloumn">
            <a href="#" className="footer-link">Help Center</a>
            <a href="#" className="footer-link">Jobs</a>
            <a href="#" className="footer-link">Terms of Use</a>
            <a href="#" className="footer-link">Contact Us</a>
          </div>
          <div className="footer-coloumn">
            <a href="#" className="footer-link">Account</a>
            <a href="#" className="footer-link">Redeem Gift Cards</a>
            <a href="#" className="footer-link">Cookie Prefrences</a>
            <a href="#" className="footer-link">Legal Notices</a>
          </div>
          <div className="footer-coloumn">
            <a href="#" className="footer-link">Media Centre</a>
            <a href="#" className="footer-link">Buy Gift Cards</a>
            <a href="#" className="footer-link">Cookie Prefrences</a>
            <a href="#" className="footer-link">Legal Notices</a>
          </div>
        </div>
        <div className="footer-break"/>
            <div className="footer-text">Netflix India
        </div>
      </div>
    );
  }
}

export default Footer;
