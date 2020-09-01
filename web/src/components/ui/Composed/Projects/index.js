import React from "react";

import Project from "../../Project";
import Wrapper from "../../Wrapper";
import NewProject from "../../NewProject";
import Task from "../../Task";

import projectsStyle from "./projects.module.css";
import Loading from "./../../Loading/index";

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
                <Project projectName={project.projectName}>
                  <ul>
                    {project.tasks.map((task, index) => (
                      <li className={projectsStyle.taskRow} key={task._id}>
                        <Task
                          task={{
                            description: task.description,
                            id: task._id,
                          }}
                          isChecked={false}
                          actions={{
                            handleCheck: props.projects.actions.handleCheck,
                            handleCheckboxChange:
                              props.projects.actions.handleCheckboxChange,
                          }}
                        />
                      </li>
                    ))}
                  </ul>
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
