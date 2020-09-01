import React from "react";

import ProjectsApi from "../../../services/api/Projects";

import { AuthenticationContext } from "./../../../services/context/AuthContext";
import Projects from "./../../ui/Composed/Projects";
import Header from "./../../ui/Composed/Header";

function DashboardContainer() {
  const { user } = React.useContext(AuthenticationContext);

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

  function handleCheck(taskId) {
    console.log("TaskId", taskId);
  }

  function handleCheckboxChange(event) {
    console.log("TaskId", event.target);
  }

  React.useEffect(() => {
    async function fetchProject() {
      const result = await ProjectsApi.getAllProjects(user.token);

      // need validate the request
      console.log("Projects", result);

      if (!result.error) {
        setProjects(result.data.projects);
      }
    }
    fetchProject();
  }, [user.token]);

  return (
    <div>
      <Header />
      <Projects
        projects={{
          items: projects,
          actions: {
            handleCheck,
            handleCheckboxChange,
          },
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
