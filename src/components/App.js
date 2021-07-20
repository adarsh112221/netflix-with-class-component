import React, { Component } from "react";
import { firebase } from "../lib/firebase.prod";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { BROWSE, HOME, SIGNIN, SIGNUP } from "../fixtures/Routes";
import { Home, Signin, Signup, Browse } from "../pages/index";
class App extends Component {
  render() {
    console.log(firebase)
    return (
      <Router>
        <Route exact path={HOME}>
          <Home />
        </Route>
        <Route exact path={BROWSE}>
          <Browse />
        </Route>
        <Route exact path={SIGNIN}>
          <Signin />
        </Route>
        <Route exact path={SIGNUP}>
          <Signup />
        </Route>
      </Router>
    );
  }
}

export default App;
