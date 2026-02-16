import { prisma } from "../database/prisma.js";
import { Prisma } from "@prisma/client";

export const findByName = async (name: string) => {
    const type = prisma.type.findFirst({
        where: { name }
    });
    return type;
}

export const create = async (type: Prisma.TypeCreateInput) => {
    const newType = await prisma.move.create({
        data: type
    });
    return newType;
}