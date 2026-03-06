import * as moveRepository from '../repositories/move.repository.js';
import * as typeRepository from '../repositories/type.repository.js';
import { CreateMoveDTO } from '../dto/create-move.dto.js';
import { findByNameValidated } from '../utils/validate-existing-by-name.js';
import * as moveMapper from '../mappers/move.mapper.js';

export const findMoveByName = async (name: string) => {
    const move = await findByNameValidated(name, moveRepository.findByName, 'move');
    return move;
}

export const createMove = async (dto: CreateMoveDTO) => {
    const type = await findByNameValidated(dto.type, typeRepository.findByName, 'type');
    const move = moveMapper.createMoveDTOMapper(dto, type.id);
    const newMove = await moveRepository.create(move);
    return newMove;
}