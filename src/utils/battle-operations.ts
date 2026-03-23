import * as pokemonInterfaces from '../interfaces/pokemon.interfaces.js';

export function checkSpeed (pokemonA: pokemonInterfaces.Pokemon, pokemonB: pokemonInterfaces.Pokemon): boolean {
    return pokemonA.speed >= pokemonB.speed ? true : false;
}

export function battleTurn(pokemonA: pokemonInterfaces.Pokemon, pokemonB: pokemonInterfaces.Pokemon, isAFaster: boolean) {

};