// * Initial State Object

export const INITIAL_PROJECTS = {
  loading: false,
  projects: [],
};

// * Action Types

export const ProjectsActionTypes = {
  GET_ALL_PROJECTS: "GET_ALL_PROJECTS",
  GET_PROJECT: "GET_PROJECT",
  CREATE_PROJECT: "CREATE_PROJECT",
  UPDATE_PROJECT: "UPDATE_PROJECT",
  DELETE_PROJECT: "DELETE_PROJECT",
};
