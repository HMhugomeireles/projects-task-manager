import React from "react";
import { useHistory } from "react-router-dom";
import { AuthenticationContext } from "../../../context/AuthContext";

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

    const auth = await authenticationUser(loginForm).catch((err) =>
      console.log("Error authentication", err)
    );

    if (typeof auth === "string") {
      setMessageError(auth);
      return;
    }

    if (auth === true) {
      history.push("/dashboard");
    }
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
