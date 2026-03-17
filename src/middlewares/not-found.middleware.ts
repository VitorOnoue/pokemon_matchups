import { Request, Response } from "express"

export function notFoundMiddleware (req: Request, res: Response) {
    return res.status(404).json({
        status: "error",
        message: `route ${req.originalUrl} not found`,
        timestamp: new Date().toISOString()
    })
}