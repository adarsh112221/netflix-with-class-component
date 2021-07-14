import React, { Component } from "react";

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { BROWSE, HOME, SIGNIN, SIGNUP } from "../fixtures/Routes";
import {Home,Signin,Signup,Browse} from '../pages/index'
class App extends Component {
  render() {
    return (
      <Router>
        
        <Route exact path={HOME}><Home/></Route>
        <Route exact path={BROWSE}><Signin/></Route>
        <Route exact path={SIGNIN}><Signup/></Route>
        <Route exact path={SIGNUP}><Browse/></Route>
        
      </Router>
    );
  }
}

export default App;
