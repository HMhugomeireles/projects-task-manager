import React from "react";

import Form from "../../Form";
import Input from "../../Input";
import Button from "../../Button";

import login from "./login.module.css";
import Message from "../../Message";

function Login(props) {
  return (
    <Form handleSubmit={props.actions.handleLogin}>
      <h2 style={{ textAlign: "center" }}>Login</h2>
      <Input
        details={{
          className: login.input,
          type: "text",
          name: "username",
          value: props.dataForm.username,
          placeholder: "Username",
          actions: {
            handleInputChange: props.actions.handleInputChange,
          },
        }}
      />

      <Input
        details={{
          className: login.input,
          type: "password",
          name: "password",
          value: props.dataForm.password,
          placeholder: "Password",
          autocomplete: "current-password",
          actions: {
            handleInputChange: props.actions.handleInputChange,
          },
        }}
      />

      {props.errorMessage !== "" ? (
        <Message type="error">{props.errorMessage}</Message>
      ) : null}

      <Button className={login.btn} buttonType="submit">
        Login
      </Button>
    </Form>
  );
}

export default Login;
