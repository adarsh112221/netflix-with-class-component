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
          <Browse user={user} {...props} />
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

function IsUserRedirect({ user, loggedInPath, Comp, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if (!user) {
          return <Comp/>;
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
  componentDidMount(){
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem("authUser", JSON.stringify(authUser));
        this.setState({ user: authUser });
      } else {
        localStorage.removeItem("authUser");
        this.setState({ user: null });
      }
    });
    return () => listener();
  }

  render() {
    const { user } = this.state;
    return (
      <Router>
        <IsUserRedirect
          user={user}
          Comp={Home}
          loggedInPath={BROWSE}
          exact
          path={HOME}
        />
        <IsUserRedirect
          user={user}
          Comp={Signup}
          loggedInPath={BROWSE}
          exact
          path={SIGNUP}
        />
        <IsUserRedirect
          user={user}
          Comp={Signin}
          loggedInPath={BROWSE}
          exact
          path={SIGNIN}
        />
        <PrivateRoute user={user} path={BROWSE} />
      </Router>
    );
  }
}

export default App;
