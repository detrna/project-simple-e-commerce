import { Request, Response } from "express";
import { RegisterUser } from "../use-cases/registerUser.usecase";
import { authRepository } from "./auth.repository";
import { UserAPI } from "../../user/public/UserAPI";

export class AuthController {
  private registerUserUseCase: RegisterUser;

  constructor() {
    this.registerUserUseCase = new RegisterUser(
      new authRepository(),
      new UserAPI(),
    );
  }

  async register(req: Request, res: Response) {
    try {
      const { name, email, password, confirm } = req.body;
      const result = await this.registerUserUseCase.registerUser({
        name,
        email,
        password,
        confirm,
      });
      res.json(result);
    } catch (e: any) {
      res.json(e.message);
    }
  }
}
