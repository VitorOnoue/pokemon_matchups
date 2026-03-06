import { Prisma } from "@prisma/client";
import { CreatePokemonDTO } from "../dto/create-pokemon.dto.js";

export const createPokemonDTOMapper = (dto: CreatePokemonDTO, typeIds: number[], moveIds: number[]): Prisma.PokemonCreateInput => {
    return {
        number: dto.number,
        name: dto.name,
        hp: dto.hp,
        atk: dto.atk,
        spAtk: dto.spAtk,
        defense: dto.defense,
        spDefense: dto.spDefense,
        speed: dto.speed,
        types: {
            create: typeIds.map(typeId => ({
                type: {
                    connect: { id: typeId }
                }
            }))
        },
        moves: {
            create: moveIds.map(moveId => ({
                move: {
                    connect: { id: moveId }
                }
            }))
        }
    }
}