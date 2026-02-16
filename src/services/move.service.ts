import { Prisma, MoveCategory } from '@prisma/client';
import * as moveRepository from '../repositories/move.repository.js';
import * as typeRepository from '../repositories/type.repository.js';
import { CreateMoveDTO } from '../dto/create-move.dto.js';

export const createMove = async (dto: CreateMoveDTO) => {
    const move: Prisma.MoveCreateInput = await moveInputParser(dto);
    const newMove = await moveRepository.create(move);
    return newMove;
}

export const moveInputParser = async (dto: CreateMoveDTO): Prisma.MoveCreateInput => {
    const type = await typeRepository.findByName(dto.type);
    if (!type) {
        throw new Error("type doesnt exist");
    }
    return {
        name: dto.name,
        category: dto.category as MoveCategory,
        power: dto.power ?? null,
        accuracy: dto.accuracy ?? null,
        pp: dto.pp,
        type: {
            connect: { id: type.id }
        }
    }
}