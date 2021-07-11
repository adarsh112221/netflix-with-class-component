import React, { Component } from "react";
import Jumbodata from "../fixtures/Jumbodata.json";
import Jumbotronitem from "./Jumbotronitem";
class Jumbotron extends Component {
  render() {
    return (
      <div>
        {Jumbodata.map((item) => (
          <Jumbotronitem key={item.id} data={item} />
        ))}
      </div>
    );
  }
}

export default Jumbotron;
