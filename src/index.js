import React from "react";
import ReactDOM from "react-dom";
import AppWrapper from "./features/app/AppWrapper";

import { unregister } from "./registerServiceWorker";

import "./styles/css/bootstrap.css";
import "./styles/css/main.css";

ReactDOM.render(<AppWrapper />, document.getElementById("root"));

unregister();
