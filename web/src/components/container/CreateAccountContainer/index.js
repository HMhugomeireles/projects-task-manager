import React from "react";
import CreateAccount from "../../ui/CreateAccount";
import { AuthenticationContext } from "../../../context/AuthContext";

function CreateAccountContainer() {
  const { createUser } = React.useContext(AuthenticationContext);

  const [inputsForm, setInputsForm] = React.useState({
    username: "",
    password: "",
    repeatPassword: "",
  });

  const [status, setStatus] = React.useState({
    type: "",
    message: "",
  });

  async function handleSubmit(event) {
    event.preventDefault();

    if (inputsForm.password !== inputsForm.repeatPassword) {
      setStatus({
        type: "error",
        message: "Passwords are not equal.",
      });
      return;
    }

    const response = await createUser({
      username: inputsForm.username,
      password: inputsForm.password,
    });

    if (response.error) {
      setStatus({
        type: "error",
        message: "Passwords are not equal.",
      });
      return;
    }

    setStatus({
      type: "success",
      message: "Account created. Make login.",
    });
  }

  function handleInputChange(event) {
    setInputsForm({ ...inputsForm, [event.target.name]: event.target.value });
  }

  return (
    <CreateAccount
      dataForm={inputsForm}
      actions={{
        handleSubmit,
        handleInputChange,
      }}
      status={status}
    />
  );
}

export default CreateAccountContainer;
