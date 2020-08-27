import React from "react";
import message from "./message.module.css";

const ErrorMessage = ({ type, children }) => (
  <div className={message[`container-${type}`]}>{children}</div>
);

export default ErrorMessage;
