import { prisma } from "../database/prisma.js";

export const findByName = async (name: string) => {
    const type = prisma.type.findFirst({
        where: { name }
    });
    return type;
}