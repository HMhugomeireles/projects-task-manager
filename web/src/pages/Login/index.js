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
        <div className={loginStyles.brandHeader}>
          <h1 className={loginStyles.brandTitle}>
            Pro<span>Task</span>
          </h1>
          <p className={loginStyles.brandP}>
            Personal Projects task Management
          </p>
        </div>
        <LoginContainer />
        <CreateAccountContainer />
      </div>
    </Layout>
  );
}

export default Login;
