import { prisma } from "../libs/prisma";

class TourRepositories {
  async FindAll() {
    return prisma.tour.findMany({
      include: {
        tourImage: true,
      },
    });
  }

  async FindById(id: number) {
    return prisma.tour.findUnique({
      where: {
        id,
      },
    });
  }
}

export default new TourRepositories();
