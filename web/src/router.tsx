import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ProtectRoute from "./helpers/protectRoute";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Notfound from "./pages/Notfound";
import Project from "./pages/Project";

export function RouterHandler() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <ProtectRoute>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/dashboard/project/:id" render={Project} />
        </ProtectRoute>
        <Route path="*">
          <Notfound />
        </Route>
      </Switch>
    </Router>
  );
}
