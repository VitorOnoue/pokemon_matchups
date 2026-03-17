export class AppError extends Error {
    public readonly statusCode: number;
    public readonly isOperational: boolean;
    public readonly timestamp: string;
    
    constructor(message: string, statusCode = 400) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = true;
        this.timestamp = new Date().toISOString();

        Error.captureStackTrace(this);
    }
}