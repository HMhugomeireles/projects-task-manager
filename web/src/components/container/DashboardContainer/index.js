import React from "react";
import Axios from "axios";

import { AuthenticationContext } from "./../../../context/AuthContext";
import Projects from "./../../ui/Projects";
import { Api } from "../../../Api/api";

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

  React.useEffect(() => {
    Axios({
      method: Api.projects.allByUser.method,
      url: Api.projects.allByUser.url(),
      headers: {
        authorization: `Bearer ${user.token}`,
      },
    })
      .then((response) => {
        //TODO check if have error
        setProjects(response.data.projects);
        saveToken(response.data.newToken);
      })
      .catch((err) => console.error(err));
  }, []);

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
