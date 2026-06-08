import { Response } from "express";
import { pagination } from "../middleware/pagination";

export function responseHelper(res: Response, data: responseHelperDTO) {
  const payload: responseSchema = {
    data: data.result,
    meta: {
      message: data.message,
    },
  };

  if (data.pagination)
    payload.meta.pagination = {
      limit: data.pagination.limit,
      cursor: data.pagination.cursor,
    };

  return res.status(200).json(payload);
}

export interface responseHelperDTO {
  result: entity | entity[];
  message: string;
  pagination?: pagination;
}

interface responseSchema {
  data: entity | entity[];
  meta: { message: string; pagination?: pagination };
}

interface entity {
  id: string;
}
