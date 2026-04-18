import bcrypt from "bcrypt";
import { IBcryptHelper } from "../../domain/interfaces/IBcryptHelper";

export class bcryptHelper implements IBcryptHelper {
  async hash(password: string): Promise<string> {
    const SALT = Number(process.env.SALT);
    const hashed = await bcrypt.hash(password, SALT);
    return hashed;
  }
  async compare(existingPassword: string, password: string): Promise<boolean> {
    const isMatch = await bcrypt.compare(existingPassword, password);
    return isMatch;
  }
}
