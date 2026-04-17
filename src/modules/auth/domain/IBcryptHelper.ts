export interface IBcryptHelper {
  compare(existingPassword: string, password: string): Promise<boolean>;
  hash(password: string): Promise<string>;
}
