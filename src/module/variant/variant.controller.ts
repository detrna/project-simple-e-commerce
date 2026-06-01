import { CreateVariantDTO, DeleteVariantDTO, Variant } from "./Variant";
import { VariantService } from "./variant.service";
import { Request, Response } from "express";

export class VariantController {
  public service = new VariantService();

  async create(req: Request, res: Response) {
    try {
      const variantService = new VariantService();
      const data: CreateVariantDTO = req.body;

      data.productId = req.params.productId as string;
      data.ownerId = req.user!.userId;

      const result = await variantService.create(data);
      res.json(result);
    } catch (e) {
      res.json(e);
    }
  }

  async getByProductId(req: Request, res: Response) {
    try {
      const variantService = new VariantService();
      const id: string = req.params.productId as string;

      const result = await variantService.getByProductId(id);
      res.json(result);
    } catch (e) {
      res.json(e);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const variantService = new VariantService();
      const variantId: string = req.params.id as string;
      const ownerId: string = req.user!.userId;

      const payload: DeleteVariantDTO = { variantId, ownerId };

      const result = await variantService.delete(payload);

      res.json(result);
    } catch (e) {
      res.json(e);
    }
  }
}
