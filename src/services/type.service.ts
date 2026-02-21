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

export const updateWeaknesses = async (type: string, dto: UpdateWeaknessesDTO) => {
    const weaknessesIds = (await typeRepository.findManyIdsByName(dto.weaknesses)).map(type => type.id);
    const weaknesses = updateWeaknessesDTOMapper(weaknessesIds);
    const updateType = await typeRepository.updateWeaknesses(weaknesses);
}

export const updateWeaknessesDTOMapper = (typeIds: number[]): Prisma.TypeUpdateInput => ({
    weaknesses: {
        set: typeIds.map(id => ({ id }))
    }
})

export const updateResistances = async (type: string, dto: UpdateResistancesDTO) => {
    const resistances = await updateResistancesDTOMapper(dto);
    const updateType = await typeRepository.updateResistances(resistances);
}



export const updateResistancesDTOMapper = (dto: UpdateResistancesDTO): Prisma.TypeUpdateInput => {
    return {
        resistances: dto.resistances
    }
}