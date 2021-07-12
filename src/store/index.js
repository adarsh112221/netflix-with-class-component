import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import accordian from "../reducers";
// import combineReducers from "../reducers";
let store;
export function configureStore() {
  store = createStore(accordian, applyMiddleware(thunk, logger));
  return store;
}
