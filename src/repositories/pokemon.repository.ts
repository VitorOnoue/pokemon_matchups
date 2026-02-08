import { prisma } from "../database/prisma.js";

export const findByName = async (name: string) => {
    return prisma.pokemon.findUnique({
        where: { name }
    });
}