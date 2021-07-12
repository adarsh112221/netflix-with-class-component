import React, { Component } from 'react';
import Footer from './footer';
import Jumbotron from './Jumbotron';
class App extends Component {
  render() {
    return (
      <div>
        <Jumbotron/>
        <Footer/>
      </div>
    );
  }
}

export default App;