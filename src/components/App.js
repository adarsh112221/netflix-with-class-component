import React, { Component } from "react";
import { firebase } from "../lib/firebase.prod";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { BROWSE, HOME, SIGNIN, SIGNUP } from "../fixtures/Routes";
import { Home, Signin, Signup, Browse } from "../pages/index";
import { Redirect } from "react-router";
const PrivateRoute = (privateRouteProps) => {
  const { user, path } = privateRouteProps;

  return (
    <Route
      path={path}
      render={(props) => {
        return user ? (
          <Browse {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "signin",
              state: {
                from: props.location,
              },
            }}
          />
        );
      }}
    />
  );
};
class App extends Component {
  render() {
    const user =null;
    console.log(firebase);
    return (
      <Router>
        <Route exact path={HOME}>
          <Home />
        </Route>
        <PrivateRoute user={user} path={BROWSE} />
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
