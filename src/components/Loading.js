import React, { Component } from "react";

class Loading extends Component {
  render() {
    const { src } = this.props;
    return (
      <div className="spinner">
        <img className='picture' src={`images/users/${src}.png`}/>
      </div>
    );
  }
}

export default Loading;
