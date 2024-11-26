import { Router } from "express";
import tourControllers from "../../controllers/tour.controllers";

export const tourRouter = Router();

tourRouter.get("/", tourControllers.findAll);
tourRouter.get("/:id", tourControllers.findById);
