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
          < img  className="jumbo-image" src={data.image} alt={data.alt}/>
        </div>
      </div></div>
    );
  }
}
export default Jumbotronitem;
