import React from "react";
import { Redirect } from "react-router-dom";

import { AuthenticationContext } from "../../services/context/AuthContext";
import LoginContainer from "../../components/container/LoginContainer";
import CreateAccountContainer from "../../components/container/CreateAccountContainer";

import Layout from "../../components/ui/Layout";
import Brand from "../../components/ui/Brand";
import loginStyles from "./loginpage.module.css";

function Login() {
  const { isAuthenticated } = React.useContext(AuthenticationContext);

  return (
    <Layout>
      {isAuthenticated() && <Redirect to="/dashboard" />}
      <div className={loginStyles.container}>
        <div className={loginStyles.brandHeader}>
          <Brand />
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
