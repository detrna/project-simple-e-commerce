import { Request, Response } from "express";
import { UserService } from "./user.service";

export class UserController {
  async getUser(req: Request, res: Response) {
    try{

      const service = new UserService();
      const result = await service.getUser(req.params.id as string);
      res.json(result);
    } catch (e){
      res.json({msg: e})
    }
  }
  async getAllUser(req: Request, res: Response) {
    try {
      const service = new UserService();
      const result = await service.getAllUser();
      res.json(result);
    } catch (e){
      res.json({msg: e})
    }
  }
}
