import { Prisma } from "@prisma/client";
import * as typeDtos from "../dto/type.dtos.js";

export const createTypeDTOMapper = (dto: typeDtos.CreateTypeDTO): Prisma.TypeCreateInput => {
    return {
        name: dto.name
    }
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