import * as moveRepository from '../repositories/move.repository.js';
import * as typeRepository from '../repositories/type.repository.js';
import { CreateMoveDTO } from '../dto/move.dtos.js';
import { findByNameValidated } from '../utils/validate-existing-by-name.js';
import * as moveMapper from '../mappers/move.mapper.js';
import * as moveDtos from '../dto/move.dtos.js';

export const findMoveByName = async (name: string) => {
    const move = await findByNameValidated(name, moveRepository.findByName, 'move');
    return move;
}

export const createMove = async (dto: CreateMoveDTO) => {
    const moveType = await findByNameValidated(dto.type, typeRepository.findByName, 'type');
    const createData = moveMapper.createMoveDTOMapper(dto, moveType.id);
    const newMove = await moveRepository.create(createData);
    return newMove;
}

export const updateMove = async (name: string, dto: moveDtos.UpdateMoveDTO) => {
    const foundMove = await findByNameValidated(name, moveRepository.findByName, 'move');
    const foundMoveId = foundMove.id;
    let moveTypeId: number | undefined;
    if (dto.type) {
        const moveType = await findByNameValidated(dto.type, typeRepository.findByName, 'type');
        moveTypeId = moveType.id;
    }
    const updateData = moveMapper.updateMoveDTOMapper(dto, moveTypeId);
    const updatedMove = await moveRepository.update(foundMoveId, updateData);
    return updatedMove;
}

export const deleteMove = async (name: string) => {
    await moveRepository.remove(name);
}