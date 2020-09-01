import React from "react";
import form from "./form.module.css";

function Form({ handleSubmit, children, boxStyles }) {
  return (
    <form
      className={boxStyles ? boxStyles : form.content}
      onSubmit={handleSubmit}
    >
      {children}
    </form>
  );
}

export default Form;
