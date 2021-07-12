import React, { Component } from "react";

class AccordianItem extends Component {
  render() {
    const { item } = this.props;
    return (
     
      <div className="accordian-item">
        <div className="accordian-header">{item.header}
        <img src="/images/icons/add.png" alt="close"/></div>
        {/* <div className="accordian-body">{item.body}</div> */}
      </div>
    );
  }
}

export default AccordianItem;
