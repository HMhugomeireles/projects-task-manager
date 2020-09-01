import api, { resolveHeader } from "./config";
import endpoints from "./EndPoints";

const ProjectsApi = {
  async getAllProjects(token) {
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

export default ProjectsApi;
