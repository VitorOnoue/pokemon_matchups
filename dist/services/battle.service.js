import * as pokemonService from './pokemon.service.js';
export const startBattle = async (nameA, nameB) => {
    const pokemonA = await pokemonService.findByName(nameA);
    const pokemonB = await pokemonService.findByName(nameB);
    return pokemonA;
};
//# sourceMappingURL=battle.service.js.map