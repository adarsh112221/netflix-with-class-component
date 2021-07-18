import React, { Component } from "react";
import Footer from "../components/footer";
import Form from "../components/Form";
import Header from "../components/Header";
export class Signin extends Component {
  render() {
    return (
      <>
        <Header Comp={Form}/>
        <Footer />
      </>
    );
  }
}
