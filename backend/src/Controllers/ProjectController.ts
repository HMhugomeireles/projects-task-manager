import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { RequestType } from 'middlewares/auth/Auth';
import { ProjectService } from 'Service/ProjectService';


async function getUserProject(request: RequestType, response: Response, next: NextFunction) {
  try {
    const { userId, newToken } = request;

    if (!userId) throw Error('UserId undefined');
    const projects = await ProjectService.getAllProject({ userId });

    response.status(StatusCodes.OK).json({
      projects,
      newToken,
    });
  } catch (error) {
    next();
  }
}

async function createUserProject(request: RequestType, response: Response, next: NextFunction) {
  try {
    const { userId, newToken } = request;
    const project = request.body;

    if (!userId) throw Error('UserId undefined');

    const createResult = await ProjectService.createProject(
      {
        userId,
        username: '',
        password: ''
      },
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
}

async function updateUserProject(request: Request, response: Response, next: NextFunction) {}
async function deleteUserProject(request: Request, response: Response, next: NextFunction) {}
async function getProjectTask(request: Request, response: Response, next: NextFunction) {}

async function createProjectTask(request: RequestType, response: Response, next: NextFunction) {
  try {
    const { userId, newToken } = request;
    const task = request.body;
    const projectId = request.params.projectId;

    if (!userId) throw Error('UserId undefined');

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
}

async function updateProjectTask(request: Request, response: Response, next: NextFunction) {}
async function deleteProjectTask(request: Request, response: Response, next: NextFunction) {}

const ProjectController = {
  getUserProject,
  createUserProject,
  updateUserProject,
  deleteUserProject,
  getProjectTask,
  createProjectTask,
  updateProjectTask,
  deleteProjectTask
}

export { ProjectController };

