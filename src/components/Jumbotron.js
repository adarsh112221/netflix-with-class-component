import React, { Component } from "react";
import Jumbodata from "../fixtures/Jumbodata.json";
import Jumbotronitem from "./Jumbotronitem";
import Optform from "./Opt-form";
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
