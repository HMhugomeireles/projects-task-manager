import React from "react";
import project from "./project.module.css";
import { Link } from "react-router-dom";

function Project({ children, projectName, projectId }) {
  return (
    <Link to={`/dashboard/project/${projectId}`} className={project.link}>
      <div className={project.container}>
        <div className={project.containerHeader}>{projectName}</div>
        <div className={project.containerBody}>{children}</div>
      </div>
    </Link>
  );
}

export default Project;
