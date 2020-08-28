import React from "react";
import { Redirect } from "react-router-dom";

import { AuthenticationContext } from "../../context/AuthContext";
import LoginContainer from "../../components/container/LoginContainer";
import CreateAccountContainer from "../../components/container/CreateAccountContainer";

import Layout from "../../components/ui/Layout";
import loginStyles from "./loginpage.module.css";

function Login() {
  const { isAuthenticated } = React.useContext(AuthenticationContext);

  return (
    <Layout>
      {isAuthenticated() && <Redirect to="/dashboard" />}
      <div className={loginStyles.container}>
        <h1 className={loginStyles.title}>Personal Projects task Management</h1>
        <LoginContainer />
        <CreateAccountContainer />
      </div>
    </Layout>
  );
}

export default Login;
