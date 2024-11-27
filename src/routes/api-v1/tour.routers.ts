import { Router } from "express";
import tourControllers from "../../controllers/tour.controllers";
import { Authentication } from "../../middlewares/authentication";

export const tourRouter = Router();

tourRouter.get("/", Authentication, tourControllers.findAll);
tourRouter.get("/:id", tourControllers.findById);
