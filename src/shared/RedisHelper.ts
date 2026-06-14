import "dotenv/config";

import { Redis } from "@upstash/redis";
import { pagination } from "../middleware/pagination";

export class RedisHelper {
  public redis: Redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  });

  async set(data: {
    entityName: string;
    key: string;
    value: any;
  }): Promise<void> {
    const formattedKey = `${data.entityName}:${data.key}`;

    await redis.redis.set(formattedKey, data.value, { ex: 3600 });
  }

  async setPaginated(data: {
    entityName: string;
    userId: string;
    pagination: pagination;
    value: any;
  }): Promise<void> {
    const formattedKey =
      `${data.entityName}` +
      `:user:${data.userId}` +
      `:limit:${data.pagination.limit}` +
      `:cursor:${data.pagination.cursor}`;

    await redis.redis.set(formattedKey, data.value, { ex: 3600 });
  }

  async get(key: string): Promise<any> {
    const value = await redis.redis.get(key);

    return value;
  }
}

export const redis = new RedisHelper();
