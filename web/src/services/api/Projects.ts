import { api, resolveHeader } from "./config";
import { endpoints } from "./EndPoints";

interface IProjectsApi {
  getAllProjects(token: string): Promise<any>;
}

export const ProjectsApi = {
  async getAllProjects(token: string) {
    const requestResult = api.get(
      endpoints.projects.allByUser,
      resolveHeader({
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
    );
    return requestResult;
  },
};
