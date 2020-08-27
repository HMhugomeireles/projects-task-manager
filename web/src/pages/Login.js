import React from "react";
import { Redirect } from "react-router-dom";

import { AuthenticationContext } from "../context/AuthContext";
import LoginContainer from "../components/container/LoginContainer";
import CreateAccountContainer from "../components/container/CreateAccountContainer";

import Layout from "../components/ui/Layout";

function Login() {
  const { isAuthenticated } = React.useContext(AuthenticationContext);

  return (
    <React.Fragment>
      {isAuthenticated() && <Redirect to="/dashboard" />}
      <Layout>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <LoginContainer />
          <CreateAccountContainer />
        </div>
      </Layout>
    </React.Fragment>
  );
}

export default Login;
