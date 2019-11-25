import React from "react";
import { Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={customHistory}>
      <Route path="/" component={App} />
    </Router>
  </Provider>
);

export default Root;
