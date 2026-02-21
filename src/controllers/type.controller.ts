import { Request, Response } from 'express';
import { CreateTypeDTO } from '../dto/create-type.dto.js';
import { UpdateWeaknessesDTO } from '../dto/update-weaknesses-dto.js';
import { UpdateResistancesDTO } from '../dto/update-resistances-dto.js';
import * as typeService from '../services/type.service.js';

interface UpdateTypeParams {
    typeName: string
}

export const findById = async () => {
    return;
}

export const createNewType = async (req: Request<{}, {}, CreateTypeDTO>, res: Response) => {
    const newType = req.body;
    const created = await typeService.createType(newType);
    res.status(200).json(created);
}

export const updateTypeWeaknesses = async (req: Request<UpdateTypeParams, {}, UpdateWeaknessesDTO>, res: Response) => {
    const type = req.params;
    const weaknesses = req.body;
    const updatedType = await typeService.updateWeaknesses(type, weaknesses);
    res.status(200).json(updatedType);
}

export const updateTypeResistances = async (req: Request<UpdateTypeParams, {}, UpdateResistancesDTO>, res: Response) => {
    const type = req.params;
    const resistances = req.body;
    const updatedType = await typeService.updateResistances(type, resistances);
    res.status(200).json(updatedType);
}