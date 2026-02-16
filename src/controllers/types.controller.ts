import { Request, Response } from 'express';
import { CreateTypeDTO } from '../dto/create-type.dto.js';
import { UpdateWeaknessesDTO } from '../dto/update-weaknesses-dto.js';
import { UpdateResistancesDTO } from '../dto/update-resistances-dto.js';
import * as typeService from '../services/type.service.js';

export const findById = async () => {
    return;
}

export const createNewType = async (req: Request<{}, {}, CreateTypeDTO>, res: Response) => {
    const newType = req.body;
    const created = await typeService.createType(newType);
    res.status(200).json(created);
}

export const updateTypeWeaknesses = async (req: Request<{}, {}, UpdateWeaknessesDTO>, res: Response) => {
    const weaknesses = req.body;
    const updatedType = await typeService.updateWeaknesses(weaknesses);
    res.status(200).json(updatedType);
}

export const updateTypeResistances = async (req: Request<{}, {}, UpdateResistancesDTO>, res: Response) => {
    const resistances = req.body;
    const updatedType = await typeService.updateResistances(resistances);
    res.status(200).json(updatedType);
}