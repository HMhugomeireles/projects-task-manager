import React from "react";

import From from "../Form";
import Input from "../Input";
import Button from "../Button";

import newproject from "./newproject.module.css";

function NewProject(props) {
  return (
    <div className={newproject.container}>
      <From
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
      </From>
    </div>
  );
}

export default NewProject;
