import { Prisma } from "@prisma/client";
import * as pokemonDtos from "../dto/pokemon.dtos.js";

export const createPokemonDTOMapper = (dto: pokemonDtos.CreatePokemonDTO, typeIds: number[], moveIds: number[]): Prisma.PokemonCreateInput => {
    const data = {
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
    return data;
}

export const updatePokemonDTOMapper = (dto: pokemonDtos.UpdatePokemonDTO, typeIds?: number[], moveIds?: number[]): Prisma.PokemonUpdateInput => {
    const data: any = {
        number: dto.number,
        name: dto.name,
        hp: dto.hp,
        atk: dto.atk,
        spAtk: dto.spAtk,
        defense: dto.defense,
        spDefense: dto.spDefense,
        speed: dto.speed
    }
    if (typeIds !== undefined) {
        data.types = {
            deleteMany: {},
            create: typeIds.map(typeId => ({
                type: {
                    connect: { id: typeId }
                }
            }))
        }
    }
    if (moveIds !== undefined) {
        data.moves = {
            deleteMany: {},
            create: moveIds.map(moveId => ({
                move: {
                    connect: { id: moveId }
                }
            }))
        }
    }
    return data;
}