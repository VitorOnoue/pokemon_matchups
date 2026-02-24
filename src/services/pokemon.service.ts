import { CreatePokemonDTO } from '../dto/create-pokemon.dto.js';
import * as pokemonRepository from '../repositories/pokemon.repository.js';
import * as typeRepository from '../repositories/type.repository.js';
import * as moveRepository from '../repositories/move.repository.js';
import { Prisma } from '@prisma/client';

export const findPokemonByName = async (name: string) => {
    const pokemon = await pokemonRepository.findByName(name.toLowerCase().trim());
    return pokemon;
}

export const createPokemon = async (dto: CreatePokemonDTO) => {
    const typeIds = (await typeRepository.findManyByName(dto.types)).map(type => type.id);
    const moveIds = (await moveRepository.findManyByName(dto.moves)).map(move => move.id);

    const pokemon = createPokemonDTOMapper(dto, typeIds, moveIds);
    const newPokemon = await pokemonRepository.create(pokemon);
    return newPokemon;
}

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