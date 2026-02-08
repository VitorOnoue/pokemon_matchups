import { CreatePokemonDTO } from '../dto/create-pokemon.dto.js';
import * as pokemonRepository from '../repositories/pokemon.repository.js';

export const findPokemonByName = async (name: string) => {
    const pokemon = await pokemonRepository.findByName(name.toLowerCase().trim());
    return pokemon;
}

export const createPokemon = async (pokemon: CreatePokemonDTO) => {
    await pokemonRepository.create(pokemon);
    return;
}