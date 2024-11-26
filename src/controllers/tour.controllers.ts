import { Request, Response } from "express";
import tourServices from "../services/tour.services";

class TourControllers {
  async findAll(req: Request, res: Response) {
    try {
      const tour = await tourServices.findAll();

      res.json({ tour });
    } catch (error) {
      console.log(error);

      const err = error as Error;
      res.status(500).json({
        message: err.message,
      });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const tour = await tourServices.findById(+id);
      res.json({ tour });
    } catch (error) {
      console.log(error);

      const err = error as Error;
      res.status(500).json({
        message: err.message,
      });
    }
  }
}

export default new TourControllers();
