import { Response } from "express";

export function sendResponse(
  res: Response,
  {
    success,
    statusCode,
    message,
    data,
    pagination,
  }: {
    success: boolean;
    statusCode: number;
    message: string;
    data?: any;
    pagination?: any;
  },
) {
  return res.status(statusCode).json({
    success,
    message,
    data,
    pagination,
  });
}
