import React from "react";
import project from "./project.module.css";

function Project({ children, projectName }) {
  return (
    <div className={project.container}>
      <header className={project.containerHeader}>{projectName}</header>
      <div className={project.containerBody}>{children}</div>
    </div>
  );
}

export default Project;
