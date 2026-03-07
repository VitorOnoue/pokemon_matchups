import { prisma } from "../database/prisma.js";
import { Prisma } from "@prisma/client";

export const findByName = async (name: string) => {
    const move = await prisma.move.findFirst({
        where: { name }
    })
    return move;
}

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

export const update = async (id: number, data: Prisma.MoveUpdateInput) => {
    const move = await prisma.move.update({
        where: { id },
        data
    })
    return move;
}

export const remove = async (name: string) => {
    await prisma.move.delete({
        where: { name }
    });
}