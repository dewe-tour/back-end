import { Router } from "express";
import tourControllers from "../../controllers/tour.controllers";

export const tourRouter = Router();

tourRouter.use("/", tourControllers.findAll);
tourRouter.use("/:id", tourControllers.findById);
