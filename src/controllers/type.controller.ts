import { Request, Response } from 'express';
import { CreateTypeDTO } from '../dto/create-type.dto.js';
import { UpdateTypeDTO } from '../dto/update-type.dto.js';
import * as typeService from '../services/type.service.js';
import { UpdateTypeParams } from '../dto/update-type-params.dto.js';

interface GetTypeParams {
    typeName: string
}

export const getTypeByNameController = async (req: Request<GetTypeParams>, res: Response) => {
    const name = req.params.typeName;
    const type = await typeService.findTypeByName(name);
    res.status(200).json(type);
}

export const createNewTypeController = async (req: Request<{}, {}, CreateTypeDTO>, res: Response) => {
    const newType = req.body;
    const created = await typeService.createType(newType);
    res.status(200).json(created);
}

export const updateTypeController = async (req: Request<UpdateTypeParams, {}, UpdateTypeDTO>, res: Response) => {
    const type = req.params.typeName;
    const { weaknesses, resistances } = req.body;
    const updatedType = await typeService.updateType(type, weaknesses, resistances);
    res.status(200).json(updatedType);
}