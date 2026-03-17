import { Request, Response } from 'express';
import * as moveService from '../services/move.service.js';
import * as moveDtos from '../dto/move.dtos.js';
import * as moveInterfaces from '../interfaces/move.interfaces.js';


export const getMoveByNameController = async (req: Request<moveInterfaces.GetMoveParams>, res: Response) => {
    const name = req.params.moveName;
    const move = await moveService.findMoveByName(name);
    res.status(200).json(move);
}

export const createNewMoveController = async (req: Request<{}, {}, moveDtos.CreateMoveDTO>, res: Response) => {
    const newMove = req.body;
    const created = await moveService.createMove(newMove);
    res.status(200).json(created);
}

export const updateMoveController = async (req: Request<moveInterfaces.UpdateMoveParams, {}, moveDtos.UpdateMoveDTO>, res: Response) => {
    const moveName = req.params.moveName;
    const updateData = req.body;
    const updatedMove = await moveService.updateMove(moveName, updateData);
    res.status(200).json(updatedMove);
}

export const deleteMoveController = async (req: Request<moveInterfaces.DeleteMoveParams>, res: Response) => {
    const moveName = req.params.moveName;
    await moveService.deleteMove(moveName);
    res.sendStatus(204);
}