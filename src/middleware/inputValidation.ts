import { Request, Response, NextFunction } from "express";
import { z } from "zod";

export function validate<T extends RequestSchema>(schema: z.ZodType<T>) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const request: RequestSchema = {
        body: req.body,
        query: req.query,
        params: req.params,
      };

      const result = schema.safeParse(request);

      if (!result.success) {
        console.error(result.error.flatten());
        return res.status(400).json({
          inputError: result.error.flatten(),
        });
      }

      const data = result.data;

      req.body = data.body;
      req.params = data.params;
      req.validatedQuery = data.query;

      next();
    } catch (e) {
      console.log(e);
      return res.status(500).json({
        inputError: e,
      });
    }
  };
}

interface RequestSchema {
  body?: any;
  query?: any;
  params?: any;
}
