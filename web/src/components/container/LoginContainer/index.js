import React from "react";
import { useHistory } from "react-router-dom";
import { AuthenticationContext } from "../../../services/context/AuthContext";

import Login from "../../ui/Login";

function LoginContainer() {
  const { authenticationUser } = React.useContext(AuthenticationContext);

  const history = useHistory();

  const [loginForm, setLoginForm] = React.useState({
    username: "",
    password: "",
  });

  const [messageError, setMessageError] = React.useState("");

  async function handleLogin(event) {
    event.preventDefault();

    // TODO need todo input validation

    authenticationUser(loginForm);
  }

  function handleInputChange(event) {
    setLoginForm({ ...loginForm, [event.target.name]: event.target.value });
  }

  return (
    <Login
      dataForm={loginForm}
      actions={{
        handleLogin,
        handleInputChange,
      }}
      errorMessage={messageError}
    />
  );
}

export default LoginContainer;
