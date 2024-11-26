import { Router } from "express";
import { tourRouter } from "./api-v1/tour.routers";
import { authRouter } from "./api-v1/auth.routers";

export const apiV1 = Router();

apiV1.use("/tour", tourRouter);
apiV1.use("/auth", authRouter);
