import { CreateTypeDTO } from "../dto/create-type.dto.js";
import { NotFoundError } from "../errors/not-found-error.js";
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

export const updateType = async (typeName: string, weaknesses?: string[], resistances?: string[]) => {
    const typeByString = await typeRepository.findByName(typeName);
    if (!typeByString) {
        throw new NotFoundError("type not found");
    }
    const typeId = typeByString.id;

    let weaknessesIds: number[] | undefined;
    if (weaknesses) {
        weaknessesIds = (await typeRepository.findManyByName(weaknesses)).map(type => type.id);
    }

    let resistancesIds: number[] | undefined;
    if (resistances) {
        resistancesIds = (await typeRepository.findManyByName(resistances)).map(type => type.id);
    }

    const data = updateTypeMapper(weaknessesIds, resistancesIds);
    const updatedType = await typeRepository.updateType(typeId, data);
    return updatedType;
}

export const updateTypeMapper = (weaknesses?: number[], resistances?: number[]): Prisma.TypeUpdateInput => {
    const data: Prisma.TypeUpdateInput = {};
    if (weaknesses !== undefined) {
        data.weaknesses = {
            set: weaknesses.map(id => ({ id }))
        };
    };
    if (resistances !== undefined) {
        data.resistances = {
            set: resistances.map(id => ({ id }))
        }
    };
    return data;
};