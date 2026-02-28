import { AppError } from "./app-error.js";

export class UnauthorizedError extends AppError {
    constructor(message = "unauthorized") {
        super(message, 401);
    }
}