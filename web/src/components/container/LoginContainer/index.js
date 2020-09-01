import React from "react";
import { useHistory } from "react-router-dom";
import { AuthenticationContext } from "../../../services/context/AuthContext";

import Login from "../../ui/Composed/Login";

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

    const result = await authenticationUser(loginForm);

    if (result === "Success") {
      history.push("/dashboard");
      return;
    }

    setMessageError(result);
  }

  function handleInputChange(event) {
    setLoginForm({ ...loginForm, [event.target.name]: event.target.value });
  }

  React.useEffect(() => {
    let removeMessage;
    if (messageError !== "") {
      removeMessage = setTimeout(() => {
        setMessageError("");
      }, 4000);
    }
    return () => clearTimeout(removeMessage);
  }, [messageError, setMessageError]);

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
