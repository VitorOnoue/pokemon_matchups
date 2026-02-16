import { CreateTypeDTO } from "../dto/create-type.dto.js";
import * as typeRepository from "../repositories/type.repository.js";
import { Prisma } from "@prisma/client";

export const createType = async (type: CreateTypeDTO) => {
    const newType = await typeRepository.create(type);
    return newType;
}

export const typeInputParser = async (dto: CreateTypeDTO): Prisma.TypeCreateInput => {
    return {
        name: dto.name
    }
}