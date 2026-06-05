import { AppError } from "../shared/AppError";
import { Request, Response } from "express";

export function errorHandler(error: AppError) {
  return (req: Request, res: Response) => {
    console.log(error);
    return res
      .status(error.statusCode)
      .json({ message: `Error: ${error.message}` });
  };
}
