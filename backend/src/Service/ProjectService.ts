const ProjectModel = require("../models/Projects");

module.exports = {
  /**
   *
   */
  async getAllProject({ userId }) {
    try {
      const result = await ProjectModel.find({ userId: userId });

      return result;
    } catch (error) {
      console.error("Error on getAllProject.", error);
      return;
    }
  },

  /**
   *
   */
  async createProject(user, project) {
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
  },

  /**
   *
   */
  async updateProject(user, project) {
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
  },

  /**
   *
   */
  async deleteProject(user, project) {
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
  },

  /**
   *
   */
  async createTask(userId, projectId, task) {
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
  },

  /**
   *
   */
  async updateTask(userId, projectId, task) {
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
  },
};
