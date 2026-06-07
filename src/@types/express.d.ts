import { pagination } from "../middleware/pagination";

declare global {
  namespace Express {
    interface Request {
      user?: {
        userId: string;
        name: string;
      };
      pagination?: pagination;
    }
  }
}

export {};
