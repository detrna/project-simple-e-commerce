import { Request, Response } from "express";
import { userService } from "./user.service";

export class userController {
  async getUser(req: Request, res: Response): Promise<void> {
    const service = new userService();
    const result = await service.getUser(req.body);
    res.json(result);
  }
  async getAllUser(req: Request, res: Response): Promise<void> {
    const service = new userService();
    const result = await service.getAllUser();
    res.json(result);
  }
}
