const endpoints = {
  user: {
    login: "/user/login",
    logout: "/user/logout",
    createUser: "/user",
  },
  projects: {
    allByUser: "/project",
    create: "/project",
    edit: (projectId) => `/project/${projectId}`,
    delete: (projectId) => `/project/${projectId}`,
  },
  tasks: {
    projectTasks: (projectId) => `/project/${projectId}/task`,
    projectTaskCreate: (projectId) => `/project/${projectId}/task`,
    projectTaskEdit: (projectId, taskId) =>
      `/project/${projectId}/task/${taskId}`,
    projectTaskDelete: (projectId, taskId) =>
      `/project/${projectId}/task/${taskId}`,
  },
};

export default endpoints;
