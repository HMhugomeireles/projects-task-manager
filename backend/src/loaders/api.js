const { secureRoute } = require("../middlewares/auth/Auth");
const UserRouter = require("../middlewares/routes/UserRouter");
const ProjectRouter = require("../middlewares/routes/ProjectRouter");

// const authMiddleware = require('')

function apiModule({ app }) {
  app.use("/user", UserRouter);
  app.use("/project", secureRoute, ProjectRouter);
  // Default
  app.use("/", (request, response) => {
    response.json({
      status: "Server running",
      user: {
        login: "/user/login",
        registration: "/user/registration",
      },
    });
  });
}

module.exports = apiModule;
