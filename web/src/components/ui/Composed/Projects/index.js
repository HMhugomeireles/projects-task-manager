import React from "react";

import Project from "../../Project";
import Wrapper from "../../Wrapper";
import NewProject from "../../NewProject";

import projectsStyle from "./projects.module.css";
import Loading from "./../../Loading/index";
import UtilDates from "../../../../util/Dates";

function Projects(props) {
  return (
    <section>
      <Wrapper>
        <NewProject
          dataInput={props.newProject.dataInput}
          actions={{
            handleSubmitNewProject:
              props.newProject.actions.handleSubmitNewProject,
            handleInputChange: props.newProject.actions.handleInputChange,
          }}
          handleNewProject={props.newProject.actions.handleSubmitNewProject}
        />
      </Wrapper>
      <ul className={projectsStyle.projectList}>
        <Wrapper>
          {props.projects.items === undefined ? (
            <Loading message="Loading content about you." />
          ) : (
            props.projects.items.map((project) => (
              <li key={project._id}>
                <Project
                  projectId={project._id}
                  projectName={project.projectName}
                >
                  <div className={projectsStyle.projectDetails}>
                    <span>Total Tasks</span> 0/{project.tasks.length}
                  </div>
                  <div className={projectsStyle.projectDetails}>
                    <span>Create Date:</span>{" "}
                    {UtilDates.formateDate(project.createdAt)}
                  </div>
                  <div className={projectsStyle.projectDetails}>
                    <span>Last update Date:</span>{" "}
                    {UtilDates.formateDate(project.updatedAt)}
                  </div>
                </Project>
              </li>
            ))
          )}
        </Wrapper>
      </ul>
    </section>
  );
}

export default Projects;
