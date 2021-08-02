import React, { Component } from "react";
import Footer from "../components/footer";
import Form from "../components/Form";
import Formsignup from "../components/Formsignup";
import Header from "../components/Header";

export class Signup extends Component {
  render() {
    
    return (
      <>
        <Header  Comp={Formsignup} />
        <Footer />
      </>
    );
  }
}
