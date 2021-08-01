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

function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if (!user) {
          return children;
        }

        if (user) {
          return (
            <Redirect
              to={{
                pathname: loggedInPath,
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: JSON.parse(localStorage.getItem("authUser")),
    };
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem("authUser", JSON.stringify(authUser));
        this.setState({ user: authUser });
      } else {
        localStorage.removeItem("authUser");
        this.setState({ user: null });
      }
    });
  }

  render() {
    const { user } = this.state;
    console.log(user);
    return (
      <Router>
        <IsUserRedirect
          user={user}
          loggedInPath={BROWSE}
          path={SIGNUP}
        >
          <Signup />
        </IsUserRedirect>

        <IsUserRedirect
          user={user}
          loggedInPath={BROWSE}
          path={SIGNIN}
        >
          <Signin />
        </IsUserRedirect>
        <IsUserRedirect user={user} loggedInPath={BROWSE} exact path={HOME}>
          <Home />
        </IsUserRedirect>
        <PrivateRoute user={user} path={BROWSE} />
      </Router>
    );
  }
}

export default App;
