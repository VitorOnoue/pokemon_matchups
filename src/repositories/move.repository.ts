import { prisma } from "../database/prisma.js";
import { Prisma } from "@prisma/client";

export const findManyByName = async (names: string[]) => {
    const moves = await prisma.move.findMany({
        where: {
            name: {
                in: names
            }
        }
    });
    return moves;
}

export const create = async (move: Prisma.MoveCreateInput) => {
    const newMove = await prisma.move.create({
        data: move
    });
    return newMove;
}