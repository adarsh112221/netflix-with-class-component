import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { configureStore } from "./store";
import { Provider } from "react-redux";
import { firebase } from "./lib/firebase.prod";
const store = configureStore();
ReactDOM.render(
  <Provider firebase={firebase} store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
