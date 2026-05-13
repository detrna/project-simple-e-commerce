import { Request, Response } from "express";
import { UserService } from "./user.service";

export class UserController {
  async getUser(req: Request, res: Response) {
    const service = new UserService();
    const result = await service.getUser(req.body);
    res.json(result);
  }
  async getAllUser(req: Request, res: Response) {
    const service = new UserService();
    const result = await service.getAllUser();
    res.json(result);
  }
}
