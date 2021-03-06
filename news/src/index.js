import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./store";

import Routes from './Routes'
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes/>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
