import React from "react";

import Project from "../Project";
import Wrapper from "../Wrapper";
import NewProject from "../NewProject";

import projectsStyle from "./projects.module.css";

function Projects(props) {
  return (
    <ul className={projectsStyle.projectList}>
      <Wrapper>
        {props.projects.items.map((project) => (
          <li key={project._id}>
            <Project projectName={project.projectName}>
              <ul>
                {project.tasks.map((task, index) => (
                  <li key={task.description}>
                    <label htmlFor={task.description + index}>
                      <input
                        type="checkbox"
                        name={task.description + index}
                        onChange={() => console.log(task.description + index)}
                      />
                      {task.description}
                    </label>
                  </li>
                ))}
              </ul>
            </Project>
          </li>
        ))}
        <li key="new-project-key">
          <NewProject
            dataInput={props.newProject.dataInput}
            actions={{
              handleSubmitNewProject:
                props.newProject.actions.handleSubmitNewProject,
              handleInputChange: props.newProject.actions.handleInputChange,
            }}
            handleNewProject={props.newProject.actions.handleSubmitNewProject}
          />
        </li>
      </Wrapper>
    </ul>
  );
}

export default Projects;
