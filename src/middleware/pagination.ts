import { Request, Response, NextFunction } from "express";

export interface pagination {
  limit: number;
  lastId: string | null;
}

export function paginate(req: Request, _: Response, next: NextFunction) {
  const defaultLimit = 10;

  let limit: number = Number(req.query.limit) || defaultLimit;
  const cursor: string | null = req.query.lastId?.toString() ?? null;

  if (limit > 50) limit = defaultLimit;
  if (limit < 0) limit = defaultLimit;

  const pagination: pagination = { limit, cursor };

  req.pagination = pagination;

  next();
}
