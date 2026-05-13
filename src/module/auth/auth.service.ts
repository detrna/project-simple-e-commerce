
import { comparePassword, hashPassword } from "../../shared/bcryptHelper";
import { generateToken } from "../../shared/jwtHelper";
import { UserDTO } from "../user/User";
import { UserRepository } from "../user/user.repository";
import { LoginRequest, RegisterRequest } from "./Auth";
import { AuthRepository } from "./auth.repository";

export class AuthService {
  async register(data: RegisterRequest): Promise<UserDTO | null> {
    const repo = new AuthRepository();
    const userRepo = new UserRepository();

    const existingUser = await userRepo.getUserByEmail(data.email);
    if(existingUser) {
      throw new Error("Email already exists");
    }

    const saltRounds = parseInt(process.env.saltRounds || "10", 10);
    const hashedPassword = await hashPassword(data.password, saltRounds);
    const userData = { ...data, password: hashedPassword };

    const result = await repo.createUser(userData);

    if(!result) {
      throw new Error("Registration failed");
    }
    return result ? result.toSafeObject() : null;
  }
  async login(data: LoginRequest): Promise<{ accessToken: string, refreshToken: string } | null> {
    const repo = new AuthRepository();
    const result = await repo.loginUser(data);

    if (!result) {
      throw new Error("Incorrect email or password");
    }

    const isMatch = await comparePassword(data.password, result.password);
    if(!isMatch){
      throw new Error("Incorrect email or password");
    }

    const accessSecret = process.env.ACCESS_JWT_SECRET;
    const refreshTokenSecret = process.env.REFRESH_JWT_SECRET;
    const jwtPayload = { userId: result.id, email: result.email };

    const accessToken = generateToken(jwtPayload, accessSecret!, {expiresIn: "1d"});
    const refreshToken = generateToken(jwtPayload, refreshTokenSecret!, {expiresIn: "7d"});

    return { accessToken, refreshToken };
  }
}
