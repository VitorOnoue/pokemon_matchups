import { Prisma } from "@prisma/client";
import { CreateMoveDTO } from "../dto/create-move.dto.js";
import { UpdateMoveDTO } from "../dto/update-move.dto.js";

export const createMoveDTOMapper = (dto: CreateMoveDTO, typeId: number): Prisma.MoveCreateInput => {
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

export const updateMoveDTOMapper = (dto: UpdateMoveDTO, typeId?: number) => {
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