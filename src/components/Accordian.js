import React, { Component } from "react";
import faqs from "../fixtures/faqs.json";
import AccordianItem from "./AccordianItem";
import Optform from "./Opt-form";
class Accordian extends Component {
  render() {
    return (
      <div className="accordian-container">
          <div className="accordian-inner">
            <div className="accordian-frame">
        <h1 className="accordian-title">Frequently Asked Questions</h1>
        {faqs.map((item) => (
          <AccordianItem key={item.id} item={item}></AccordianItem>
        ))}</div>
        <Optform/>
      </div>
      </div>
    );
  }
}

export default Accordian;
