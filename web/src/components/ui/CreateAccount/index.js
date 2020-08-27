import React from "react";

import Form from "../Form";
import Input from "../Input";
import Button from "../Button";

import createAccount from "./createAccount.module.css";
import Message from "../Message/index";

function CreateAccount(props) {
  return (
    <Form handleSubmit={props.actions.handleSubmit}>
      <h2 style={{ textAlign: "center" }}>Create Account</h2>
      <Input
        details={{
          className: createAccount.input,
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
          className: createAccount.input,
          type: "password",
          name: "password",
          value: props.dataForm.password,
          placeholder: "Password",
          autocomplete: "new-password",
          actions: {
            handleInputChange: props.actions.handleInputChange,
          },
        }}
      />

      <Input
        details={{
          className: createAccount.input,
          type: "password",
          name: "repeatPassword",
          value: props.dataForm.repeatPassword,
          placeholder: "Repeat password",
          autocomplete: "new-password",
          actions: {
            handleInputChange: props.actions.handleInputChange,
          },
        }}
      />

      {props.status.message !== "" ? (
        <Message type={props.status.type === "error" ? "error" : "success"}>
          {props.status.message}
        </Message>
      ) : null}

      <Button className={createAccount.btn} buttonType="submit">
        Login
      </Button>
    </Form>
  );
}

export default CreateAccount;
