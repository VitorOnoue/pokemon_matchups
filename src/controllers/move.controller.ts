import { Request, Response } from 'express';
import * as moveService from '../services/move.service.js';
import { CreateMoveDTO } from '../dto/create-move.dto.js';

export const createNewMove = async (req: Request<{}, {}, CreateMoveDTO>, res: Response) => {
    const newMove = req.body;
    const created = await moveService.createMove(newMove);
    res.status(200).json(created);
}