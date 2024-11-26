import { RegisterDTO } from "../dto/user.dto";
import { prisma } from "../libs/prisma";

class UserRepositories {
  async create(data: RegisterDTO) {
    return prisma.user.create({
      data,
    });
  }

  async getUserByEmail(email: string) {
    return prisma.user.findUnique({
      where: {
        email,
      },
      select: {
        id: true,
        fullName: true,
        email: true,
        password: true,
        imageProfile: true,
      },
    });
  }
}

export default new UserRepositories();
