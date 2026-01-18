import * as pokemonService from './pokemon.service.js';
import * as typesService from './type.service.js';

export const startBattle = async (nameA: string, nameB: string) => {
    const pokemonA = await pokemonService.findByName(nameA);
    const pokemonB = await pokemonService.findByName(nameB);
    return pokemonA;
};