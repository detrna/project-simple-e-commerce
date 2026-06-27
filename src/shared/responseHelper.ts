import { Response } from "express";
import { pagination } from "../middleware/pagination";

export function responseHelper(res: Response, data: responseHelperDTO) {
  const payload: responseSchema = {
    data: data.result,
  };

  if (data.message)
    payload.meta = {
      message: data.message,
    };

  if (
    data.pagination &&
    Array.isArray(data.result) &&
    data.result.length !== 0
  ) {
    const limit = data.pagination.limit;

    payload.meta = {
      ...payload.meta,
      pagination: {
        limit,
        cursor: data.result[data.result.length - 1].id!,
        hasMore: data.result.length === limit ? true : false,
      },
    };
  }

  return res.status(200).json(payload);
}

export interface responseHelperDTO {
  result: entity | entity[];
  message?: string;
  pagination?: pagination;
}

interface responseSchema {
  data: entity | entity[];
  meta?: { message?: string; pagination?: pagination };
}

interface entity {
  id?: string;
}
