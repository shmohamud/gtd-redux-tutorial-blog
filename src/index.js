import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/store";
import Root from "./components/Root";
import * as serviceWorker from "./serviceWorker";
ReactDOM.render(<Root store={store} />, document.getElementById("root"));
serviceWorker.unregister();
