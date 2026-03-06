import { Prisma } from "@prisma/client";
import { CreateMoveDTO } from "../dto/create-move.dto.js";

export const createMoveDTOMapper = (dto: CreateMoveDTO, typeId: number): Prisma.MoveCreateInput => {
    return {
        name: dto.name,
        category: dto.category,
        power: dto.power ?? null,
        accuracy: dto.accuracy ?? null,
        pp: dto.pp,
        type: {
            connect: { id: typeId }
        }
    }
}