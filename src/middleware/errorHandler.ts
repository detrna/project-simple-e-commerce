import { AppError } from "../shared/AppError";
import { Request, Response } from "express";

export function errorHandler(error: AppError) {
  console.log("test");
  return (req: Request, res: Response) => {
    console.error(error);
    return res
      .status(error.statusCode)
      .json({ message: `Error: ${error.message}` });
  };
}
