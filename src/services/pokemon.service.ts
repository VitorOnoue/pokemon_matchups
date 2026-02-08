import * as pokemonRepository from '../repositories/pokemon.repository.js';

export const findPokemonByName = async (name: string) => {
    const pokemon = await pokemonRepository.findByName(name.toLowerCase().trim());
    return pokemon;
}