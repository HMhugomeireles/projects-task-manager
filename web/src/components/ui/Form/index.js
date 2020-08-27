import React from "react";
import form from "./form.module.css";

function Form({ handleSubmit, children, boxStyles }) {
  return (
    <div className={boxStyles ? boxStyles : form.content}>
      <form onSubmit={handleSubmit}>{children}</form>
    </div>
  );
}

export default Form;
