import { Prisma } from "@prisma/client";
import * as moveDtos from '../dto/move.dtos.js';

export const createMoveDTOMapper = (dto: moveDtos.CreateMoveDTO, typeId: number): Prisma.MoveCreateInput => {
    const data: any = {
        name: dto.name,
        category: dto.category,
        power: dto.power ?? null,
        accuracy: dto.accuracy ?? null,
        pp: dto.pp,
        type: {
            connect: { id: typeId }
        }
    }
    return data;
}

export const updateMoveDTOMapper = (dto: moveDtos.UpdateMoveDTO, typeId?: number) => {
    const data: any = {
        name: dto.name,
        category: dto.category,
        power: dto.power ?? null,
        accuracy: dto.accuracy ?? null,
        pp: dto.pp
    }
    if (typeId !== undefined) {
        data.type = {
            connect: { id: typeId}
        }
    }
    return data;
}