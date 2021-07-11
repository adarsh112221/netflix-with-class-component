import React, { Component } from "react";
class Jumbotronitem extends Component {
  render() {
    const { data } = this.props;

    return (
      <div className="jumbo-Cointainer">
      <div className={`jumbo-item  ${data.direction}`}>
        <div className="jumbo-Pane">
          <h1 className="jumbo-title">{data.title}</h1>
          <h2 className="jumbo-subTitle">{data.subTitle}</h2>
        </div>
        <div className="jumbo-Pane">
          <div className="jumbo-Image" ><img src={data.image} alt={data.alt}/></div>
        </div>
      </div></div>
    );
  }
}
export default Jumbotronitem;
