import { Response } from "express";
import { pagination } from "../middleware/pagination";

export function responseHelper(res: Response, data: responseHelperDTO) {
  const payload: responseSchema = data.pagination
    ? {
        data: data.content,
        message: data.message,
        meta: {
          pagination: {
            cursor: data.content[data.content.length - 1].id,
            limit: data.pagination?.limit,
          },
        },
      }
    : { data: data.content, message: data.message };

  return res.status(200).json(payload);
}

export interface responseHelperDTO {
  content: entity[];
  message: string;
  pagination?: pagination;
}

interface responseSchema {
  data: entity[];
  message: string;
  meta?: {
    pagination: pagination;
  };
}

interface entity {
  id: string;
}
