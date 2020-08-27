import React from "react";

function Input(props) {
  return (
    <input
      className={props.details.className}
      type={props.details.type}
      name={props.details.name}
      value={props.details.value}
      placeholder={props.details.placeholder}
      onChange={props.details.actions.handleInputChange}
      autoComplete={props.autocomplete ? props.autocomplete : ""}
    />
  );
}

export default Input;
