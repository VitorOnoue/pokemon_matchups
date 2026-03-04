import { Prisma } from '@prisma/client';
import * as moveRepository from '../repositories/move.repository.js';
import * as typeRepository from '../repositories/type.repository.js';
import { CreateMoveDTO } from '../dto/create-move.dto.js';
import { findByNameValidated } from '../utils/validate-existing-by-name.js';

export const findMoveByName = async (name: string) => {
    const move = await findByNameValidated(name, moveRepository.findByName, 'move');
    return move;
}

export const createMove = async (dto: CreateMoveDTO) => {
    const type = await findByNameValidated(dto.type, typeRepository.findByName, 'type');
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

