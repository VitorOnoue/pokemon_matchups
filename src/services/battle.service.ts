import { findByNameValidated } from '../utils/validate-existing-by-name.js';
import * as pokemonService from './pokemon.service.js';
import * as battleOperations from '../utils/battle-operations.js';

export const pokemonBattle = async (nameA: string, nameB: string) => {
    const pokemonA = await findByNameValidated(nameA, pokemonService.findPokemonByName, 'pokemon');
    const pokemonB = await findByNameValidated(nameB, pokemonService.findPokemonByName, 'pokemon');
    let response;
    const isAFaster: boolean = battleOperations.checkSpeed(pokemonA, pokemonB);
    battleOperations.battleTurn(pokemonA, pokemonB, isAFaster);
    return;
};