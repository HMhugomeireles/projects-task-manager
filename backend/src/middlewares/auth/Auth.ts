import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
 
const { StatusCodes, getStatusCode } = require("http-status-codes");
const TOKEN_EXPIRE_TIME = require("../../configs/configs").TOKEN_EXPIRE_TIME;

export type RequestType = Request & {
  userId?: string;
  newToken?: string;
}

export async function secureRoute(request: RequestType, response: Response, next: NextFunction) {
    const tokenHeader =
      request.headers["x-access-token"] as string || request.headers["authorization"] as string;

    if (!tokenHeader) {
      response.status(StatusCodes.OK).json({ error: "Forbidden access!" });
      return;
    }

    try {
      let token = tokenHeader.split(" ")[1];

      const jwtPayload = jwt.verify(token, process.env.SECRET as string);

      const { userId } = jwtPayload;

      request.userId = userId;
      request.newToken = jwt.sign({ userId }, process.env.SECRET as string, {
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
  }

