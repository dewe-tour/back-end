import tourRepositories from "../repositories/tour.repositories";

class TourServices {
  async findAll() {
    return await tourRepositories.FindAll();
  }

  async findById(id: number) {
    return await tourRepositories.FindById(id);
  }
}

export default new TourServices();
