import { CreateTypeDTO } from "../dto/create-type.dto.js";
import { NotFoundError } from "../errors/not-found-error.js";
import * as typeRepository from "../repositories/type.repository.js";
import { findByNameValidated } from "../utils/validate-existing-by-name.js";
import * as typeMapper from '../mappers/type.mapper.js';

export const findTypeByName = async (name: string) => {
    const type = await findByNameValidated(name, typeRepository.findByName, 'type');
    return type;
}

export const createType = async (dto: CreateTypeDTO) => {
    const createData = typeMapper.createTypeDTOMapper(dto);
    const newType = await typeRepository.create(createData);
    return newType;
}

export const updateType = async (typeName: string, weaknesses?: string[], resistances?: string[]) => {
    const typeByString = await typeRepository.findByName(typeName);
    if (!typeByString) {
        throw new NotFoundError("type not found");
    }
    const typeId = typeByString.id;

    let weaknessesIds: number[] | undefined;
    if (weaknesses) {
        weaknessesIds = (await typeRepository.findManyByName(weaknesses)).map(type => type.id);
        if (weaknessesIds) {}
    }

    let resistancesIds: number[] | undefined;
    if (resistances) {
        resistancesIds = (await typeRepository.findManyByName(resistances)).map(type => type.id);
    }

    const updateData = typeMapper.updateTypeMapper(weaknessesIds, resistancesIds);
    const updatedType = await typeRepository.updateType(typeId, updateData);
    return updatedType;
}