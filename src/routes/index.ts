import { Request, Response, Router } from "express";
import { apiV1 } from "./api-v1";

export const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Dewe Tour API");
});

router.use("/v1", apiV1);
