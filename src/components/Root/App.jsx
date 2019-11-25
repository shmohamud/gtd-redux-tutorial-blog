import React from "react";
import DumpList from "../braindumps/List";
import NavBar from "../navbar";
import ProjectList from "../projects/List";
import ActionsContainer from "../../containers/actions/ActionsContainer";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/actions">
          <ActionsContainer />
        </Route>
        <Route exact path="/projects">
          <ProjectList />
        </Route>
        <Route exact path="/braindumps">
          <DumpList />
        </Route>

        <Route path="/">
          <ActionsContainer />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
