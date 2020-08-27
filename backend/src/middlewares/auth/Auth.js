const jwt = require("jsonwebtoken");
const { StatusCodes, getStatusCode } = require("http-status-codes");
const TOKEN_EXPIRE_TIME = require("../../configs/configs").TOKEN_EXPIRE_TIME;

module.exports = {
  async secureRoute(request, response, next) {
    const tokenHeader =
      request.headers["x-access-token"] || request.headers["authorization"];

    if (!tokenHeader) {
      response.status(StatusCodes.OK).json({ error: "Forbidden access!" });
      return;
    }

    try {
      let token = tokenHeader.split(" ")[1];

      const jwtPayload = jwt.verify(token, process.env.SECRET);

      const { userId } = jwtPayload;

      request.userId = userId;
      request.newToken = jwt.sign({ userId }, process.env.SECRET, {
        expiresIn: TOKEN_EXPIRE_TIME,
      });

      next();
    } catch (error) {
      response.status(StatusCodes.OK).json({
        error: "Forbidden access! Try login again.",
        message: "Token not valid.",
      });
      return;
    }
  },
};
