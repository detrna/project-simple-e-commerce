import { User } from "../user/User";
import { RegisterRequest } from "./Auth";
import { authService } from "./auth.service";
import { Request, Response } from "express";

export class authController {
  async register(req: Request, res: Response): Promise<User | null> {
    const service = new authService();
    const body: RegisterRequest = req.body;
    const result = await service.register(body);
    return result;
  }
}
