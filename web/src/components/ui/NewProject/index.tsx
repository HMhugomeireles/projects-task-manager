import React from "react";

import { Button } from "../Button";
import { Form } from "../Form";
import { Input } from "../Input";

import newproject from "./newproject.module.css";

type NewProjectPropsType = {
  dataInput: {
    title: string;
  }
  actions: {
    handleSubmitNewProject: React.FormEventHandler<HTMLFormElement>;
    handleInputChange: React.ChangeEventHandler<HTMLInputElement>
  }
}

export function NewProject(props: NewProjectPropsType) {
  return (
    <div className={newproject.container}>
      <Form
        handleSubmit={props.actions.handleSubmitNewProject}
        boxStyles={newproject.formCreate}
      >
        <div className={newproject.space}>
          <h2 className={newproject.title}>Create a new project</h2>
          <Input
            details={{
              className: newproject.input,
              type: "text",
              name: "title",
              value: props.dataInput.title,
              placeholder: "New project name",
              actions: {
                handleInputChange: props.actions.handleInputChange,
              },
            }}
          />

          <Button className={newproject.btn} buttonType="submit">
            Create Project
          </Button>
        </div>
      </Form>
    </div>
  );
}
