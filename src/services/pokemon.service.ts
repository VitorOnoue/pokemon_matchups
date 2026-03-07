import { CreatePokemonDTO } from '../dto/create-pokemon.dto.js';
import { UpdatePokemonDTO } from '../dto/update-pokemon.dto.js';
import * as pokemonRepository from '../repositories/pokemon.repository.js';
import * as typeRepository from '../repositories/type.repository.js';
import * as moveRepository from '../repositories/move.repository.js';
import { findByNameValidated, findManyByNameValidated } from '../utils/validate-existing-by-name.js';
import * as pokemonMapper from '../mappers/pokemon.mapper.js'

export const findPokemonByName = async (name: string) => {
    const pokemon = await findByNameValidated(name, pokemonRepository.findByName, 'pokemon');
    return pokemon;
}

export const createPokemon = async (dto: CreatePokemonDTO) => {
    const foundTypes = await findManyByNameValidated(dto.types, typeRepository.findManyByName, 'type');
    const typeIds = foundTypes.map(type => type.id);

    const foundMoves = await findManyByNameValidated(dto.moves, moveRepository.findManyByName, 'move');
    const moveIds = foundMoves.map(move => move.id);

    const createData = pokemonMapper.createPokemonDTOMapper(dto, typeIds, moveIds);
    const newPokemon = await pokemonRepository.create(createData);
    return newPokemon;
}

export const updatePokemon = async (name: string, dto: UpdatePokemonDTO) => {
    let typeIds, moveIds: number[] | undefined;

    if (dto.types) {
        const foundTypes = await findManyByNameValidated(dto.types, typeRepository.findManyByName, 'type');
        typeIds = foundTypes.map(type => type.id);
    }

    if (dto.moves) {
        const foundMoves = await findManyByNameValidated(dto.moves, moveRepository.findManyByName, 'move');
        moveIds = foundMoves.map(move => move.id);
    }

    const foundPokemon = await findByNameValidated(name, pokemonRepository.findByName, 'pokemon');
    const pokemonId = foundPokemon.id;
    const updateData = pokemonMapper.updatePokemonDTOMapper(dto, typeIds, moveIds);
    const updatedPokemon = await pokemonRepository.update(pokemonId, updateData);
    return updatedPokemon;
}

export const deletePokemon = async (name: string) => {
    await pokemonRepository.remove(name);
}