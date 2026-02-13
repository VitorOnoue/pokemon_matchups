import { Prisma, MoveCategory } from '@prisma/client';
import * as moveRepository from '../repositories/move.repository.js';
import * as typeRepository from '../repositories/type.repository.js';
import { CreateMoveDTO } from '../dto/create-move.dto.js';

export const createMove = async (dto: CreateMoveDTO) => {
    const type = await typeRepository.findByName(dto.type);
    if (!type) {
        throw new Error("type doesnt exist");
    }
    const move: Prisma.MoveCreateInput = {
        name: dto.name,
        category: parseCategory(dto.category),
        power: dto.power ?? null,
        accuracy: dto.accuracy ?? null,
        pp: dto.pp,
        type: {
            connect: {id: type.id }
        }
    }

    const newMove = await moveRepository.create(move);
    return newMove;
}

function parseCategory (category: string): MoveCategory {
    return category as MoveCategory;
}