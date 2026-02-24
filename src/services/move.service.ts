import { Prisma, MoveCategory } from '@prisma/client';
import * as moveRepository from '../repositories/move.repository.js';
import * as typeRepository from '../repositories/type.repository.js';
import { CreateMoveDTO } from '../dto/create-move.dto.js';

export const createMove = async (dto: CreateMoveDTO) => {
    const type = await typeRepository.findByName(dto.type);
    if (!type) {
        throw new Error("type doesnt exist");
    }
    const move: Prisma.MoveCreateInput = createMoveDTOMapper(dto, type.id);
    const newMove = await moveRepository.create(move);
    return newMove;
}

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