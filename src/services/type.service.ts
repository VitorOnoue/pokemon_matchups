import { CreateTypeDTO } from "../dto/create-type.dto.js";
import { UpdateWeaknessesDTO } from '../dto/update-weaknesses-dto.js';
import { UpdateResistancesDTO } from '../dto/update-resistances-dto.js';
import * as typeRepository from "../repositories/type.repository.js";
import { Prisma } from "@prisma/client";

export const createType = async (dto: CreateTypeDTO) => {
    const type = createTypeDTOMapper(dto);
    const newType = await typeRepository.create(type);
    return newType;
}

export const createTypeDTOMapper = (dto: CreateTypeDTO): Prisma.TypeCreateInput => {
    return {
        name: dto.name
    }
}

export const updateWeaknesses = async (typeName: string, dto: UpdateWeaknessesDTO) => {
    const typeByString = await typeRepository.findByName(typeName);
    if (!typeByString) {
        throw new Error('corintia');
    }
    const typeId = typeByString.id;
    const weaknessesIds = (await typeRepository.findManyByName(dto.weaknesses)).map(type => type.id);
    const weaknesses = updateWeaknessesDTOMapper(weaknessesIds);
    const updatedType = await typeRepository.updateType(typeId, weaknesses);
    return updatedType;
}

export const updateWeaknessesDTOMapper = (typeIds: number[]): Prisma.TypeUpdateInput => {
    return {
        weaknesses: {
            set: typeIds.map(id => ({ id }))
        }
    };
};

export const updateResistances = async (typeName: string, dto: UpdateResistancesDTO) => {
    const typeByString = await typeRepository.findByName(typeName);
    if (!typeByString) {
        throw new Error('corintia');
    }
    const typeId = typeByString.id;
    const resistancesIds = (await typeRepository.findManyByName(dto.resistances)).map(type => type.id);
    const resistances = updateResistancesDTOMapper(resistancesIds);
    const updatedType = await typeRepository.updateType(typeId, resistances);
    return updatedType;
}

export const updateResistancesDTOMapper = (typeIds: number[]): Prisma.TypeUpdateInput => {
    return {
        resistances: {
            set: typeIds.map(id => ({ id }))
        }
    };
};