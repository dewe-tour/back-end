import { LoginDTO, RegisterDTO } from "../dto/user.dto";
import userRepositories from "../repositories/user.repositories";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class AuthServices {
  async Register(registerBody: RegisterDTO) {
    const existingUser = await userRepositories.getUserByEmail(registerBody.email);
    if (existingUser) {
      throw {
        status: "fail",
        message: "Email already in use",
      };
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(registerBody.password, saltRounds);

    const { password, ...createdUser } = await userRepositories.create({ ...registerBody, password: hashedPassword });
    return createdUser;
  }

  async Login(loginBody: LoginDTO) {
    const user = await userRepositories.getUserByEmail(loginBody.email);

    if (!user) {
      throw {
        message: "Incorrect Email / Password",
      };
    }

    const isPasswordValid = await bcrypt.compare(loginBody.password, user.password);
    if (!isPasswordValid) {
      throw {
        message: "Incorrect Email / Password",
      };
    }

    const { password, ...userToSign } = user;
    const screetKey = process.env.JWT_SCREET_KEY as string;
    const accessToken = jwt.sign(userToSign, screetKey);

    return {
      user: userToSign,
      accessToken,
    };
  }
}

export default new AuthServices();
