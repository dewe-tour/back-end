import { Router } from "express";
import { tourRouter } from "./api-v1/tour.routers";

export const apiV1 = Router();

apiV1.use("/tour", tourRouter);
