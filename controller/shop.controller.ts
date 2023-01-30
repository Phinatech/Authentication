import { Response, Request, NextFunction } from "express";
import { IShop } from "../interfaces/shop.interface";
import ShopModel from "../models/shop.model";
import { AppError, HttpCode } from "../utils/AppError";
import { asynHandler } from "../utils/asyncHandler";

export const getShop = asynHandler(
  async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> => {
    const shop = await ShopModel.find();
    if (!shop)
      next(
        new AppError({
          httpCode: HttpCode.NOT_FOUND,
          message: "Shop not found",
          isOperational: true,
        })
      );

    return res.status(HttpCode.OK).json({
      status: "Success",
      data: shop,
    });
  }
);
