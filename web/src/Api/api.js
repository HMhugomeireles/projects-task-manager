const DOMAIN = "http://localhost:4444";

export const Api = {
  user: {
    authentication: {
      url: `${DOMAIN}/user/login`,
      method: "POST",
    },
    registration: {
      url: `${DOMAIN}/user/registration`,
      method: "PUT",
    },
  },
  projects: {
    allByUser: {
      url: () => `${DOMAIN}/project`,
      method: "GET",
    },
    create: {
      url: () => `${DOMAIN}/project`,
      method: "PUT",
    },
    edit: {
      url: (projectId) => `${DOMAIN}/project/${projectId}`,
      method: "POST",
    },
    delete: {
      url: (projectId) => `${DOMAIN}/project/${projectId}`,
      method: "DELETE",
    },
  },
  tasks: {
    projectTasks: (projectId) => `${DOMAIN}/project/${projectId}/task`,
    projectTaskCreate: (projectId) => `${DOMAIN}/project/${projectId}/task`,
    projectTaskEdit: (projectId, taskId) =>
      `${DOMAIN}/project/${projectId}/task/${taskId}`,
    projectTaskDelete: (projectId, taskId) =>
      `${DOMAIN}/project/${projectId}/task/${taskId}`,
  },
};
