import { Router } from "express";
import authControllers from "../../controllers/auth.controllers";

export const authRouter = Router();

authRouter.post("/register", authControllers.register);
authRouter.post("/login", authControllers.login);
