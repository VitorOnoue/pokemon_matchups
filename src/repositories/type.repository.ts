import { prisma } from "../database/prisma.js";
import { Prisma } from "@prisma/client";

export const findByName = async (name: string) => {
    const type = prisma.type.findFirst({
        where: { name }
    });
    return type;
}

export const findManyByName = async (names: string[]) => {
    const types = await prisma.type.findMany({
        where: {
            name: {
                in: names
            }
        }
    });
    return types;
}

export const create = async (type: Prisma.TypeCreateInput) => {
    const newType = await prisma.type.create({
        data: type
    });
    return newType;
}

export const updateType = async (id: number, data: Prisma.TypeUpdateInput) => {
    const updatedType = await prisma.type.update({
        where: { id },
        data
    });
    return updatedType;
}