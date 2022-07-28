export const endpoints = {
  user: {
    login: "/user/login",
    logout: "/user/logout",
    createUser: "/user",
  },
  projects: {
    allByUser: "/project",
    create: "/project",
    edit: (projectId: string) => `/project/${projectId}`,
    delete: (projectId: string) => `/project/${projectId}`,
  },
  tasks: {
    projectTasks: (projectId: string) => `/project/${projectId}/task`,
    projectTaskCreate: (projectId: string) => `/project/${projectId}/task`,
    projectTaskEdit: (projectId: string, taskId: string) =>
      `/project/${projectId}/task/${taskId}`,
    projectTaskDelete: (projectId: string, taskId: string) =>
      `/project/${projectId}/task/${taskId}`,
  },
};