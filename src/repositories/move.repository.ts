import { prisma } from "../database/prisma.js";
import { Prisma } from "@prisma/client";

export const create = async (move: Prisma.MoveCreateInput) => {
    const newMove = await prisma.move.create({
        data: move
    });
    return newMove;
}