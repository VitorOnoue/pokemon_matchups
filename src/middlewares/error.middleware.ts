import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/app-error.js";

export function errorMiddleware (error: Error, req: Request, res: Response, next: NextFunction) {
    if (error instanceof AppError) {
        return res.status(error.statusCode).json({
            status: "error",
            message: error.message,
        });
    }
    console.log(error);

    return res.status(500).json({
        status: "error",
        message: "internal server error",
        timestamp: new Date().toISOString()
    });
}