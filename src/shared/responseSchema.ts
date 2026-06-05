import { Response } from "express";

export function response(res: Response, data: data) {
  return res.status(200).json(data);
}

export interface data {
  data: any;
  message: string;
}
