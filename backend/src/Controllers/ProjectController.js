const ProjectService = require("../Service/ProjectService");
const { StatusCodes } = require("http-status-codes");

module.exports = {
  async getUserProject(request, response, next) {
    try {
      const { userId, newToken } = request;

      const projects = await ProjectService.getAllProject({ userId });

      response.status(StatusCodes.OK).json({
        projects,
        newToken,
      });
    } catch (error) {
      next();
    }
  },

  async createUserProject(request, response, next) {
    try {
      const { userId, newToken } = request;
      const project = request.body;

      const createResult = await ProjectService.createProject(
        { userId },
        project
      );

      if (!createResult) {
        response.status(StatusCodes.NOT_ACCEPTABLE).json({
          error: "Try again.",
          newToken,
        });
      }

      response.status(StatusCodes.OK).json({
        createResult,
        newToken,
      });
    } catch (error) {
      next();
    }
  },

  async updateUserProject(request, response, next) {},

  async deleteUserProject(request, response, next) {},

  async getProjectTask(request, response, next) {},

  async createProjectTask(request, response, next) {
    try {
      const { userId, newToken } = request;
      const task = request.body;
      const projectId = request.params.projectId;

      const createResult = await ProjectService.createTask(
        userId,
        projectId,
        task
      );

      if (!createResult) {
        response.status(StatusCodes.NOT_ACCEPTABLE).json({
          error: "Same error happened, Try again.",
          newToken,
        });
        return;
      }

      response.status(StatusCodes.OK).json({
        createResult,
        newToken,
      });
    } catch (error) {
      next();
    }
  },

  async updateProjectTask(request, response, next) {},

  async deleteProjectTask(request, response, next) {},
};
