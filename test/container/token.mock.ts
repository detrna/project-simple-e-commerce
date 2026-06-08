import { generateToken } from "../../src/shared/jwtHelper";

export class mockToken {
  static userToken = generateToken(
    { userId: "user-1", name: "budi" },
    process.env.ACCESS_JWT_SECRET as string,
    { expiresIn: "1d" },
  );

  static nonexistentUserToken = generateToken(
    { userId: "user-nonexistent-1", name: "budi" },
    process.env.ACCESS_JWT_SECRET as string,
    { expiresIn: "1d" },
  );

  static unauthorizedUserToken = generateToken(
    { userId: "user-unauthorized-1", name: "budi" },
    process.env.ACCESS_JWT_SECRET as string,
    { expiresIn: "1d" },
  );

  static ownerToken = generateToken(
    { userId: "owner-1", name: "owner" },
    process.env.ACCESS_JWT_SECRET as string,
    { expiresIn: "1d" },
  );

  static testUserToken = generateToken(
    { userId: "user-test-1", name: "budi" },
    process.env.ACCESS_JWT_SECRET as string,
    { expiresIn: "1d" },
  );
}
