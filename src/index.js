import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import IntensityForce from "./charts/Intensity_force";

import { BrowserRouter } from "react-router-dom";

import "./sass/index.scss";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
