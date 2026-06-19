import { Request, Response, NextFunction } from "express";
import { string, z } from "zod";

const defaultLimit = 10;

export const PaginationSchema = z.object({
  limit: string().default(defaultLimit.toString()),
  cursor: string().nullable().default(null),
});

export type pagination = {
  limit: number;
  cursor: string | null;
  hasMore: boolean;
};

export function paginate(req: Request, _: Response, next: NextFunction) {
  let limit: number = Number(req.validatedQuery?.limit) || defaultLimit;
  let cursor: string | null = req.validatedQuery?.cursor?.toString() ?? null;

  if (cursor === "null" || cursor === "") cursor = null;

  if (limit > 50) limit = defaultLimit;
  if (limit <= 0) limit = defaultLimit;

  const pagination: pagination = { limit, cursor, hasMore: false };

  req.pagination = pagination;

  next();
}
