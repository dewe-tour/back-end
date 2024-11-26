import Joi from "joi";
import { RegisterDTO } from "../../dto/user.dto";
import { LoginDTO } from "../../dto/user.dto";

export const RegisterSchema = Joi.object<RegisterDTO>({
  fullName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6),
  phoneNumber: Joi.string().min(10).max(15),
});

export const LoginSchema = Joi.object<LoginDTO>({
  email: Joi.string().email().required(),
  password: Joi.string().min(6),
});
