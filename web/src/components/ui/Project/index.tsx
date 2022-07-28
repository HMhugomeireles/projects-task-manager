import React, { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import project from "./project.module.css";

type ProjectPropsType = PropsWithChildren<{
  projectName: string;
  projectId: string;
}>

export function Project({ children, projectName, projectId }: ProjectPropsType) {
  return (
    <Link to={`/dashboard/project/${projectId}`} className={project.link}>
      <div className={project.container}>
        <div className={project.containerHeader}>{projectName}</div>
        <div className={project.containerBody}>{children}</div>
      </div>
    </Link>
  );
}

