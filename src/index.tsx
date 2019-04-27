import "./index.scss";
import "./polyfills";

import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import Routing from "./routing";

ReactDOM.render(
  <Routing/>, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service work ers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
