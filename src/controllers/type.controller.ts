import { Request, Response } from 'express';
import { CreateTypeDTO } from '../dto/type.dtos.js';
import * as typeDtos from '../dto/type.dtos.js';
import * as typeService from '../services/type.service.js';
import * as typeInterfaces from '../interfaces/type.interfaces.js';

export const getTypeByNameController = async (req: Request<typeInterfaces.GetTypeParams>, res: Response) => {
    const name = req.params.typeName;
    const type = await typeService.findTypeByName(name);
    res.status(200).json(type);
}

export const createNewTypeController = async (req: Request<{}, {}, CreateTypeDTO>, res: Response) => {
    const newType = req.body;
    const created = await typeService.createType(newType);
    res.status(200).json(created);
}

export const updateTypeController = async (req: Request<typeInterfaces.UpdateTypeParams, {}, typeDtos.UpdateTypeDTO>, res: Response) => {
    const type = req.params.typeName;
    const { weaknesses, resistances } = req.body;
    const updatedType = await typeService.updateType(type, weaknesses, resistances);
    res.status(200).json(updatedType);
}

export const deleteTypeController = async (req: Request<typeInterfaces.DeleteTypeParams>, res: Response) => {
    const type = req.params.typeName;
    await typeService.deleteType(type);
    res.sendStatus(204);
}