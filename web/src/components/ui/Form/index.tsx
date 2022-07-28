import React, { PropsWithChildren } from "react";
import form from "./form.module.css";

type FormPropType = PropsWithChildren<{
  handleSubmit: React.FormEventHandler<HTMLFormElement>
  boxStyles?: string;
}>

export function Form({ handleSubmit, children, boxStyles }: FormPropType) {
  return (
    <form
      className={boxStyles ? boxStyles : form.content}
      onSubmit={handleSubmit}
    >
      {children}
    </form>
  );
}
