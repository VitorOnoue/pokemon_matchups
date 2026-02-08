import * as pokemonService from './pokemon.service.js';
import * as typesService from './type.service.js';

export const startBattle = async (nameA: string, nameB: string) => {
    const pokemonA = await pokemonService.findPokemonByName(nameA);
    const pokemonB = await pokemonService.findPokemonByName(nameB);
    return pokemonA;
};