import { Request, Response, NextFunction } from "express";
import { redis } from "../shared/RedisHelper";
import { responseHelper, responseHelperDTO } from "../shared/responseHelper";

export function getCache(data: { entityName: string; paramsKey: string }) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const params: string = req.params[data.paramsKey] as string;

      const key = `${data.entityName}:${params}`;

      const value = await redis.get(key);

      if (!value) {
        return next();
      }

      const payload: responseHelperDTO = {
        result: value,
        message: "Cached data fetched successfully",
      };

      return responseHelper(res, payload);
    } catch (e) {
      console.error(e);
    }
  };
}

export function getPaginatedCache(entity: string) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.user!.userId;
      const { cursor, limit } = req.pagination!;

      const key = `${entity}:user:${userId}:limit:${limit}:cursor:${cursor}`;

      const value = await redis.get(key);

      if (!value) {
        return next();
      }

      const payload: responseHelperDTO = {
        result: value,
        message: "Cached data fetched successfully",
        pagination: {
          cursor: value[limit - 1].id,
          limit: limit,
        },
      };

      return responseHelper(res, payload);
    } catch (e) {
      console.error(e);
    }
  };
}
