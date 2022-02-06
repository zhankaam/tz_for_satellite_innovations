import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/index";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="tz_for_satellite_innovations">
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
