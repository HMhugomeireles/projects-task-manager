import React from "react";
import task from "./task.module.css";

export default function Task(props) {
  return (
    <label
      onClick={() => props.actions.handleCheck(props.task.id)}
      className={task.container}
      htmlFor={props.task.description}
    >
      <input
        type="checkbox"
        name={props.task.description}
        checked={props.isChecked}
        onChange={props.actions.handleCheckboxChange}
      />
      {props.task.description}
    </label>
  );
}
