import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home/home"

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/app" component={App} />
        </div>
    </Router>
)

ReactDOM.render(
  routing,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
