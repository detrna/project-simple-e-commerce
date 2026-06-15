import { AppError } from "../shared/AppError";
import { NextFunction, Request, Response } from "express";

export function errorHandler(
  err: AppError | Error,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.error(err);
  if (err instanceof AppError) {
    return res
      .status(err.statusCode)
      .json({ message: `Error: ${err.message}` });
  } else if (err instanceof Error) {
    return res.status(500).json({ message: `Error: ${err.message}` });
  }
}
