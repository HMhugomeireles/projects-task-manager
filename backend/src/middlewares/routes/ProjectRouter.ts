import { Router } from "express";
import { ProjectController } from '../../Controllers/ProjectController';

const ProjectRouter = Router();

/**
 * Project
 */

ProjectRouter.get("/", ProjectController.getUserProject);

ProjectRouter.put("/", ProjectController.createUserProject);

ProjectRouter.post(
  "/:projectId",

  ProjectController.updateUserProject
);

ProjectRouter.delete("/:projectId", ProjectController.deleteUserProject);

/**
 * Tasks
 */

ProjectRouter.get("/:projectId/task", ProjectController.getProjectTask);

ProjectRouter.put("/:projectId/task", ProjectController.createProjectTask);

ProjectRouter.post(
  "/:projectId/task/:taskId",
  ProjectController.updateProjectTask
);

ProjectRouter.delete(
  "/:projectId/task/:taskId",
  ProjectController.deleteProjectTask
);

export { ProjectRouter };

