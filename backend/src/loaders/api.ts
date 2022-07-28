import { Express, Request, Response } from 'express';
import { secureRoute } from '../middlewares/auth/Auth';
import { ProjectRouter } from '../middlewares/routes/ProjectRouter';
import { UserRouter } from '../middlewares/routes/UserRouter';

type ApiModulePropType = {
  app: Express
}

export function apiModule({ app }: ApiModulePropType) {
  app.use("/user", UserRouter);
  app.use("/project", secureRoute, ProjectRouter);
  // Default
  app.use("/", (request: Request, response: Response) => {
    response.json({
      status: "Server running",
      user: {
        login: "/user/login",
        registration: "/user/registration",
      },
    });
  });
}
