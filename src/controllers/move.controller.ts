import { Request, Response } from 'express';
import * as moveService from '../services/move.service.js';
import { CreateMoveDTO } from '../dto/create-move.dto.js';
import { UpdateMoveDTO } from '../dto/update-move.dto.js';

interface GetMoveParams {
    moveName: string;
}

interface UpdateMoveParams {
    moveName: string;
}

interface DeleteMoveParams {
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

export const updateMoveController = async (req: Request<UpdateMoveParams, {}, UpdateMoveDTO>, res: Response) => {
    const moveName = req.params.moveName;
    const updateData = req.body;
    const updatedMove = await moveService.updateMove(moveName, updateData);
    res.status(200).json(updatedMove);
}

export const deleteMoveController = async (req: Request<DeleteMoveParams>, res: Response) => {
    const moveName = req.params.moveName;
    await moveService.deleteMove(moveName);
    res.sendStatus(204);
}