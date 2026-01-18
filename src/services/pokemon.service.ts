import { pokemonRepository } from '../repositories/pokemon.repository.js';

export const findByName = async (pokemonName: string) => {
    const result = await pokemonRepository.findByName(pokemonName);
    return result;
}