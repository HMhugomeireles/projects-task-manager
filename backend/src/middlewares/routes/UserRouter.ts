import { UserController } from 'Controllers/UserController';
import { Router } from 'express';

const UserRouter = Router();

UserRouter.post("/login", UserController.login);

UserRouter.put("/registration", UserController.registration);

export { UserRouter };

