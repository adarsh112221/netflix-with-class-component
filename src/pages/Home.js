import React, { Component } from "react";
import Accordian from "../components/Accordian";
import Footer from "../components/footer";
import Optform from "../components/Opt-form";
import Jumbotron from "../components/Jumbotron";
import Header from "../components/Header";
import Feature from "../components/Feature";
export class Home extends Component {
  render() {
    return (
      <>
        <Header>
          
        </Header>
        <Jumbotron />
        <Accordian />
        <Footer />
      </>
    );
  }
}