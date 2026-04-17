import { Request, Response } from "express";
import { RegisterUser } from "../use-cases/registerUser.usecase";
import { authRepository } from "../infrastructure/auth.repository";
import { userRepository } from "../../user/infrastructure/user.repository";

export class AuthController {
  private registerUserUseCase: RegisterUser;

  constructor() {
    this.registerUserUseCase = new RegisterUser(
      new authRepository(),
      new userRepository(),
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
    } catch (e) {
      res.json(e.message);
    }
  }
}
