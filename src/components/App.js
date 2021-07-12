import React, { Component } from 'react';
import Accordian from './Accordian';
import Footer from './footer';
import Jumbotron from './Jumbotron';
class App extends Component {
  render() {
    return (
      <div>
        <Jumbotron/>
        <Accordian/>
        <Footer/>
      </div>
    );
  }
}

export default App;