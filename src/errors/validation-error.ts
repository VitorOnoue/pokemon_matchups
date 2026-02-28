import { AppError } from "./app-error.js";

export class ValidationError extends AppError {
    constructor(message = "validation error") {
        super(message, 400);
    }
}