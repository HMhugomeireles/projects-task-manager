const express = require("express");
const UserController = require("../../Controllers/UserController");

const UserRouter = new express.Router();

UserRouter.post("/login", UserController.login);

UserRouter.put("/registration", UserController.registration);

module.exports = UserRouter;
