import { IProject, ProjectModel } from 'models/Projects';
import { ITask } from 'models/Tasks';
import { IUser } from 'models/User';

type GetAllProjectType = {
  userId: string
}


async function getAllProject({ userId }: GetAllProjectType) {
  try {
    const result = await ProjectModel.find({ userId: userId });

    return result;
  } catch (error) {
    console.error("Error on getAllProject.", error);
    return;
  }
}

async function createProject(user: IUser, project: IProject) {
  try {
    const result = await ProjectModel.create({
      userId: user.userId,
      projectName: project.projectName,
      task: [],
    });

    return result;
  } catch (error) {
    console.error("Error on createProject.", error);
    return;
  }
}

async function updateProject(user: IUser, project: IProject) {
  try {
    const projectFound = await ProjectModel.find({
      userId: user.userId,
      _id: project.projectId,
    });

    projectFound.projectName = project.projectName;

    const projectSaved = await projectFound.save();

    return projectSaved;
  } catch (error) {
    console.error("Error on updateProject.", error);
    return;
  }
}

async function deleteProject(user: IUser, project: IProject) {
  try {
    const projectFound = await ProjectModel.find({
      userId: user.userId,
      _id: project.projectId,
    });

    await projectFound.save();

    return true;
  } catch (error) {
    console.error("Error on updateProject.", error);
    return false;
  }
}

async function createTask(userId: string, projectId: string, task: ITask) {
  try {
    const projectFound = await ProjectModel.findOne({
      _id: projectId,
      userId: userId,
    });

    projectFound.tasks.push(task);

    const projectTaskSaved = await projectFound.save();

    return projectTaskSaved;
  } catch (error) {
    console.error("Error on createTask.", error);
    return undefined;
  }
}

async function updateTask(userId: string, projectId: string, task: ITask) {
  try {
    const projectFound = await ProjectModel.find({
      _id: projectId,
      userId: userId,
    });

    const { tasks } = projectFound;

    const taskIndex = tasks.findIndex(
      (taskItem) => taskItem.description === task.description
    );

    projectFound.tasks[taskIndex] = {
      ...projectFound.tasks[taskIndex],
      ...task,
    };

    const projectSaved = await projectFound.save();

    return projectSaved;
  } catch (error) {
    console.error("Error on updateTask.", error);
    return;
  }
}


export const ProjectService = {
  getAllProject,
  createProject,
  updateProject,
  deleteProject,
  createTask,
  updateTask
}