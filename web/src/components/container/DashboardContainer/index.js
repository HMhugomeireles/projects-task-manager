import React from "react";

import { AuthenticationContext } from "./../../../services/context/AuthContext";
import Projects from "./../../ui/Projects";

function DashboardContainer() {
  const { user, saveToken } = React.useContext(AuthenticationContext);

  const [dataInput, setDataInput] = React.useState({
    title: "",
  });
  const [projects, setProjects] = React.useState([]);

  function handleSubmitNewProject(event) {
    event.preventDefault();

    console.log("New project", event.target.value);
  }

  function handleInputChange(event) {
    setDataInput({ ...dataInput, [event.target.name]: event.target.value });
  }

  return (
    <div>
      <Projects
        projects={{
          items: projects,
        }}
        newProject={{
          dataInput,
          actions: {
            handleSubmitNewProject,
            handleInputChange,
          },
        }}
      />
    </div>
  );
}

export default DashboardContainer;
