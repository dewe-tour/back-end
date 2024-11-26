import { Request, Response } from "express";
import { LoginDTO, RegisterDTO } from "../dto/user.dto";
import { LoginSchema, RegisterSchema } from "../utils/schemas/auth.schema";
import authServices from "../services/auth.services";
import { date } from "joi";

class AuthControllers {
  async register(req: Request, res: Response) {
    try {
      const registerBody = req.body as RegisterDTO;
      const value = await RegisterSchema.validateAsync(registerBody);
      await authServices.Register(value);
      const data = await authServices.Login(value);

      res.json({
        message: "User Created",
        data,
      });
    } catch (error) {
      console.log(error);

      const err = error as Error;
      res.status(500).json({
        message: err.message,
      });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const loginBody = req.body as LoginDTO;
      const value = await LoginSchema.validateAsync(loginBody);
      const data = await authServices.Login(value);

      res.json({
        message: "User logged succesfully",
        data,
      });
    } catch (error) {
      console.log(error);

      const err = error as Error;
      res.status(500).json({
        message: err.message,
      });
    }
  }
}

export default new AuthControllers();
