import { VariantService } from "./variant.service";
import { Request, Response } from "express";
export declare class VariantController {
    service: VariantService;
    create(req: Request, res: Response): Promise<void>;
    getByProductId(req: Request, res: Response): Promise<void>;
    delete(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=variant.controller.d.ts.map