import setCookie from "../../shared/cookieHelper";
import { AuthService } from "./auth.service";
import { Request, Response } from "express";

export class AuthController {
  async register(req: Request, res: Response): Promise<Response> {
    const service = new AuthService();
    const result = await service.register(req.body);
    return result ? res.json(result) : res.status(400).json({ message: "Registration failed" });
  }
  async login(req: Request, res: Response): Promise<Response> {
    const service = new AuthService();
    const result = await service.login(req.body)

    if (!result) {
      return res.status(400).json({ message: "Login failed" });
    }

    setCookie(res, "accessToken", result.accessToken, {expiresIn: "1d"});
    setCookie(res, "refreshToken", result.refreshToken, {expiresIn: "7d"});
    return res.json({accessToken: result.accessToken});
  }
}
