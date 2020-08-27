const { StatusCodes } = require("http-status-codes");
const UserService = require("../Service/UserService");

module.exports = {
  /**
   *
   */
  async login(request, response, next) {
    try {
      const user = request.body;
      // TODO validation user

      const token = await UserService.login(user);

      if (token) {
        response.status(StatusCodes.ACCEPTED).json({
          user: {
            username: user.username,
          },
          token: token,
        });
        return;
      }

      response.status(StatusCodes.OK).json({
        user: {
          username: user.username,
          password: "???",
        },
        error: "Username and Password are wrong",
      });
    } catch (error) {
      next();
    }
  },

  /**
   *
   */
  async registration(request, response, next) {
    try {
      const user = request.body;
      // TODO validation user

      const creationResult = await UserService.createUserAccount(user);

      if (creationResult) {
        response.status(StatusCodes.CREATED).json({
          user: creationResult,
        });
        return;
      }

      response.status(StatusCodes.OK).json({
        error: "User not available.",
      });
    } catch (error) {
      next();
    }
  },
};
