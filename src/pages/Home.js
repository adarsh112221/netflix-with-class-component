import React, { Component } from "react";
import Accordian from "../components/Accordian";
import Footer from "../components/footer";
import Optform from "../components/Opt-form";
import Jumbotron from "../components/Jumbotron";
export class Home extends Component {
  render() {
    return (
      <>
        <Jumbotron />
        <Accordian />
        <Footer />
      </>
    );
  }
}


