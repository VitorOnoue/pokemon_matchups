import { Request, Response } from 'express';
import * as moveService from '../services/move.service.js';
import { CreateMoveDTO } from '../dto/create-move.dto.js';

interface GetMoveParams {
    moveName: string;
}

export const getMoveByNameController = async (req: Request<GetMoveParams>, res: Response) => {
    const name = req.params.moveName;
    const move = await moveService.findMoveByName(name);
    res.status(200).json(move);
}

export const createNewMoveController = async (req: Request<{}, {}, CreateMoveDTO>, res: Response) => {
    const newMove = req.body;
    const created = await moveService.createMove(newMove);
    res.status(200).json(created);
}