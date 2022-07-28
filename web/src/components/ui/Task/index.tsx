import React from "react";
import task from "./task.module.css";

type TaskPropsType = {
  isChecked?: boolean;
  actions: {
    handleCheck(id: string): void;
    handleCheckboxChange: React.ChangeEventHandler<HTMLInputElement>
  }
  task: {
    id: string;
    description: string;
  }
}

export function Task(props: TaskPropsType) {
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
