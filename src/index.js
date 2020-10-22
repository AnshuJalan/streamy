import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import Thunk from "redux-thunk";

import "./index.css";
import App from "./components/App";
import reducers from "./reducers";

const store = createStore(reducers, applyMiddleware(Thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
