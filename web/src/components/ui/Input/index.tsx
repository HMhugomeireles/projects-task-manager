import React from "react";

type InputPropsType = {
  details: {
    className: string;
    type: React.HTMLInputTypeAttribute;
    name: string;
    value: string | number | readonly string[] | undefined;
    placeholder: string;
    actions: {
      handleInputChange: React.ChangeEventHandler<HTMLInputElement>
    }
  },
  autocomplete?: string | undefined;
}

export function Input(props: InputPropsType) {
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
