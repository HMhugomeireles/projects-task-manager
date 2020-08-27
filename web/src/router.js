import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Notfound from "./pages/Notfound";
import ProtectRoute from "./helpers/protectRoute";

function RouterHandler() {
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
        </ProtectRoute>
        <Route path="*">
          <Notfound />
        </Route>
      </Switch>
    </Router>
  );
}

export default RouterHandler;
